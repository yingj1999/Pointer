import { Component, OnInit } from '@angular/core';
import {
  AmplifyService
} from '@flowaccount/aws-amplify-angular';
import {
  Router
} from '@angular/router';
@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnInit {

  constructor(public amplifyService: AmplifyService, public router: Router) {
    this.amplifyService = amplifyService;
    this.amplifyService.authStateChange$
      .subscribe(authState => {
        if (authState.state === 'signedIn') {
          this.router.navigate(['/profile']);
        }
        else if (authState.state === 'signedOut') {
          this.router.navigate(['/login']);
        }
      });
}

  ngOnInit(): void {
    
  }

}
