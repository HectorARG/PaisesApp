import { Component } from '@angular/core';
import { BusquedaPais } from '../../interfaces/pais.interfaces';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-por-pais',
  templateUrl: './por-pais.component.html'
})
export class PorPaisComponent {

  constructor( private paisService: PaisService) { }

  terminoB: string = ''
  error: boolean = false;
  paises: BusquedaPais[] = [];

  buscar(): void{
    this.error = false;
    if(this.terminoB.trim().length !== 0){
      this.paisService.buscarPais(this.terminoB).subscribe(resp =>{
        console.log(resp);
        this.paises = resp;
      }, err =>{
        console.log(err);
        this.error = true;
      });
    }else{
      console.log('Debes escribir algo');
    }

  }
}
