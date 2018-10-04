import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialDemoComponent } from './material-demo/material-demo.component';

@NgModule({
  imports: [
    CommonModule
    
  ],
  declarations: [MaterialDemoComponent], 
  exports:[ MaterialDemoComponent ]
})
export class MaterialModule { }
