import { Component, Input, OnInit } from '@angular/core';
import { PaisService } from '../../services/pais.service';
import { Country } from '../../Interfaces/pais.interface';

@Component({
  selector: 'app-por-pais',
  templateUrl: './por-pais.component.html',
  styles: [`
            li{
              cursor: pointer;
            }
  `
  ]
})
export class PorPaisComponent {

  termino: string = '';
  hayerror: boolean = false;
  paises : Country[]=[];
  paisesSugeridos :Country[]=[];
  barraSugerencias: boolean =false;

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
    this.termino = termino;
    this.barraSugerencias = true;
    if(termino.length==0){
      this.paisesSugeridos=[];
      this.barraSugerencias = false;
      return
    }
    this.paisService.buscarPais(termino)
    .subscribe(
      paises => this.paisesSugeridos=paises.splice(0,5),
      (err)=> this.paisesSugeridos=[],
    );
  }

  buscarSugerido(termino: string){
    this.buscar(termino);
    this.paisesSugeridos=[];
  }

  constructor(private paisService: PaisService){}

}
