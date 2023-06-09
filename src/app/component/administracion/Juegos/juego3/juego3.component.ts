import { Component, OnInit } from '@angular/core';
import {PuntuacionService} from "../../../../services/puntuacion.service";
import {MatSnackBar} from "@angular/material/snack-bar";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {PersonaUsuario} from "../../../../models/personaUsuario";
import {DomSanitizer, SafeResourceUrl} from "@angular/platform-browser";

@Component({
  selector: 'app-juego3',
  templateUrl: './juego3.component.html',
  styleUrls: ['./juego3.component.css']
})
export class Juego3Component implements OnInit {

  url: string = "https://juego4ie.web.app/";
  urlSafe: SafeResourceUrl;
  constructor(private puntuacionService:PuntuacionService,
              private _snackBar: MatSnackBar,
              public sanitizer: DomSanitizer) {
    this.obtDatos()
  }

  ngOnInit(): void {
    this.urlSafe= this.sanitizer.bypassSecurityTrustResourceUrl(this.url);
  }


  formGrupos = new FormGroup({
    id: new FormControl<Number>(null),
    puntuacion: new FormControl<Number>(0, [Validators.required]),
    intento: new FormControl<Number>(0, [Validators.required]),
    idJuego: new FormControl<Number>(0, [Validators.required]),
    idUsuario: new FormControl<Number>(0, [Validators.required])
  })


  obtDatos(){
    let usuario: PersonaUsuario=JSON.parse(sessionStorage.getItem("personausuario"));
    console.log(usuario);
    this.formGrupos.setValue({
      id: 1,
      puntuacion: 0,
      intento: 0,
      idJuego: 3,
      idUsuario: usuario.id
    })
  }

  guardarDatos(){
    this.puntuacionService.savePuntuacion(this.formGrupos.getRawValue()).subscribe(value => {
      console.log(value);
      this._snackBar.open('Puntuación registrada', 'ACEPTAR');
    }, error =>{
      this._snackBar.open( error.error.message, 'ACEPTAR');
    })
  }
}
