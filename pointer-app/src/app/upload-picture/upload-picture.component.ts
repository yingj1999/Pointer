import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import {UploadPictureService} from './uploadPictureService';

@Component({
  selector: 'app-upload-picture',
  templateUrl: './upload-picture.component.html',
  styleUrls: ['./upload-picture.component.css']
})
export class UploadPictureComponent implements OnInit {
  @Output() imageLink=new EventEmitter<string>();
  @Input() currentImage:string;
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

   async onImageUpload() {
    const imageData={
      name:Date.now() + this.imageObj.name,
      file:await this.toBase64(this.imageObj)
    }
    this.uploadPictureService.imageUpload(imageData).subscribe(res =>{
      this.imageUrl = imageData.name;
      this.emitUpdateImageLink(true);
    },error => {console.log('oops', error)});
   }
   toBase64 = file => new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => resolve(reader.result);
    reader.onerror = error => reject(error);
});
   emitUpdateImageLink(imageUploaded:boolean){
     if(imageUploaded){
      this.imageLink.emit("https://pointer-picture-archive.s3.amazonaws.com/"+this.imageUrl);
     }
     else{
       this.imageLink.emit(this.currentImage);
     }
  }
}
