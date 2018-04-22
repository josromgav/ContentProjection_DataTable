import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-my-data-table',
  templateUrl: './my-data-table.component.html',
  styleUrls: ['./my-data-table.component.css']
})
export class MyDataTableComponent implements OnInit {

  sortArbiter:boolean;
  constructor() { }

  ngOnInit() {
    this.sortArbiter = false;
  }




  sortByName(){
    if(this.sortArbiter == false){
      this.pristineArray = this.pristineArray.sort((a,b)=>a.name.localeCompare(b.name));
    }else{
      this.pristineArray = this.pristineArray.sort((a,b)=>a.name.localeCompare(b.name)).reverse();
    }
    this.sortArbiter = !this.sortArbiter;
  }

  sortByEdad(){
    if(this.sortArbiter == false){
      this.pristineArray = this.pristineArray.sort((a,b)=>a.edad.localeCompare(b.edad));
    }else{
      this.pristineArray = this.pristineArray.sort((a,b)=>a.edad.localeCompare(b.edad)).reverse();
    }
    this.sortArbiter = !this.sortArbiter;
  }



  pristineArray:any = [
    {name:'Jose', edad:'25', empleo:'Programador', ciudad:'Sevilla'},
    {name:'Antonio', edad:'32', empleo:'Cocinero', ciudad:'Manchester'},
    {name:'Laura', edad:'19', empleo:'Estudiante', ciudad:'Madrid'},
    {name:'Sergio', edad:'44', empleo:'Autonomo', ciudad:'Barcelona'},
  ];
}
