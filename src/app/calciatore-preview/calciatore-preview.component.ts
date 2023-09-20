import { Component, Input, EventEmitter, Output, OnInit, OnDestroy } from '@angular/core';
import { Calciatore, Persona } from '../models/calciatore';

@Component({
  selector: 'app-calciatore-preview',
  templateUrl: './calciatore-preview.component.html',
  styleUrls: ['./calciatore-preview.component.css']
})
export class CalciatorePreviewComponent implements OnInit, OnDestroy {
  @Input()
  calciatore?: Calciatore;

  @Input()
  delay?: number;

  @Input()
  dispari?: boolean;

  @Output()
  onCalciatoreSelezionato = new EventEmitter<Calciatore>();

  constructor() {
    console.log("Istanziato");
  }

  ngOnDestroy(): void {

  }

  ngOnInit(): void {
    console.log("Caricato");
    // setInterval(() => {
    //   this.onCalciatoreSelezionato.emit(this.calciatore);
    // }, this.delay);
  }

  seleziona() {

    // console.log(this.calciatore!.nome_completo);

    this.onCalciatoreSelezionato.emit(this.calciatore);
  }
}
