import { Component } from '@angular/core';
import { Calciatore } from "../models/calciatore";
import { CALCIATORI } from "../data/serie_a";

@Component({
  selector: 'app-calciatori',
  templateUrl: './calciatori.component.html',
  styleUrls: ['./calciatori.component.css']
})
export class CalciatoriComponent {

  calciatori: Calciatore[] = CALCIATORI;

  calciatoreSelezionato?: Calciatore;
  // calciatoreSelezionato: Calciatore | undefined;

  seleziona(calciatore?: Calciatore) {
    this.calciatoreSelezionato = calciatore;
  }



  campanello() {
    alert("ding");
  }

  infoBottone(e: MouseEvent) {
    console.log(e);
  }
}
