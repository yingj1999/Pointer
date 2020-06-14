import { Component, OnInit } from '@angular/core';
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

  constructor(private router: Router) { }

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
