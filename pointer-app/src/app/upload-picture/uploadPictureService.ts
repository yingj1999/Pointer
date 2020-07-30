import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable()
export class UploadPictureService {

  private usersApiBaseUrl = '';  // URL to web api

  constructor(private httpClient: HttpClient) {
    //this.usersApiBaseUrl = environment.API_URL + '/personal/users';
  }

  uploadProfileImage(userId: String, image: File): Observable<any> {
    const formData = new FormData();
    formData.append('image', image);

    return this.httpClient.post(`${this.usersApiBaseUrl}/${userId}/profile-picture`, formData);
  }
  // imports and other methods are absent for brevity
}