import { PaisService } from './../../services/pais.service';
import { Component, OnInit } from '@angular/core';
import { BusquedaPais } from '../../interfaces/pais.interfaces';

@Component({
  selector: 'app-por-region',
  templateUrl: './por-region.component.html'
})
export class PorRegionComponent {

  regiones: string[] = ['EU', 'EFTA', 'CARICOM', 'PA', 'AU', 'USAN', 'EEU', 'AL', 'ASEAN', 'CAIS', 'CEFTA', 'NAFTA','SAARC'];
  regionactiva: string = '';

  paises: BusquedaPais[] = [];

  constructor( private paisService: PaisService ) { }

  seleccionarregion(region: string){

    if ( region === this.regionactiva) {
      return;
    }

    this.regionactiva = region;
    this.paises = [];
    this.paisService.buscarRegion( this.regionactiva ).subscribe(regionPais =>{ this.paises = regionPais })

  }

}
