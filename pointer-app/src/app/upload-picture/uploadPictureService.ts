import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class UploadPictureService {

  constructor(private httpClient: HttpClient) {}


  imageUpload(imageForm: FormData) {
    console.log('image uploading');
    return this.httpClient.post('http://localhost:3000/api/v1/upload', 
    imageForm);
   }
}