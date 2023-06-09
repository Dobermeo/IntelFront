import { Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {PersonaUsuario} from "../../../../models/personaUsuario";
import {PuntuacionService} from "../../../../services/puntuacion.service";
import {MatSnackBar} from "@angular/material/snack-bar";
import {DomSanitizer, SafeResourceUrl} from "@angular/platform-browser";

@Component({
  selector: 'app-juego1',
  templateUrl: './juego1.component.html',
  styleUrls: ['./juego1.component.css']
})
export class Juego1Component implements OnInit {

  url: string = "https://juego2ie.web.app/";
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
      idJuego: 1,
      idUsuario: usuario.idUsuario
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
