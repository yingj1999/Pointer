import { Component, OnInit,Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
interface DialogData {
  email: string;
}
@Component({
  selector: 'app-popup',
  templateUrl: './popup.component.html',
  styleUrls: ['./popup.component.css']
})
export class PopupComponent implements OnInit {
  rating:number;
  title:string;
  constructor(
    public dialogRef: MatDialogRef<PopupComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData) {}

  onNoClick(): void {
    this.dialogRef.close();
  }

  ngOnInit(): void {
  }

  saveData(){
    this.title = ((document.getElementById("titleInput") as HTMLInputElement).value);
    console.log(this.title)
    this.rating = Number(((document.getElementById("ratingInput") as HTMLInputElement).value));
    console.log(this.rating)
  }
  
}
