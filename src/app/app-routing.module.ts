import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { MaterialDemoComponent } from './material/material-demo/material-demo.component';
import { HomeComponent } from './home/home.component';
import { MarsComponent } from './mars/mars.component';

const routes: Routes = [
  {
    path:'material-demo',
    component: MaterialDemoComponent
  },
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path:'mars',
    component: MarsComponent
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
