import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  pristineArray1:any = [
    {name:'Jose', edad:25, empleo:'Programador', ciudad:'Sevilla'},
    {name:'Antonio', edad:32, empleo:'Cocinero', ciudad:'Manchester'},
    {name:'Laura', edad:19, empleo:'Estudiante', ciudad:'Madrid'},
    {name:'Sergio', edad:44, empleo:'Autonomo', ciudad:'Barcelona'},
    {name:'David', edad:23, empleo:'Deportista', ciudad:'Madrid'},
    {name:'Alberto', edad:16, empleo:'Estudiante', ciudad:'Malaga'},
    {name:'Rosa', edad:22, empleo:'Cuidadora', ciudad:'Sevilla'},
    {name:'Carmen', edad:20, empleo:'Pintora', ciudad:'Huelva'},
    {name:'Maria', edad:21, empleo:'Periodista', ciudad:'Jaen'},
    {name:'Angel', edad:20, empleo:'Electricista', ciudad:'Cadiz'},
    {name:'Jeronimo', edad:27, empleo: 'Ingeniero', ciudad:'Almeria'},
    {name:'Adrian', edad:25, empleo:'Abogado', ciudad:'Huelva'},
  ];

  pristineArray2:any = [
    {name:'Pera',  empresa:'MercaSevilla', procedencia:'Almeria'},
    {name:'Manzana',  empresa:'Alora', procedencia:'Murcia'},
    {name:'Naranja',  empresa:'Fresisur', procedencia:'Almeria'},
    {name:'Pomelo',  empresa:'Natklo', procedencia:'Asturias'},
    {name:'Mandarina',  empresa:'Ajomar', procedencia:'Madrid'},
    {name:'Platano',  empresa:'CanariasC', procedencia:'Valladolid'},
    {name:'Fresa',  empresa:'FresCoSur', procedencia:'Sevilla'},
    {name:'Melocoton',  empresa:'Lampache', procedencia:'Murcia'},
  ];

  pristineArray3:any = [
    {brand:'Audi', registration:'DXC-9997', plazas:2, year:2002,cv:180},
    {brand:'Peugeot', registration:'FRC-7867', plazas:5, year:2003,cv:90},
    {brand:'Ferrari', registration:'GHL-3645', plazas:2, year:2004,cv:260},
    {brand:'Volvo', registration:'BBC-6634', plazas:6, year:2001,cv:110},
    {brand:'Lexus', registration:'DFY-1258', plazas:5, year:2003,cv:120},
    {brand:'Mazda', registration:'CSK-9090', plazas:5, year:2002,cv:110},
    {brand:'Audi', registration:'KFK-7845', plazas:5, year:2017,cv:150},
    {brand:'Seat', registration:'GLY-1145', plazas:5, year:2004,cv:115},
    {brand:'BMW', registration:'CMD-8261', plazas:5, year:2002,cv:160},
    {brand:'Hyundai', registration:'HVM-1051', plazas:5, year:2015,cv:100},
    {brand:'Ford', registration:'CPL-4912', plazas:4, year:2003,cv:135},
    {brand:'Seat', registration:'QWR-3332', plazas:4, year:2018,cv:110},
  ];

  pristineArray4:any = [
    {brand:'Xiaomi',pulgadas:5.99,nucleos:4,ram:'4gb',precio:199},
    {brand:'Samsung',pulgadas:5.2,nucleos:8,ram:'6gb',precio:499},
    {brand:'Apple',pulgadas:5,nucleos:8,ram:'4gb',precio:799},
    {brand:'Meizu',pulgadas:5.5,nucleos:8,ram:'8gb',precio:239},
    {brand:'LG',pulgadas:5.5,nucleos:4,ram:'3gb',precio:289},
    {brand:'Huawei',pulgadas:5.6,nucleos:8,ram:'3gb',precio:149},
    {brand:'BQ',pulgadas:5.3,nucleos:4,ram:'4gb',precio:159},
  ]
}
