import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, tap } from 'rxjs';
import { Country } from '../Interfaces/pais.interface';

@Injectable({
  providedIn: 'root'
})
export class PaisService {

  private apiUrl: string = 'https://restcountries.com/v3.1'
  private busquedaUrl ='';

  get httpParams (){
    return new HttpParams().set('fields','cca2,name,capital,flags,population');
  }
  constructor( private http: HttpClient) { }

  buscarPais(termino: string): Observable <Country[]> {
    const url = `${this.apiUrl}/name/${termino}`;
    return this.http.get<Country[]>(url, {params: this.httpParams});
  };
  buscarCapital(termino: string): Observable <Country[]> {
    const url = `${this.apiUrl}/capital/${termino}`;
    return this.http.get<Country[]>(url, {params: this.httpParams});
  };

  getPaisporId(id: string): Observable <Country> {
    const url = `${this.apiUrl}/alpha/${id}`;
    return this.http.get<Country>(url);
  };

  getPaisporRegion(region: string): Observable <Country[]> {

    const url = `${this.apiUrl}/region/${region}`;
    return this.http.get<Country[]>(url, {params: this.httpParams})
    .pipe(
      tap(console.log)
    )
  };
}
