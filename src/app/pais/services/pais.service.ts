import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { BusquedaPais } from '../interfaces/pais.interfaces';

@Injectable({
  providedIn: 'root'
})
export class PaisService {

  private apiURL: string = 'https://restcountries.com/v2'

  constructor( private http: HttpClient ) { }

  buscarPais(termino: string): Observable<BusquedaPais[]>{

    const url = `${ this.apiURL }/name/${ termino }`;
    return this.http.get<BusquedaPais[]>( url );
  }
}
