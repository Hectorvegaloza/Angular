import { Injectable, inject} from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor() { }

  API_URL: string = "https://api-colombia.com/api/v1/TouristicAttraction";
  httpClient = inject(HttpClient); /* es como si http client se estuviera asignando */
  /* vamos a crear un metodo para obtener los datos de la API */

  obtenerDatos(){
    return this.httpClient.get(this.API_URL);
  }
}
