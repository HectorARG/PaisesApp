import { Component, Input } from '@angular/core';
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
  paisesSujeridos: BusquedaPais[] = [];

  buscar( termino: string ): void{
    this.error = false;
    this.terminoB = termino;
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

  sugerencias(sugerencia: string){
    this.error = false;

    if( sugerencia.trim().length === 0 ){ this.paisesSujeridos = [] }

    this.paisService.buscarPais( sugerencia ).subscribe( pais => {
      this.paisesSujeridos = pais.splice(0,3),
      (_err: any) => this.paisesSujeridos = []

    })
  }
}
