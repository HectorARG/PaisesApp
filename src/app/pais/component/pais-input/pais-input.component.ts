import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Subject } from 'rxjs';
import { debounceTime } from 'rxjs/operators';

@Component({
  selector: 'app-pais-input',
  templateUrl: './pais-input.component.html'
})
export class PaisInputComponent implements OnInit{

  @Output() onEnter: EventEmitter<string> = new EventEmitter
  @Output() onDebounce: EventEmitter<string> = new EventEmitter

  debounce: Subject<string> = new Subject;

  terminoB: string = '';

  constructor() { }

  ngOnInit(): void {
    this.debounce
        .pipe(debounceTime(300))
        .subscribe( valor => {
          this.onDebounce.emit( valor )
    })
  }

  buscar(): any {
    this.onEnter.emit( this.terminoB );
  }

  teclaprecionada(){
    this.debounce.next( this.terminoB )
  }

}
