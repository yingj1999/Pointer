import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AmplifyAngularModule, AmplifyService } from '@flowaccount/aws-amplify-angular';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListComponent } from './list/list.component';
import { AuthComponent } from './auth/auth.component';
import { ProfileComponent } from './profile/profile.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    ListComponent,
    AuthComponent,
    ProfileComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AmplifyAngularModule,
    FormsModule, ReactiveFormsModule
  ],
  providers: [AmplifyService],
  bootstrap: [AppComponent]
})
export class AppModule { }
