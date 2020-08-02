import { Component, OnInit, Input } from '@angular/core';
import { ReviewStruct } from '../interfaces/review-struct';
import {UploadPictureService} from './uploadPictureService';

@Component({
  selector: 'app-upload-picture',
  templateUrl: './upload-picture.component.html',
  styleUrls: ['./upload-picture.component.css']
})
export class UploadPictureComponent implements OnInit {
  @Input() currentReview: ReviewStruct;
  public currentReviewCopy: ReviewStruct;
  constructor(private uploadPictureService: UploadPictureService,) { }

  ngOnInit(): void {
    this.currentReviewCopy = {
      reviewId:this.currentReview.reviewId,
          title:this.currentReview.title,
          description:this.currentReview.description,
          image:this.currentReview.image,
          rating:this.currentReview.rating,
          tags:this.currentReview.tags
    };
  }

  profileImageChangedStatus = 'init';
  uploadImageLabel = 'Choose file (max size 1MB)';
  imageFileIsTooBig = false;
  selectedFileSrc: string;

  changeImage(imageInput: HTMLInputElement) {
    const file: File = imageInput.files[0];
    this.uploadImageLabel = `${file.name} (${(file.size * 0.000001).toFixed(2)} MB)`;
    if (file.size > 1048576) {
      this.imageFileIsTooBig = true;
    } else {
      this.imageFileIsTooBig = false;
      const reader = new FileReader();

      reader.addEventListener('load', (event: any) => {
        this.selectedFileSrc = event.target.result;
        this.uploadPictureService.uploadImage(file).subscribe(
          (response) => {
            this.currentReviewCopy.image = response.url;
          },
          () => {
            this.profileImageChangedStatus = 'fail';
          });
      });

      if (file) {
        reader.readAsDataURL(file);
      }
    }
  }
}
