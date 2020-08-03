import { Component, OnInit,Inject, Input } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import {ReviewStruct, ReviewArray} from '../interfaces/review-struct';
import {Store} from '@ngrx/store';
import {PointerState} from '../store/interface';
import {currentUser,currentUserReviews} from '../store/selectors';
import{setCurrentUser,setCurrentUserReviews} from '../store/actions';
import {HttpClient,HttpHeaders} from "@angular/common/http";
import {User} from '../interfaces/user';
import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/map';
import * as rsx from 'rxjs'

interface DialogData {
  isNewReview: boolean;
  readOnly:boolean;
}

@Component({
  selector: 'app-popup',
  templateUrl: './popup.component.html',
  styleUrls: ['./popup.component.css']
})
export class PopupComponent implements OnInit {
  @Input() currentReview: ReviewStruct;
  private apiLink="https://esnih9p6ae.execute-api.us-east-1.amazonaws.com/v1";
  public user: User;
  public currentReviewCopy: ReviewStruct;
  public newReview:boolean;
  public userReviews: ReviewArray;
  public tagArray:string[];
  public imageURL:string;
  public readOnly:boolean;
  public isEdit:boolean=false;
  public httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json',
      'Authorization': 'my-auth-token'
    })
  };
  constructor(
    public dialogRef: MatDialogRef<PopupComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData,private http:HttpClient, private store:Store<PointerState>) {
      this.store.select(currentUser).subscribe((value:User)=>{
        this.user=value;
        this.newReview=data.isNewReview;
        this.readOnly=data.readOnly;
      });
      this.store.select(currentUserReviews).subscribe((value:ReviewArray)=>{
        this.userReviews=value;
      });
    }

  onNoClick(): void {
    this.dialogRef.close();
  }

  ngOnInit(): void {
    this.currentReviewCopy = {
      reviewId:this.currentReview.reviewId,
          title:this.currentReview.title,
          description:this.currentReview.description,
          image:this.currentReview.image,
          rating:this.currentReview.rating,
          tags:this.currentReview.tags
    };
    this.imageURL="../../assets/images/thumbs/01.jpg";
  }

   saveData(){
    if(this.newReview){
      var newReview:ReviewStruct={
        reviewId:null,
        title:((document.getElementById("titleInput") as HTMLInputElement).value),
        description:((document.getElementById("descriptionInput") as HTMLInputElement).value),
        image:this.imageURL,
        rating:Number(((document.getElementById("ratingInput") as HTMLInputElement).value)),
        tags:this.tagArray
      }
    this.dialogRef.close({newReview:newReview});
    }
    else{
      this.currentReviewCopy.title = ((document.getElementById("titleInput") as HTMLInputElement).value);
      this.currentReviewCopy.rating = Number(((document.getElementById("ratingInput") as HTMLInputElement).value));
      this.currentReviewCopy.description = ((document.getElementById("descriptionInput") as HTMLInputElement).value);
      this.currentReviewCopy.tags=this.tagArray;
      this.updateReviewInDB(this.currentReviewCopy).subscribe((data: Object)=>{});
      var userReviewsCopy:ReviewStruct[]= Object.assign([], this.userReviews.Items); 
      userReviewsCopy.forEach( (element) => {
        if(element.reviewId==this.currentReviewCopy.reviewId){
          const newReviewCopy:ReviewStruct={
            reviewId:this.currentReviewCopy.reviewId,
            title:this.currentReviewCopy.title,
            description:this.currentReviewCopy.description,
            image:this.currentReviewCopy.image,
            rating:this.currentReviewCopy.rating,
            tags:this.currentReviewCopy.tags
          };
          userReviewsCopy.forEach( (item, index) => {
            if(item.reviewId === this.currentReviewCopy.reviewId){userReviewsCopy.splice(index,1);} 
          });
          userReviewsCopy.unshift(newReviewCopy);
        }
    });
      var data: ReviewArray={Items:userReviewsCopy};
      console.log(data);
      this.store.dispatch(setCurrentUserReviews({currentUserReviews:data}));
      this.isEdit=false;
    }
  }
  getTagArray($event){
    this.tagArray=$event;
    console.log(this.tagArray);
  }
  getImageURL($event){
    this.imageURL=$event;
    if (this.imageURL=='none'){
      this.imageURL="../../assets/images/thumbs/01.jpg";
    }
    console.log(this.imageURL);
  }
  updateReviewInDB(currentReviewCopy:ReviewStruct){
    console.log(currentReviewCopy);
    return this.http.put<Object>(this.apiLink+"/user/"+this.user.username+"/reviews/"+currentReviewCopy.reviewId,currentReviewCopy, this.httpOptions);
  }
  getAllReviews() {
    return this.http.get<Object>(this.apiLink+"/user/"+(this.user.username)+"/reviews");
  }
  clickEdit(){
    this.isEdit=true;
  }
 
  
}
