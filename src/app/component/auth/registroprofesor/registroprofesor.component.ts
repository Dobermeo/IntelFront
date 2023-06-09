import {Component, OnInit, ViewChild} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {MatPaginator} from "@angular/material/paginator";
import {MatSort} from "@angular/material/sort";
import {UsuarioService} from "../../../services/usuario.service";
import {MatSnackBar} from "@angular/material/snack-bar";
import {InicioSesionService} from "../../../services/inicioSesion.service";

@Component({
  selector: 'app-registroprofesor',
  templateUrl: './registroprofesor.component.html',
  styleUrls: ['./registroprofesor.component.css']
})
export class RegistroprofesorComponent implements OnInit {

  loaderGuardar:boolean;
  selected = new FormControl(0);


  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor(private usuarioService:InicioSesionService,
              private _snackBar: MatSnackBar) {
  }

  ngOnInit(): void {
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
      this.usuarioService.saveUsuario(this.formGrupos.getRawValue()).subscribe(value => {
        this._snackBar.open('Usuario registrado', 'ACEPTAR');
        this.vaciarFormulario()
        this.selected.setValue(2);
        this.loaderGuardar=false
      },error => {
        this._snackBar.open(error.error.message, 'ACEPTAR');
        this.loaderGuardar=false
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


