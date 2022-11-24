import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { PaisService } from '../../services/pais.service';
import { Pais } from '../../interfaces/pais.interface';

@Component({
  selector: 'app-por-region',
  templateUrl: './por-region.component.html',
  styles: [
    ` 
      button{
        margin: 5px 5px 0 0;
      }
    `
  ]
})
export class PorRegionComponent {
  regiones: string[] = ['EU','EFTA','CARICOM','PA','AU','USAN','EEU','AL','ASEAN','CAIS','CEFTA','NAFTA','SAARC'];
  
  regionActiva: string = '';
  paises      : Pais[] = [];
  titulo      : string = 'Paises';
  constructor( private paisService: PaisService) { }

  activarRegion( region: string ) {
    if( region === this.regionActiva ) {return};
    this.regionActiva = region;

    this.paisService.buscarRegion( region )
      .subscribe({
        next: resp => {
          this.paises = resp;
          console.log( this.paises );
        },
        error: () => {

        }
      })
  }

  

}
