import { Component } from '@angular/core';
import { Pais } from '../../interfaces/pais.interface';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-por-capital',
  templateUrl: './por-capital.component.html',
})
export class PorCapitalComponent {

  termino  : string  = ''
  titulo   : string  = 'Capital'
  buscarPor: string  = 'Buscar Capital...'
  hayError : boolean = false;
  paises   : Pais[]  = [];

  constructor(private paisService: PaisService) {}
  buscar( termino: string ) {
    this.termino = termino;

    this.paisService.buscarCapital(termino)
      .subscribe({
        next: resp => {
          this.hayError= false;
          this.paises = resp;
        },
        error: () => {
          this.hayError = true;
          this.paises = [];
        }
      })
    console.log( this.termino );
  }

  sugerir( termino: string ) {
    this.hayError = false;

  }

}
