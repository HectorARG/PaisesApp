import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { BusquedaPais } from '../interfaces/pais.interfaces';

@Injectable({
  providedIn: 'root'
})
export class PaisService {

  private apiURL: string = 'https://restcountries.com/v2';
  private apiURLRegion: string = 'https://restcountries.com/v2/regionalbloc'

  constructor( private http: HttpClient ) { }

  buscarPais(termino: string): Observable<BusquedaPais[]>{
    const url = `${ this.apiURL }/name/${ termino }`;
    return this.http.get<BusquedaPais[]>( url );
  }

  buscarCapital(termino: string): Observable<BusquedaPais[]> {
    const urlCapital = `${ this.apiURL }/capital/${ termino }`;
    return this.http.get<BusquedaPais[]>( urlCapital );
  }

  buscarRegion(termino: string): Observable<BusquedaPais[]> {
    const urlregion = `${ this.apiURLRegion }/${ termino }`;
    return this.http.get<BusquedaPais[]>( urlregion );
  }

  detallesPais(id: string): Observable<BusquedaPais> {
    const urlDetallesPais = `${ this.apiURL }/alpha/${ id }`;
    return this.http.get<BusquedaPais>( urlDetallesPais );
  }
}
