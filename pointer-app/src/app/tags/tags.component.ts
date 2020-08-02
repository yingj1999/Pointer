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
    console.log(this.currentTagArray);
    this.items=Object.assign([], this.currentTagArray);
    this.emitUpdateTagArray();
  }
  /* An empty array that is responsible 
       to add a division */
        
  
       /* A two-way binding performed which 
          pushes text on division */
       public newTask; 
       //public group:Array<String[]>;
     
       /* When input is empty, it will 
          not create a new division */
       public addToList() { 
           if (this.newTask == '') { 
           } 
           else { 
               this.items.push(this.newTask); 
               this.newTask = ''; 
           } 
           this.emitUpdateTagArray();
           //this.group = this.groupArray(this.items, 2);
       } 
     
       /* This function takes to input the 
          task, that has to be deleted*/
       public deleteTask(index) { 
           this.items.splice(index, 1); 
           //this.group = this.groupArray(this.items, 2);
           this.emitUpdateTagArray();
       } 
       emitUpdateTagArray(){
         this.tagArray.emit(this.items);
       }
    //    groupArray<String>(data: Array<String>, n: number): Array<String[]> {
    //     let group = new Array<String[]>();
    // ​
    //     for (let i = 0, j = 0; i < data.length; i++) {
    //         if (i >= n && i % n === 0)
    //             j++;
    //         group[j] = group[j] || [];
    //         group[j].push(data[i])
    //     }
    // ​
    //     return group;
    // }

}
