import { Component, OnInit,Inject, SystemJsNgModuleLoader } from '@angular/core';
import Amplify, {API} from 'aws-amplify';
import {MatDialog, MatDialogConfig, MAT_DIALOG_DATA} from '@angular/material/dialog';
import {PopupComponent} from '../popup/popup.component';
import {HttpClient,HttpHeaders} from "@angular/common/http";
import {Auth} from 'aws-amplify';
import {Router} from '@angular/router';
import {User,UserDbObject} from '../interfaces/user'
import aws_exports from '../../aws-exports';
import {ReviewStruct,ReviewArray} from '../interfaces/review-struct';

Amplify.configure(aws_exports);
@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  public user: User;
  public userName: string;
  public userReviews: ReviewArray;
  private apiLink="https://esnih9p6ae.execute-api.us-east-1.amazonaws.com/v1";
  constructor(private router: Router,public dialog: MatDialog,private http:HttpClient) { 
    this.user={username:null,image:null,reviews:[]}
  }
  openDialog(): void {
    const dialogConfig=new MatDialogConfig();
    this.dialog.open(PopupComponent, {
      data: {},
      panelClass: 'custom-modalbox'
    });
    dialogConfig.autoFocus = true;
   
  }
  ngOnInit(): void {
    Auth.currentAuthenticatedUser({
      bypassCache: false
    }).then(async user => {
      this.userName = user.username;
      this.getUserInfo().subscribe((data: UserDbObject)=>{
        this.user=data.Item;
      });
      this.getAllReviews().subscribe((data: ReviewArray)=>{
        this.userReviews=data;
        console.log(this.userReviews);
      });
    })
    .catch(err => console.log(err))
  }
  logOut(){
    Auth.signOut({ global: true })
    .then(data => {
      this.router.navigate(['/auth']);
    })
    .catch(err => console.log(err));
  }
  getUserInfo() {
    return this.http.get<Object>(this.apiLink+"/user/"+this.userName);
  }
  getAllReviews() {
    return this.http.get<Object>(this.apiLink+"/user/"+(this.userName)+"/reviews");
  }
}
