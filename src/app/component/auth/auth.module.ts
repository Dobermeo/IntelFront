import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule, Routes} from "@angular/router";
import {MaterialModule} from "../../../material/material.module";
import {IniciosesionComponent} from './iniciosesion/iniciosesion.component';
import {ReactiveFormsModule} from "@angular/forms";
import {HttpClientModule} from "@angular/common/http";
import { RegistroprofesorComponent } from './registroprofesor/registroprofesor.component';

const routes: Routes = [
  {
    path: 'iniciosesion',
    component: IniciosesionComponent
  },
  {
    path: 'registroprofesor',
    component: RegistroprofesorComponent
  }
]


@NgModule({
  declarations: [
    IniciosesionComponent,
    RegistroprofesorComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    RouterModule.forChild(routes),
    ReactiveFormsModule,
    HttpClientModule
  ]
})
export class AuthModule {
}
