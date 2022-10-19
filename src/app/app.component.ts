import { Component, OnInit } from '@angular/core';
import { PruebaService } from './prueba.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'pruebaControlador';
  constructor(private serv:PruebaService){

  }

  ngOnInit(): void {
    this.serv.traerDatos();
  }

}
