import { Component, Input, OnInit } from '@angular/core';
import { Country } from '../../Interfaces/pais.interface';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-pais-tabla',
  templateUrl: './pais-tabla.component.html',
  styles: [
  ]
})
export class PaisTablaComponent  {

@Input() paises: Country[]=[];
}
