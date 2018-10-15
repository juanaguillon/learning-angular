import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { Surface } from '../material-list.component'
@Component({
  selector: 'app-estudiantes',
  templateUrl: './estudiantes.component.html',
  styleUrls: ['./estudiantes.component.css']
})
export class EstudiantesComponent implements OnInit {

  @Output()
  emmited = new EventEmitter<Surface>()
  @Input() Estudiante: Surface;

  constructor() { }

  ngOnInit() {
  }


}
