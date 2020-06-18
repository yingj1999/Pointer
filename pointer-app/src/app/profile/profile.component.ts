import { Component, OnInit,Inject } from '@angular/core';

import {MatDialog, MatDialogConfig, MAT_DIALOG_DATA} from '@angular/material/dialog';
import {PopupComponent} from '../popup/popup.component'
import {
  Auth
} from 'aws-amplify';
import {
  Router
} from '@angular/router';
@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  email: string;
  constructor(private router: Router,public dialog: MatDialog) { }
  openDialog(): void {
    const dialogConfig=new MatDialogConfig();
    const dialogRef = this.dialog.open(PopupComponent, {
      data: {},
      panelClass: 'custom-modalbox'
    });

    dialogRef.afterClosed().subscribe(result => {
      this.email = result;
    });
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
