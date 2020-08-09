import { Component, OnInit ,Input } from '@angular/core';
import {HttpClient,HttpHeaders} from "@angular/common/http";
import {ReviewStruct} from '../interfaces/review-struct'

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  @Input()
  currentReview:ReviewStruct;
  constructor(private http:HttpClient) { }

  ngOnInit(): void {
  }

}
