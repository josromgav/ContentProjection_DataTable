import { Component, OnInit, Input  } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-my-data-table',
  templateUrl: './my-data-table.component.html',
  styleUrls: ['./my-data-table.component.css']
})
export class MyDataTableComponent implements OnInit {
  // pristineArray:any=[];
  @Input() pristineArray:any;
  @Input() headers:any[];
  
  sortArbiter:boolean = false;
  amountOfRows:number = 5;
  myFilteredArray:any=[];
  myCustomArray:any=[];
  amountOfPages:number;
  pages:any=[];
  currentPage:number;
  searchString:string;
  keys:any=[];
  constructor() { }

  ngOnInit() {
    this.myFilteredArray = this.pristineArray.slice(0);
    this.myCustomArray = this.myFilteredArray.slice(0, this.amountOfRows);
    this.amountOfPages = Math.ceil(this.myFilteredArray.length/this.amountOfRows);
    this.pages = [];
    var i;
    for (i = 1; i < this.amountOfPages+1; i++) { 
      this.pages.push(i);
    }
    this.currentPage = 1;
    this.keys = Object.keys(this.pristineArray[0]);
  }


  sortBy(index:string){
    let i = parseInt(index);
    let property= this.keys[i];
    if(this.sortArbiter == false){
      this.myFilteredArray = this.myFilteredArray.sort((a,b)=>a[property].localeCompare(b[property]));
    }else{
      this.myFilteredArray = this.myFilteredArray.sort((a,b)=>a[property].localeCompare(b[property])).reverse();
    }
    this.changeDataTable(); //Recarga el dataTable completo que hemos reordenado
    this.sortArbiter = !this.sortArbiter;
  }

  removeFirst(){
    this.myCustomArray.shift();
  }

  showAmount(amount:number){
    this.amountOfRows = amount;
    this.ngOnInit();
  }

  switchPage(newPage:number){
    this.myCustomArray = this.myFilteredArray.slice((this.amountOfRows*(newPage-1)), ((this.amountOfRows*(newPage-1))+this.amountOfRows*1));
  }

  changeDataTable(){
    this.myCustomArray = this.myFilteredArray.slice(0, this.amountOfRows);
    this.amountOfPages = Math.ceil(this.myFilteredArray.length/this.amountOfRows);
    this.pages = [];
    var i;
    if(this.amountOfRows>0 && this.amountOfPages!=1){
      for (i = 1; i < this.amountOfPages+1; i++) { 
        this.pages.push(i);
      }
    }
    this.currentPage = 1;
  }

  filterSearch(){
    this.myFilteredArray = [];
    if(this.searchString.length!=0){
      for(let item of this.pristineArray){
        if(JSON.stringify(item).includes(this.searchString)){
          this.myFilteredArray.push(item);
        }
      }
    }else{
      this.myFilteredArray = this.pristineArray.slice(0);
    }
    this.changeDataTable();
  }

}
