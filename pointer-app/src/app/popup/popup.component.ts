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
      });
      this.store.select(currentUserReviews).subscribe((value:ReviewArray)=>{
        this.userReviews=value;
      });
    }

  onNoClick(): void {
    this.dialogRef.close();
  }

  ngOnInit(): void {
  }

   saveData(){
    if(this.newReview){
      var newReview:ReviewStruct={
        reviewId:null,
        title:((document.getElementById("titleInput") as HTMLInputElement).value),
        description:((document.getElementById("descriptionInput") as HTMLInputElement).value),
        image:null,
        rating:Number(((document.getElementById("ratingInput") as HTMLInputElement).value)),
        tags:null
      }
    this.dialogRef.close({newReview:newReview});
    }
    else{
      this.currentReviewCopy = Object.assign({}, this.currentReview);
      this.currentReviewCopy.title = ((document.getElementById("titleInput") as HTMLInputElement).value);
      this.currentReviewCopy.rating = Number(((document.getElementById("ratingInput") as HTMLInputElement).value));
      this.currentReviewCopy.description = ((document.getElementById("descriptionInput") as HTMLInputElement).value);
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
      this.store.dispatch(setCurrentUserReviews({currentUserReviews:data}));
      this.dialogRef.close();
    }
  }

  updateReviewInDB(currentReviewCopy:ReviewStruct){
    console.log(currentReviewCopy);
    return this.http.put<Object>(this.apiLink+"/user/"+this.user.username+"/reviews/"+currentReviewCopy.reviewId,currentReviewCopy, this.httpOptions);
  }
  getAllReviews() {
    return this.http.get<Object>(this.apiLink+"/user/"+(this.user.username)+"/reviews");
  }
 
  
}
