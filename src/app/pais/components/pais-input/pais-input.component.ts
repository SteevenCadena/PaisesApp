import { Component, EventEmitter, Output, OnInit, Input } from '@angular/core';
import { debounceTime, Subject } from 'rxjs';

@Component({
  selector: 'app-pais-input',
  templateUrl: './pais-input.component.html',
})
export class PaisInputComponent implements OnInit {
  
  @Input() buscarPor    : string = '';
  @Output() onNewTermino: EventEmitter<string> = new EventEmitter<string>();
  @Output() onDebounce  : EventEmitter<string> = new EventEmitter<string>();

  debouncer: Subject<string> = new Subject();
  termino  : string = '';

  ngOnInit(): void {
    this.debouncer
      .pipe(
        debounceTime((300))
      )
      .subscribe({
        next: valor => {
          this.onDebounce.emit( valor );
        }
      })
  }

  buscar(){
    this.onNewTermino.emit(this.termino);
  }

  teclaPresionada() {
    this.debouncer.next( this.termino );
  }

}
