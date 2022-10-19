import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
export interface Respuesta {
  restrictedApps: RestrictedApps;
}

export interface RestrictedApps {
  apps: App[];
}

export interface App {
  app:   string;
  users: string[];
}


@Injectable({
  providedIn: 'root'
})
export class PruebaService {

  constructor(private http:HttpClient) { }

  traerDatos(){

    this.llerdatos().subscribe({
      next:(resp)=>console.log(resp.restrictedApps.apps)
    })
  }
  llerdatos(){
    return this.http.get<Respuesta>('assets/data.json');
  }


}
