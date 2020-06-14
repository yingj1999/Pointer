import { Component, OnInit } from '@angular/core';
import {
  AmplifyService
} from 'aws-amplify-angular';
import {
  Router
} from '@angular/router';
@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
