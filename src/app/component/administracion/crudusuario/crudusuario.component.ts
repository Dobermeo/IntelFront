import {Component, OnInit, ViewChild} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {MatTableDataSource} from "@angular/material/table";
import {MatPaginator} from "@angular/material/paginator";
import {MatSort} from "@angular/material/sort";
import {UsuarioService} from "../../../services/usuario.service";
import {MatSnackBar} from "@angular/material/snack-bar";
import {PersonaCliente} from "../../../models/personaCliente";
import {PersonaUsuario} from "../../../models/personaUsuario";


export interface UserData {
  id: string;
  name: string;
  progress: string;
  fruit: string;
}

/** Constants used to fill up our data base. */
const FRUITS: string[] = [
  'blueberry',
  'lychee',
  'kiwi',
  'mango',
  'peach',
  'lime',
  'pomegranate',
  'pineapple',
];
const NAMES: string[] = [
  'Maia',
  'Asher',
  'Olivia',
  'Atticus',
  'Amelia',
  'Jack',
  'Charlotte',
  'Theodore',
  'Isla',
  'Oliver',
  'Isabella',
  'Jasper',
  'Cora',
  'Levi',
  'Violet',
  'Arthur',
  'Mia',
  'Thomas',
  'Elizabeth',
];


@Component({
  selector: 'app-crudusuario',
  templateUrl: './crudusuario.component.html',
  styleUrls: ['./crudusuario.component.css']
})
export class CrudusuarioComponent implements OnInit {


  loaderGuardar:boolean;
  loaderActualizar:boolean;
  selected = new FormControl(0);

  displayedColumns: string[] = ['id', 'cedula', 'nombres', 'apellidos','email','telefono','editar'];
  dataSource: MatTableDataSource<PersonaUsuario>;

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor(private usuarioService:UsuarioService,
              private _snackBar: MatSnackBar) {
  }


  ngOnInit(): void {
    this.listarUsuarios()
  }

  listarUsuarios(){
    this.loaderActualizar=true
    this.usuarioService.getAllUsuarios().subscribe(value => {
      this.dataSource = new MatTableDataSource(value);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
      this.loaderActualizar=false
    })
  }

  ngAfterViewInit() {

  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
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
        this.vaciarFormulario()
        this.listarUsuarios()
        this.selected.setValue(2);
        this.loaderGuardar=false
      },error => {
        this._snackBar.open(error.error.message, 'ACEPTAR');
        this.loaderGuardar=false
      })
    }else {
      this.usuarioService.updateUsuario(this.formGrupos.getRawValue()).subscribe(value => {
        this._snackBar.open('Usuario actualizado', 'ACEPTAR');
        this.vaciarFormulario()
        this.listarUsuarios()
        this.selected.setValue(2);
        this.loaderGuardar=false
      },error => {
        this._snackBar.open(error.error.message+' OCURRIO UN ERROR', 'ACEPTAR');
        this.loaderGuardar=false
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

/** Builds and returns a new User. */
function createNewUser(id: number): UserData {
  const name =
    NAMES[Math.round(Math.random() * (NAMES.length - 1))] +
    ' ' +
    NAMES[Math.round(Math.random() * (NAMES.length - 1))].charAt(0) +
    '.';

  return {
    id: id.toString(),
    name: name,
    progress: Math.round(Math.random() * 100).toString(),
    fruit: FRUITS[Math.round(Math.random() * (FRUITS.length - 1))],
  };
}
