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
  cameras:string[] = [
    "MAHLI","CHEMCAM","NAVCAM","RHAZ","FHAZ","PANCAM"
  ]
  // currentCamera: string;

  constructor( private nasaApi:NasaApiService ) { }

  ngOnInit() {
    this.refreshView(this.cameras[2]);
  }

  onClick( camera:string ) {
    this.refreshView(camera);
  }

  private refreshView( camera:string ){
    this.nasaApi.getMarsImages( camera )
      .subscribe(images => {
        this.marsImages = images.photos;
      })
  }

}
