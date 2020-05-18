import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-personal',
  templateUrl: './personal.component.html',
  styleUrls: ['./personal.component.css']
})
export class PersonalComponent implements OnInit {

  public mostrarNuevo: boolean;
  public mostrarLista: boolean;
  constructor() {
    this.mostrarNuevo = false;
    this.mostrarLista = true;
  }

  ngOnInit() {
  }
  mostrar(seleccionado: any) {
    if (seleccionado === 'N') {
      this.mostrarNuevo = true;
      this.mostrarLista = false;
    } else {
      if (seleccionado === 'L') {
        this.mostrarNuevo = false;
        this.mostrarLista = true;
      }
    }
  }
}
