import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { CountriesComponent } from './countries/countries.component';

@Injectable({
  providedIn: 'root'
})
export class CountryService {
  
  public baseUrl = "https://restcountries.com/v3.1/all";

  constructor(private httpClient: HttpClient) { }

  public getUsers(): Observable<any> {
    return this.httpClient.get(this.baseUrl);
  }
}
