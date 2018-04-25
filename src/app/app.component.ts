import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

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

  pristineArray2:any = [
    {name:'Pera',  empresa:'MercaSevilla', procedencia:'Almeria',edad:'13'},
    {name:'Manzana',  empresa:'Alora', procedencia:'Murcia',edad:'13'},
    {name:'Naranja',  empresa:'Fresisur', procedencia:'Almeria',edad:'12'},
    {name:'Pomelo',  empresa:'Natklo', procedencia:'Asturias',edad:'13'},
    {name:'Mandarina',  empresa:'Ajomar', procedencia:'Madrid',edad:'14'},
    {name:'Platano',  empresa:'CanariasC', procedencia:'Valladolid',edad:'13'},
    {name:'Fresa',  empresa:'FresCoSur', procedencia:'Sevilla',edad:'13'},
    {name:'Melocoton',  empresa:'Lampache', procedencia:'Murcia',edad:'10'},
  ];
}
