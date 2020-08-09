import { Component, OnInit, EventEmitter, Output, Input } from '@angular/core';

@Component({
  selector: 'app-tags',
  templateUrl: './tags.component.html',
  styleUrls: ['./tags.component.css']
})
export class TagsComponent implements OnInit {
  @Output() tagArray=new EventEmitter<string[]>();
  @Input() currentTagArray;
  @Input() isEdit:boolean;
  constructor() {
   }
   public items;
  ngOnInit(): void {
    this.items=Object.assign([], this.currentTagArray);
    this.emitUpdateTagArray();
  }
       public newTask; 
       public addToList() { 
           if (this.newTask == '') { 
           } 
           else { 
               this.items.push(this.newTask); 
               this.newTask = ''; 
           } 
           this.emitUpdateTagArray();
       } 
     
       public deleteTask(index) { 
           this.items.splice(index, 1); 
           this.emitUpdateTagArray();
       } 
       emitUpdateTagArray(){
         this.tagArray.emit(this.items);
       }

}
