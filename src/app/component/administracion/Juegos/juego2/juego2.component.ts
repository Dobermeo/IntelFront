import { Component, HostListener, OnInit } from '@angular/core';
import {PuntuacionService} from "../../../../services/puntuacion.service";
import {MatSnackBar} from "@angular/material/snack-bar";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {PersonaUsuario} from "../../../../models/personaUsuario";
import {DomSanitizer, SafeResourceUrl} from "@angular/platform-browser";

@Component({
  selector: 'app-juego2',
  templateUrl: './juego2.component.html',
  styleUrls: ['./juego2.component.css']
})
export class Juego2Component implements OnInit {

  url: string = "https://juego1ie.web.app/";
  urlSafe: SafeResourceUrl;
  public puntuacionJuego: number = 0; // línea para definir la variable puntuacionJuego

  constructor(private puntuacionService:PuntuacionService,
              private _snackBar: MatSnackBar,
              public sanitizer: DomSanitizer) {
    this.obtDatos()
  }

  ngOnInit(): void {
    this.urlSafe= this.sanitizer.bypassSecurityTrustResourceUrl(this.url);
  }

  @HostListener('window:message', ['$event'])
onMessage(event) {
  if (event.data.score) {
    console.log(event.data.score);
    this.puntuacionJuego = event.data.score;
    this.formGrupos.get('puntuacion').setValue(this.puntuacionJuego); 
  }
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
      idJuego: 2,
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
