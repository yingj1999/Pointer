import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ReviewStruct, ReviewArray } from '../interfaces/review-struct';
import { HttpClient } from '@angular/common/http';
import { MatDialogConfig, MatDialog } from '@angular/material/dialog';
import { PopupComponent } from '../popup/popup.component';
import { User } from '../interfaces/user';
import { currentUser } from '../store/selectors';
import { Store } from '@ngrx/store';
import { PointerState } from '../store/interface';

@Component({
  selector: 'app-discover-page',
  templateUrl: './discover-page.component.html',
  styleUrls: ['./discover-page.component.css']
})
export class DiscoverPageComponent implements OnInit {
  public group:Array<ReviewStruct[]>;
  public user: User;
  private apiLink="https://esnih9p6ae.execute-api.us-east-1.amazonaws.com/v1";
  constructor(private router: Router,private http:HttpClient,public dialog: MatDialog,private store:Store<PointerState>) {
    this.store.select(currentUser).subscribe((value:User)=>{
      this.user=value;
    });
   }

  ngOnInit(): void {
    this.getAllReviews().subscribe((data: ReviewArray)=>{
      this.group = this.groupArray(data.Items, Math.ceil(data.Items.length/3));
    });
  }
  onHomeClick(){
    this.router.navigate(['/home']);
  }
  onProfileClick(){
    this.router.navigate(['/profile']);
  }
  openDialog(clickedReview:ReviewStruct): void {
    const dialogConfig=new MatDialogConfig();
    const popup=this.dialog.open(PopupComponent, {
      data: {isNewReview:false, readOnly:true},
      panelClass: 'custom-modalbox'
    });
    
        (<PopupComponent>popup.componentInstance).currentReview = clickedReview;
    dialogConfig.autoFocus = true;
  }
  search(){
    this.searchReviews(((document.getElementById("discoverSearch") as HTMLInputElement).value)).subscribe((data: ReviewArray)=>{
      this.group = this.groupArray(data.Items, Math.ceil(data.Items.length/3));
    });
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
getAllReviews() {
  return this.http.get<Object>("https://esnih9p6ae.execute-api.us-east-1.amazonaws.com/v1/populatediscover/"+this.user.username);
}
searchReviews(searchKey){
  return this.http.get<Object>("https://esnih9p6ae.execute-api.us-east-1.amazonaws.com/v1/"+searchKey);
}
}
