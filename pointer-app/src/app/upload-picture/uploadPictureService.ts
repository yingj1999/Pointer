import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class UploadPictureService {

  constructor(private httpClient: HttpClient) {}


  imageUpload(imageForm: any) {
    console.log('image uploading');
    return this.httpClient.post('https://esnih9p6ae.execute-api.us-east-1.amazonaws.com/v1/upload-to-s3', imageForm);
    
   }
}