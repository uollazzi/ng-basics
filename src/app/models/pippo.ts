export class Pippo implements Camionista {

  // public nome: string = "";
  // private cognnome = "";

  nome = "";
  constructor(nome: string, cognome: string) {
    this.nome = nome;
  }

  patente: string = "C";

  guidareCamion(tipo: string): void {
    console.log("Sto guidando un camion tipo " + tipo);
  }
}



interface Camionista {
  patente: string;

  guidareCamion(tipo: string): void;
}
