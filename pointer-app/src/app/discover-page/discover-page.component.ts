import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-discover-page',
  templateUrl: './discover-page.component.html',
  styleUrls: ['./discover-page.component.css']
})
export class DiscoverPageComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }
  onHomeClick(){
    console.log("going home")
    this.router.navigate(['/home']);
  }
  onProfileClick(){
    this.router.navigate(['/profile']);
  }

}
