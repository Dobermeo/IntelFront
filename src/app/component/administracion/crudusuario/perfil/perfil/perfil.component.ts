import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {UsuarioService} from "../../../../../services/usuario.service";
import {MatSnackBar} from "@angular/material/snack-bar";
import {PersonaUsuario} from "../../../../../models/personaUsuario";
@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.css']
})
export class PerfilComponent implements OnInit {

  loaderGuardar:boolean;
  loaderActualizar:boolean;
  selected = new FormControl(0);

  persona: PersonaUsuario;
  verificador:boolean=false;
  constructor(private usuarioService:UsuarioService,
              private _snackBar: MatSnackBar) { }

  ngOnInit(): void {
   this.persona=JSON.parse(sessionStorage.getItem('personausuario'));
    console.log(JSON.parse(sessionStorage.getItem('personausuario')));
  this.actualizarDatos(this.persona.id)
  }



  formGrupos = new FormGroup({
    id: new FormControl<Number>(null),
    cedula: new FormControl<String>('', [Validators.required, Validators.maxLength(10), Validators.minLength(10), Validators.pattern("[0-9]+")]),
    apellidos: new FormControl<String>('', [Validators.required]),
    nombres: new FormControl<String>('', [Validators.required]),
    email: new FormControl<String>('', [Validators.required, Validators.email]),
    telefono: new FormControl<String>('', [Validators.required, Validators.maxLength(10), Validators.minLength(10), Validators.pattern("[0-9]+")]),
    clave: new FormControl<String>('', [Validators.required, Validators.minLength(5)]),
    idRol: new FormControl<Number>(null, [Validators.required]),
  })



  guardarUsuarios() {
    console.log(this.formGrupos.getRawValue())
    if (this.formGrupos.getRawValue().id==null){
      this.usuarioService.saveUsuario(this.formGrupos.getRawValue()).subscribe(value => {
        this._snackBar.open('Usuario registrado', 'ACEPTAR');
        this.selected.setValue(2);
      },error => {
        this._snackBar.open(error.error.message, 'ACEPTAR');
      })
    }else {
      this.usuarioService.updateUsuario(this.formGrupos.getRawValue()).subscribe(value => {
        this._snackBar.open('Usuario actualizado', 'ACEPTAR');
        this.selected.setValue(2);
      },error => {
        this._snackBar.open(error.error.message+' OCURRIO UN ERROR', 'ACEPTAR');
      })
    }
  }



  actualizarDatos(id:Number){
    this.vaciarFormulario()
    this.selected.setValue(0);
    this.loaderGuardar=true;
    this.usuarioService.getAllUsuarios().subscribe(value => {
      var usuario: PersonaUsuario = value.filter(value1 => value1.id == id)[0]
      this.formGrupos.setValue({
        id: usuario.id,
        apellidos: usuario.apellidos,
        cedula: usuario.cedula,
        clave: usuario.clave,
        email: usuario.email,
        idRol: usuario.idRol,
        nombres: usuario.nombres,
        telefono: usuario.telefono
      })
      this.loaderGuardar=false;
    })
  }



  vaciarFormulario(){
    this.formGrupos.setValue({
      id: null,
      apellidos: "",
      cedula: "",
      clave: "", email: "",
      idRol: null, nombres: "",
      telefono: ""
    })
  }




}
