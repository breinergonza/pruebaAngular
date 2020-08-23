import { Component } from '@angular/core';
import {  EntidadesService } from './services/entidades.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})



export class AppComponent {

  title = 'PruebaAngular';
  
  listadoEntidades = [];

  constructor(
    public rest: EntidadesService) { }

  ngOnInit(): void {
    this.getEntidades();
  }

  getEntidades(): void {
    this.rest.getEntidades().subscribe((resp: any) => {
      this.listadoEntidades = resp;
      console.log(resp);
    });
  }

}
