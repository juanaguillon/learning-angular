// Angular Core
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Angular material Modules
import { MatInputModule } from '@angular/material/input';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatListModule } from '@angular/material/list';
import { MatCardModule } from '@angular/material/card'

// Material Components modules
import { MaterialDemoComponent } from './material-demo/material-demo.component';
import { MaterialButtonComponent } from './material-button/material-button.component';
import { MaterialInputComponent } from './material-input/material-input.component';
import { MaterialListComponent } from './material-list/material-list.component';
import { EstudiantesComponent } from './material-list/estudiantes/estudiantes.component';


@NgModule({
  imports: [
    CommonModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatExpansionModule,
    MatInputModule,
    MatListModule,
    MatCardModule
  ],
  declarations: [
    MaterialDemoComponent,
    MaterialButtonComponent,
    MaterialInputComponent,
    MaterialListComponent,
    EstudiantesComponent
  ], 
  exports:[ 
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatExpansionModule,
    MatInputModule,
    MatListModule,
    MatCardModule
   ]
})
export class MaterialModule { }
