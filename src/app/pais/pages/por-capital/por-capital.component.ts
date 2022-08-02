import { Component, OnInit } from '@angular/core';
import { BusquedaPais } from '../../interfaces/pais.interfaces';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-por-capital',
  templateUrl: './por-capital.component.html'
})
export class PorCapitalComponent {

  constructor( private paisService: PaisService) { }

  terminoB: string = ''
  error: boolean = false;
  capital: BusquedaPais[] = [];

  buscar( termino: string ): void{
    this.error = false;
    this.terminoB = termino;
    if(this.terminoB.trim().length !== 0){
      this.paisService.buscarCapital(this.terminoB).subscribe(resp =>{
        // console.log(resp);
        this.capital = resp;
      }, err =>{
        console.log(err);
        this.error = true;
      });
    }else{
      console.log('Debes escribir algo');
    }

  }

  sugerencias(sugerencia: string){
    this.error = false;
  }

}
