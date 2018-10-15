import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-material-button',
  templateUrl: './material-button.component.html',
  styleUrls: ['./material-button.component.css']
})
export class MaterialButtonComponent implements OnInit {

  formulario = {
    valida: true
  }
  
  constructor() { }

  ngOnInit() {
  }

  // Event biding
  onClicking(){
    console.log('Evento de Click');
  }

  onClickingEvent( $event ){
    console.log('The event is' , $event)
  }
  

}
