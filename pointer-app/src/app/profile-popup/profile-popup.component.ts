import { Component, OnInit } from '@angular/core';
import { User } from '../interfaces/user';
import { MatDialogRef } from '@angular/material/dialog';
import { Store } from '@ngrx/store';
import { PointerState } from '../store/interface';
import { currentUser } from '../store/selectors';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { setCurrentUser } from '../store/actions';


@Component({
  selector: 'app-profile-popup',
  templateUrl: './profile-popup.component.html',
  styleUrls: ['./profile-popup.component.css']
})
export class ProfilePopupComponent implements OnInit {
  public user: User;
  public imageURL:string;
  public httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json',
      'Authorization': 'my-auth-token'
    })
  };
  private apiLink="https://esnih9p6ae.execute-api.us-east-1.amazonaws.com/v1";
  constructor(public dialogRef: MatDialogRef<ProfilePopupComponent>,private store:Store<PointerState>,private http:HttpClient) {
    this.store.select(currentUser).subscribe((value:User)=>{
      this.user=value;
      this.imageURL=this.user.image;
    });
   }

  ngOnInit(): void {
  }
  onNoClick(): void {
    this.dialogRef.close();
  }
  saveData(){
    const userUpdates={image:this.imageURL};
    this.updateUser(userUpdates).subscribe((data)=>{
      this.store.dispatch(setCurrentUser({currentUser:{username:this.user.username,image:this.imageURL}}));
    });   
  }
  getImageURL($event){
    this.imageURL=$event;
  }
  updateUser(userUpdates){
    return this.http.put<Object>(this.apiLink+"/user/"+this.user.username,userUpdates, this.httpOptions);   
  }

}
