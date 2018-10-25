import { Component, OnInit } from '@angular/core';
import { Apod } from '../shared/model/apod';
import { NasaApiService } from '../shared/services/nasa-api.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  apod: Apod;
  constructor( private nasaApi: NasaApiService ) { 
    
  }

  ngOnInit() {
    this.nasaApi.getApod()
      .subscribe((data:Apod) => {

        setTimeout(() => {
          this.apod = data;          
        }, 2500);
      }, err => {
        console.log('Error al conectar con el servidor');
        console.log( err );
      })
  }

}
