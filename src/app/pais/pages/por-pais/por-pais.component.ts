import { Component, Input, OnInit } from '@angular/core';
import { PaisService } from '../../services/pais.service';
import { Country } from '../../Interfaces/pais.interface';

@Component({
  selector: 'app-por-pais',
  templateUrl: './por-pais.component.html',
  styles: [
  ]
})
export class PorPaisComponent {

  termino: string = '';
  hayerror: boolean = false;
  paises : Country[]=[];


  buscar(termino: string){
    this.hayerror=false;
    this.termino=termino;
    this.paisService.buscarPais(this.termino)
    .subscribe((res) =>{
      //console.log(res);
      this.paises=res;
    },(err)=>{
      console.log('Error');
      this.hayerror=true;
      this.paises =[];
    });
  }
  
  sugerencias(termino: string){
    this.hayerror = false;
    console.log(termino);
    this.termino = termino;
  }


  constructor(private paisService: PaisService){}

}
