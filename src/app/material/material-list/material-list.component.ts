import { Component, OnInit } from '@angular/core';

export interface Surface {
  name: string
}

@Component({
  selector: 'app-material-list',
  templateUrl: './material-list.component.html',
  styleUrls: ['./material-list.component.css']
})

export class MaterialListComponent implements OnInit {

  names:Surface[] = [
    { name:'Juan' },
    { name:'Jason'},
    { name:'Anderson'}
  ]
  constructor() { }

  ngOnInit() {
  }

}
