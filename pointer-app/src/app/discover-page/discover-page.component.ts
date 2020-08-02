import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ReviewStruct, ReviewArray } from '../interfaces/review-struct';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-discover-page',
  templateUrl: './discover-page.component.html',
  styleUrls: ['./discover-page.component.css']
})
export class DiscoverPageComponent implements OnInit {
  public group:Array<ReviewStruct[]>;
  private apiLink="https://esnih9p6ae.execute-api.us-east-1.amazonaws.com/v1";
  constructor(private router: Router,private http:HttpClient) { }

  ngOnInit(): void {
    this.getAllReviews().subscribe((data: ReviewArray)=>{
      console.log(data.Items)
      this.group = this.groupArray(data.Items, 3);
    });
  }
  onHomeClick(){
    console.log("going home")
    this.router.navigate(['/home']);
  }
  onProfileClick(){
    this.router.navigate(['/profile']);
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
  return this.http.get<Object>(this.apiLink+"/user");
}
}
