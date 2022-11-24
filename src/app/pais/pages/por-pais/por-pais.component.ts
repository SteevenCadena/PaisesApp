import { Component } from '@angular/core';
import { PaisService } from '../../services/pais.service';
import { Pais } from '../../interfaces/pais.interface';

@Component({
  selector: 'app-por-pais',
  templateUrl: './por-pais.component.html',
  styles: [
    `
      li{
        cursor: pointer;
      }
      .flag{
        width: 50px;
      }
    `
  ]
})
export class PorPaisComponent  {

  termino  : string  = '';
  hayError : boolean = false;
  buscarPor: string  = 'Buscar País...'
  paises   : Pais[]  = [];
  titulo   = 'Pais';
  paisesSugeridos: Pais[] = [];
  mostrarSugerencias: boolean = false;

  constructor( private paisService: PaisService) { }

  buscar( termino: string ){
    this.mostrarSugerencias = false;
    this.hayError = false;
    this.termino  = termino;

    this.paisService.buscarPais(this.termino)
      .subscribe({
        next: (resp) => {
          this.paises = resp;
          console.log(resp);
        },
        error: ()=> {
          this.hayError = true;
          this.paises   = [];
        },
      })
  }

  sugerir( termino: string ) {
    this.hayError = false;
    this.mostrarSugerencias = true;
    this.termino  = termino;
    this.paisService.buscarPais(termino)
      .subscribe({
        next: paises => {
          this.paisesSugeridos = paises.splice(0,3);
        }
      })

  }

  buscarSugerencias( termino: string ) {
    this.buscar( termino )
  }

}
