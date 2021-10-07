import {Component} from '@angular/core'

@Component({
  selector:'mi-componente',
  templateUrl:'./mi-componente.component.html'
})

export class MiComponente{

  public titulo:string;
  public comentario:string;
  public year:number;

  constructor() {
    this.titulo="Hola muengo  mi primer compomente";
    this.comentario="Hola muengo  mi primer compomenteHola muengo  mi primer compomente";
    this.year=2020;
    console.log("mi componente argado");
    console.log(this.comentario, this.titulo, this.year);
  }
}
