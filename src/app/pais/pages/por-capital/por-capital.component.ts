import { Component } from '@angular/core';
import { Country } from '../../Interfaces/pais.interface';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-por-capital',
  templateUrl: './por-capital.component.html',
  styles: [
  ]
})
export class PorCapitalComponent {
  termino: string = '';
  hayerror: boolean = false;
  paises : Country[]=[];


  buscar(termino: string){
    this.hayerror=false;
    this.termino=termino;
    this.paisService.buscarCapital(this.termino)
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
