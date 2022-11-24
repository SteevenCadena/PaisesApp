import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { switchMap, tap } from 'rxjs';

import { PaisService } from '../../services/pais.service';
import { Pais } from '../../interfaces/pais.interface';

@Component({
  selector: 'app-ver-pais',
  templateUrl: './ver-pais.component.html',
  styles: [
    `
    .mr-1{
      margin-right: 5px;
    }
    `
  ]
})
export class VerPaisComponent implements OnInit {

  pais!: Pais;
  constructor( private activatedRout: ActivatedRoute, private paisService: PaisService   ) { }

  ngOnInit(): void {

    this.activatedRout.params
      .pipe(
        switchMap( ({ id }) => this.paisService.verPais(id)),
        tap( console.log )
      )
      .subscribe( pais => this.pais = pais );

  }



  // ngOnInit(): void {
  //   this.activatedRout.params
  //     .subscribe( ({ id }) => {
  //       this.paisService.verPais(id)
  //         .subscribe({
  //           next: resp => {
              
  //           }
  //         })
  //     })
      
  // }

}
