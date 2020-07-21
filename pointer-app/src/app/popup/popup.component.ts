import { Component, OnInit,Inject, Input } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import {ReviewStruct, ReviewArray} from '../interfaces/review-struct';
import {Store} from '@ngrx/store';
import {PointerState} from '../store/interface';
import {currentUser,currentUserReviews} from '../store/selectors';
import{setCurrentUser,setCurrentUserReviews} from '../store/actions';
import {HttpClient,HttpHeaders} from "@angular/common/http";
import {User} from '../interfaces/user'

interface DialogData {
  email: string;
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
      });
    }

  onNoClick(): void {
    this.dialogRef.close();
  }

  ngOnInit(): void {
  }

  saveData(){
    this.currentReviewCopy = Object.assign({}, this.currentReview);
    this.currentReviewCopy.title = ((document.getElementById("titleInput") as HTMLInputElement).value);
    this.currentReviewCopy.rating = Number(((document.getElementById("ratingInput") as HTMLInputElement).value));
    this.currentReviewCopy.description = ((document.getElementById("descriptionInput") as HTMLInputElement).value);
    this.updateReviewInDB(this.currentReviewCopy).subscribe((data: Object)=>{
        console.log(data);
    });
    this.getAllReviews().subscribe((data: ReviewArray)=>{
      this.store.dispatch(setCurrentUserReviews({currentUserReviews:data}));
    });
    parent.location.reload();
  }
  updateReviewInDB(currentReviewCopy:ReviewStruct){
    return this.http.put<Object>(this.apiLink+"/user/"+this.user.username+"/reviews/"+currentReviewCopy.reviewId,currentReviewCopy, this.httpOptions);
  }
  getAllReviews() {
    return this.http.get<Object>(this.apiLink+"/user/"+(this.user.username)+"/reviews");
  }
  
}
