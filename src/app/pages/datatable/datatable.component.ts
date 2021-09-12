import { Component, OnInit } from '@angular/core';

export interface PeriodicElement {
  nombre: string;
  cedula: number;
  apellidos: string;
  ciudad: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {cedula: 1070983062, nombre: 'Jorge Andres', apellidos: 'Duran Perez', ciudad: 'Facatativá'},
  {cedula: 1018488967, nombre: 'Helium', apellidos: '4.0026', ciudad: 'Villeta'}
];

@Component({
  selector: 'app-datatable',
  templateUrl: './datatable.component.html',
  styleUrls: ['./datatable.component.css']
})
export class DatatableComponent implements OnInit {
  displayedColumns: string[] = ['cedula', 'nombre', 'apellidos', 'ciudad'];
  dataSource = ELEMENT_DATA;

  constructor() { }

  ngOnInit(): void {
    
  }

}
