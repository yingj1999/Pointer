import { Component, OnInit,Inject, SystemJsNgModuleLoader } from '@angular/core';
import Amplify, {API} from 'aws-amplify';
import {MatDialog, MatDialogConfig, MAT_DIALOG_DATA} from '@angular/material/dialog';
import {PopupComponent} from '../popup/popup.component'
import {
  Auth
} from 'aws-amplify';
import {
  Router
} from '@angular/router';
import {User} from '../user'
import {ReviewStruct} from '../review-struct'
import aws_exports from '../../aws-exports';

Amplify.configure(aws_exports);
@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  params = {
    response: true
  }
  arr: ReviewStruct[] = [];
  user = new User('', '', '', this.arr);
  userName: string;
  response:any;
  constructor(private router: Router,public dialog: MatDialog) { }
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
      this.getUserInfo();
    })
    .catch(err => console.log(err))
    API.get("pointerapi", "/profile", this.params).then(response => {
      debugger;
      // Add your code here
    }).catch(error => {
      debugger;
      console.log(error.response)
    });
  }
  logOut(){
    Auth.signOut({ global: true })
    .then(data => {
      this.router.navigate(['/auth']);
    })
    .catch(err => console.log(err));
  }
  getUserInfo() {
    const conditions = {
      queryStringParameters: {  
        username: this.userName,
    },
    }
    API.get("pointerapi", "/user", conditions).then(response => {
      this.response=(response)
      // Add your code here
    }).catch(error => {
      console.log(error.response)
    });
  }

}
