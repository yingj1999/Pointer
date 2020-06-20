import { Component, OnInit,Inject } from '@angular/core';

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
@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  arr: ReviewStruct[] = [];
  user = new User('', '', '', this.arr);
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
  }
  logOut(){
    Auth.signOut({ global: true })
    .then(data => {
      this.router.navigate(['/auth']);
    })
    .catch(err => console.log(err));
  }

}
