import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialDemoComponent } from './material-demo/material-demo.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatExpansionModule } from '@angular/material/expansion';
import { MaterialButtonComponent } from './material-button/material-button.component';


@NgModule({
  imports: [
    CommonModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatExpansionModule
  ],
  declarations: [
    MaterialDemoComponent,
    MaterialButtonComponent
  ], 
  exports:[ 
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatExpansionModule
   ]
})
export class MaterialModule { }
