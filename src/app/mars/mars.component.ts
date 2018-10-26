import { Component, OnInit } from '@angular/core';
import { MarsImage } from '../shared/model/mars-image';
import { NasaApiService } from '../shared/services/nasa-api.service';



@Component({
  selector: 'app-mars',
  templateUrl: './mars.component.html',
  styleUrls: ['./mars.component.css']
})
export class MarsComponent implements OnInit {

  marsImages:MarsImage[];

  constructor( private nasaApi:NasaApiService ) { }

  ngOnInit() {
    this.nasaApi.getMarsImages()
      .subscribe( images => {
        console.log(images);
      })
  }

}
