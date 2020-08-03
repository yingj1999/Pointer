import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import {UploadPictureService} from './uploadPictureService';

@Component({
  selector: 'app-upload-picture',
  templateUrl: './upload-picture.component.html',
  styleUrls: ['./upload-picture.component.css']
})
export class UploadPictureComponent implements OnInit {
  @Output() imageLink=new EventEmitter<string>();
  imageObj: File;
  imageUrl: string;
  constructor(private uploadPictureService: UploadPictureService,) { }

  ngOnInit(): void {
    this.emitUpdateImageLink(false);
  }
  onImagePicked(event: Event): void {
    const FILE = (event.target as HTMLInputElement).files[0];
    this.imageObj = FILE;
   }

   onImageUpload() {
    const imageForm = new FormData();
    imageForm.append('image', this.imageObj);
    this.uploadPictureService.imageUpload(imageForm).subscribe(res => {
      this.imageUrl = res['image'];
      this.emitUpdateImageLink(true);
    });
   }
   emitUpdateImageLink(imageUploaded:boolean){
     if(imageUploaded){
      this.imageLink.emit("https://pointer-picture-archive.s3.amazonaws.com/"+this.imageUrl);
     }
    else{
      this.imageLink.emit("none")
    }
  }
}
