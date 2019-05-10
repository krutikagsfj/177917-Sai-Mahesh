
import { SuccessComponent } from './../success/success.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes,RouterModule} from '@angular/router';
import { Success1Component } from '../success1/success1.component';



export const routes:Routes=[
  {path:'', component:SuccessComponent,pathMatch:'full'},
  {path:'success1',component:Success1Component}
]

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  declarations: []
})
export class RoutingModule { }
