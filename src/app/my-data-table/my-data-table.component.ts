import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-my-data-table',
  templateUrl: './my-data-table.component.html',
  styleUrls: ['./my-data-table.component.css']
})
export class MyDataTableComponent implements OnInit {

  sortArbiter:boolean;
  amountOfRows:number = 5;
  myCustomArray:any= [];
  amountOfPages:number;
  pages:any = [];
  currentPage:number;
  constructor() { }

  ngOnInit() {
    this.myCustomArray = this.pristineArray.slice(0, this.amountOfRows);
    this.amountOfPages = Math.ceil(this.pristineArray.length/this.amountOfRows);
    this.pages = [];
    var i;
    for (i = 1; i < this.amountOfPages+1; i++) { 
      this.pages.push(i);
    }
    this.currentPage = 1;
  }




  sortByName(){
    if(this.sortArbiter == false){
      this.myCustomArray = this.myCustomArray.sort((a,b)=>a.name.localeCompare(b.name));
    }else{
      this.myCustomArray = this.myCustomArray.sort((a,b)=>a.name.localeCompare(b.name)).reverse();
    }
    this.sortArbiter = !this.sortArbiter;
  }

  sortByEdad(){
    if(this.sortArbiter == null){
      this.sortArbiter = false;
    }
    if(this.sortArbiter == false){
      this.myCustomArray = this.myCustomArray.sort((a,b)=>a.edad.localeCompare(b.edad));
    }else{
      this.myCustomArray = this.myCustomArray.sort((a,b)=>a.edad.localeCompare(b.edad)).reverse();
    }
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
    this.myCustomArray = this.pristineArray.slice((this.amountOfRows*(newPage-1)), ((this.amountOfRows*(newPage-1))+this.amountOfRows*1));
  }

  changeDataTable(){
    
    this.myCustomArray = this.pristineArray.slice(0, this.amountOfRows);
    this.amountOfPages = Math.ceil(this.pristineArray.length/this.amountOfRows);
    this.pages = [];
    var i;
    if(this.amountOfRows>0 && this.amountOfPages!=1){
      for (i = 1; i < this.amountOfPages+1; i++) { 
        this.pages.push(i);
      }
    }
    this.currentPage = 1;
  }

  pristineArray:any = [
    {name:'Jose', edad:'25', empleo:'Programador', ciudad:'Sevilla'},
    {name:'Antonio', edad:'32', empleo:'Cocinero', ciudad:'Manchester'},
    {name:'Laura', edad:'19', empleo:'Estudiante', ciudad:'Madrid'},
    {name:'Sergio', edad:'44', empleo:'Autonomo', ciudad:'Barcelona'},
    {name:'David', edad:'23', empleo:'Deportista', ciudad:'Madrid'},
    {name:'Alberto', edad:'16', empleo:'Estudiante', ciudad:'Malaga'},
    {name:'Rosa', edad:'22', empleo:'Cuidadora', ciudad:'Sevilla'},
    {name:'Carmen', edad:'20', empleo:'Pintora', ciudad:'Huelva'},
    {name:'Maria', edad:'21', empleo:'Periodista', ciudad:'Jaen'},
    {name:'Angel', edad:'20', empleo:'Electricista', ciudad:'Cadiz'},
    {name:'Jeronimo', edad:'27', empleo: 'Ingeniero', ciudad:'Almeria'},
    {name:'Adrian', edad:'25', empleo:'Abogado', ciudad:'Huelva'},
  ];
}
