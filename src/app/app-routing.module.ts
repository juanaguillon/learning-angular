import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { MaterialDemoComponent } from './material/material-demo/material-demo.component';

const routes: Routes = [
  {
    path:'material-demo',
    component: MaterialDemoComponent
  }
]
@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot( routes)
  ],
  declarations: [  ],
  exports:[
    RouterModule
  ]
})
export class AppRoutingModule { }
