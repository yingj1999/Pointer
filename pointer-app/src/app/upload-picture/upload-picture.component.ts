import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-upload-picture',
  templateUrl: './upload-picture.component.html',
  styleUrls: ['./upload-picture.component.css']
})
export class UploadPictureComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  profileImageChangedStatus = 'init';
  uploadImageLabel = 'Choose file (max size 1MB)';
  imageFileIsTooBig = false;
  selectedFileSrc: string;

  // ...... other methods and imports skipped for brevity

  changeImage(imageInput: HTMLInputElement) {
    const file: File = imageInput.files[0];
    this.uploadImageLabel = `${file.name} (${(file.size * 0.000001).toFixed(2)} MB)`;
    if (file.size > 1048576) {
      this.imageFileIsTooBig = true;
    } else {
      this.imageFileIsTooBig = false;
      const reader = new FileReader();

      reader.addEventListener('load', (event: any) => {
        // this.selectedFileSrc = event.target.result;
        // this.userDataService.uploadProfileImage(this.userData.userId, file).subscribe(
        //   (response) => {
        //     this.userData.profile.imageUrl = response.url;
        //     this.userDataStore.updateUserData$(this.userData).subscribe(
        //       () => {
        //         this.profileImageChangedStatus = 'ok';
        //       },
        //       () => {
        //         this.profileImageChangedStatus = 'fail';
        //       });
        //   },
        //   () => {
        //     this.profileImageChangedStatus = 'fail';
        //   });
      });

      if (file) {
        reader.readAsDataURL(file);
      }
    }
  }
}
