import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { environment } from 'src/environments/environment';
import { Customer } from '../models/super-hero';


@Injectable({
  providedIn: 'root',
})
export class SuperHeroService {
  private url = 'SuperHero';

  constructor(private http: HttpClient) {}

  public getSuperHeroes(): Observable<Customer[]> {
    return this.http.get<Customer[]>(`${environment.apiUrl}/${this.url}`);
  }

  public updateHero(hero: Customer): Observable<Customer[]> {
    return this.http.put<Customer[]>(
      `${environment.apiUrl}/${this.url}`,
      hero
    );
  }

  public createHero(hero: Customer): Observable<Customer[]> {
    return this.http.post<Customer[]>(
      `${environment.apiUrl}/${this.url}`,
      hero
    );
  }

  public deleteHero(hero: Customer): Observable<Customer[]> {
    return this.http.delete<Customer[]>(
      `${environment.apiUrl}/${this.url}/${hero.id}`
    );
  }
}
