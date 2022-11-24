import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Pais } from '../interfaces/pais.interface';

@Injectable({
  providedIn: 'root'
})

export class PaisService {

  private apiUrl: string = 'https://restcountries.com/v2/';

  get gethttpParams() {
    return new HttpParams()
            .set('fields','name,alpha2Code,population,flag,capital');
  }

  constructor( private hhtp: HttpClient ) { }

  buscarPais( termino: string ): Observable<Pais[]> {
    const url = `${ this.apiUrl }/name/${ termino }`;
    return this.hhtp.get<Pais[]>( url, { params: this.gethttpParams } );
  }

  buscarCapital( termino: string ): Observable<Pais[]> {
    const url = `${ this.apiUrl }/capital/${ termino }`;
    return this.hhtp.get<Pais[]>( url, { params: this.gethttpParams } );
  }

  verPais( codigo: string ): Observable<Pais> {
    const url = `${ this.apiUrl }/alpha/${ codigo }`;
    return this.hhtp.get<Pais>( url );
  }

  buscarRegion( region: string ): Observable<Pais[]>{

    const url = `${ this.apiUrl }/regionalbloc/${ region }`
    return this.hhtp.get<Pais[]>( url, { params: this.gethttpParams } );
  }


}
