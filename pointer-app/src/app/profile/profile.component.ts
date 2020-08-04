import { Component, OnInit,Inject, SystemJsNgModuleLoader, ChangeDetectorRef } from '@angular/core';
import Amplify, {API} from 'aws-amplify';
import {MatDialog, MatDialogConfig, MAT_DIALOG_DATA} from '@angular/material/dialog';
import {PopupComponent} from '../popup/popup.component';
import {Auth} from 'aws-amplify';
import {Router} from '@angular/router';
import {User,UserDbObject} from '../interfaces/user'
import aws_exports from '../../aws-exports';
import {ReviewStruct,ReviewArray} from '../interfaces/review-struct';
import {Store} from '@ngrx/store';
import {PointerState} from '../store/interface';
import {currentUser,currentUserReviews} from '../store/selectors';
import{setCurrentUser,setCurrentUserReviews} from '../store/actions';
import {HttpClient,HttpHeaders} from "@angular/common/http";
interface ReturnReview{
  body:string;
  headers:Object;
  statusCode:Number;
}
Amplify.configure(aws_exports);
@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  public group:Array<ReviewStruct[]>;
  public httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json',
      'Authorization': 'my-auth-token'
    })
  };
  public user: User;
  public userName: string;
  public userReviews: ReviewArray;
  private apiLink="https://esnih9p6ae.execute-api.us-east-1.amazonaws.com/v1";
  constructor(private router: Router,public dialog: MatDialog,private http:HttpClient, private store:Store<PointerState>,private ref: ChangeDetectorRef) { 
    this.store.select(currentUser).subscribe((value:User)=>{
      this.user=value;
    });
    this.store.select(currentUserReviews).subscribe((value:ReviewArray)=>{
      this.userReviews=value;
    });
  }
  ngOnInit(): void {
    Auth.currentAuthenticatedUser({
      bypassCache: false
    }).then(async user => {
      this.userName = user.username;
      console.log(user.username);
      this.getUserInfo().subscribe((data: UserDbObject)=>{
        this.store.dispatch(setCurrentUser({currentUser:data.Item}));
      });
      this.getAllReviews().subscribe((data: ReviewArray)=>{
        this.store.dispatch(setCurrentUserReviews({currentUserReviews:data}));
        this.group = this.groupArray(this.userReviews.Items, Math.ceil(this.userReviews.Items.length/3));
      });
    })
    .catch(err => console.log(err));
  }
  openDialog(clickedReview:ReviewStruct): void {
    const dialogConfig=new MatDialogConfig();
    const popup=this.dialog.open(PopupComponent, {
      data: {isNewReview:false,readOnly:false},
      panelClass: 'custom-modalbox',
      autoFocus: false,
      maxHeight: document.body.clientHeight 
    });
    
    console.log(clickedReview.tags);
        (<PopupComponent>popup.componentInstance).currentReview = clickedReview;
    popup.afterClosed().subscribe(result => {
      this.group = this.groupArray(this.userReviews.Items, Math.ceil(this.userReviews.Items.length/3));
    });
  }
  async newReview(){
    const dialogConfig=new MatDialogConfig();
    const popup=this.dialog.open(PopupComponent, {
      data: {isNewReview:true,readOnly:false},
      panelClass: 'custom-modalbox',
      autoFocus: false,
      maxHeight: document.body.clientHeight 
    });
    dialogConfig.autoFocus = true;
    popup.afterClosed().subscribe(async result => {
      const data=await this.addNewReview(result.newReview);
      var returnReview:ReviewStruct=JSON.parse(data.body);
      result.newReview.reviewId=returnReview.reviewId;
      var userReviewsCopy:ReviewStruct[]= Object.assign([], this.userReviews.Items); 
      userReviewsCopy.push(result.newReview);
      var newReviewArray: ReviewArray={Items:userReviewsCopy};
      this.store.dispatch(setCurrentUserReviews({currentUserReviews:newReviewArray}));
      this.group = this.groupArray(this.userReviews.Items, Math.ceil(this.userReviews.Items.length/3));
    });
  }
  logOut(){
    Auth.signOut({ global: true })
    .then(data => {
      this.router.navigate(['/auth']);
      this.store.dispatch(setCurrentUser({currentUser:null}));
      this.store.dispatch(setCurrentUserReviews({currentUserReviews:null}));
    })
    .catch(err => console.log(err));
  }
  getUserInfo() {
    return this.http.get<Object>(this.apiLink+"/user/"+this.userName);
  }
  getAllReviews() {
    return this.http.get<Object>(this.apiLink+"/user/"+(this.userName)+"/reviews");
  }
  groupArray<ReviewStruct>(data: Array<ReviewStruct>, n: number): Array<ReviewStruct[]> {
    let group = new Array<ReviewStruct[]>();
​
    for (let i = 0, j = 0; i < data.length; i++) {
        if (i >= n && i % n === 0)
            j++;
        group[j] = group[j] || [];
        group[j].push(data[i])
    }
​
    return group;
}
async addNewReview(newReview:ReviewStruct){
  const response=await this.http.post<Object>(this.apiLink+"/user/"+(this.userName)+"/reviews",newReview, this.httpOptions).toPromise();
  return response as ReturnReview;
}
}
