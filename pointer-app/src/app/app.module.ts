import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AmplifyAngularModule, AmplifyService } from '@flowaccount/aws-amplify-angular';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListComponent } from './list/list.component';
import { AuthComponent } from './auth/auth.component';
import { ProfileComponent } from './profile/profile.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PopupComponent } from './popup/popup.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material.module';
import {HttpClientModule} from '@angular/common/http';
import{PointerStoreModule} from './store/store.module';
import { TagsComponent } from './tags/tags.component';
import { UploadPictureComponent } from './upload-picture/upload-picture.component';
import { DiscoverPageComponent } from './discover-page/discover-page.component';
import { ProfilePopupComponent } from './profile-popup/profile-popup.component';

@NgModule({
  declarations: [
    AppComponent,
    ListComponent,
    AuthComponent,
    ProfileComponent,
    PopupComponent,
    TagsComponent,
    DiscoverPageComponent,
    UploadPictureComponent,
    ProfilePopupComponent
  ],
  entryComponents: [
    PopupComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AmplifyAngularModule,
    FormsModule, 
    ReactiveFormsModule, 
    BrowserAnimationsModule,
    MaterialModule,
    HttpClientModule,
    PointerStoreModule,
  ],
  providers: [AmplifyService],
  bootstrap: [AppComponent]
})
export class AppModule { }
