import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

// Shares imports
import { Apod } from '../model/apod';



@Injectable({
  providedIn: 'root'
})
export class NasaApiService {

  
  readonly API_URL = 'https://api.nasa.gov/planetary/apod';
  readonly API_KEY = 'DEMO_KEY';  

  // Dependency injection: HTTPClient
  constructor( private httpClient:HttpClient ) { }

  getApod(): Observable<Apod>{

    return this.httpClient.get<Apod>( this.API_URL + '?api_key=' + this.API_KEY );
  }

  
}
