import { Component, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';


import { DataService } from "./services/data.service";


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})

export class AppComponent {

  dataservice = inject(DataService);
  todosLosDatos: any[] =[];
  obtenertodoslosdatos(){
    this.dataservice.obtenerDatos().subscribe((respuesta:any)=>{
      console.log(respuesta)
      if (respuesta) {
      this.todosLosDatos = respuesta;
      } else {
        console.log("ocurrió un error, no existe respuesta.items");
      }
    } );
  }
  ngOnInit(){
    this.obtenertodoslosdatos();
  }
}

