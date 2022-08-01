import { Component, Input, OnInit } from '@angular/core';
import { BusquedaPais } from '../../interfaces/pais.interfaces';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html'
})
export class TableComponent implements OnInit {

  @Input() paises: BusquedaPais[] = [];
  @Input() capitales: BusquedaPais[] = [];


  constructor() { }

  ngOnInit(): void {
  }

}
