import { Component} from '@angular/core';
import { Router } from '@angular/router';
import {
  AmplifyService
} from '@flowaccount/aws-amplify-angular';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'pointer-app';
  onDiscoverPage=false;
  public signInStatus:boolean;
  constructor(private router: Router,public amplifyService: AmplifyService) {
    this.amplifyService = amplifyService;
    this.amplifyService.authStateChange$
      .subscribe(authState => {
        if (authState.state === 'signedIn' && !this.onDiscoverPage) {
          console.log("two")
          this.router.navigate(['/profile']);
          this.signInStatus=true;
        }
        else if (authState.state === 'signedOut') {
          this.router.navigate(['/login']);
          this.signInStatus=false;
        }
      });
  }
  
  onHomeClick(){
    console.log("going home")
    this.onDiscoverPage=true;
    this.router.navigate(['/home']);
  }
  onProfileClick(){
    this.onDiscoverPage=false;
    this.router.navigate(['/profile']);
  }
  
}
