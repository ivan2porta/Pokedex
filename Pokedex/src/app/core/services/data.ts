import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class Data {
  private http = inject(HttpClient);
  private apiUrl = "https://pokeapi.co/api/v2/pokemon/";

  getPoke(num: number): Observable<any[]>{
    return this.http.get<any[]>(`${this.apiUrl}${num}`);
  }

  getPokeSp(num: number): Observable<any[]>{
    return this.http.get<any[]>(`${this.apiUrl}${num}`);
  }
}
