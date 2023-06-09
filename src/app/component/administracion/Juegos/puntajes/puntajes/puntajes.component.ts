import {Component, OnInit, ViewChild} from '@angular/core';
import {MatTableDataSource} from "@angular/material/table";
import {PersonaUsuario} from "../../../../../models/personaUsuario";
import {MatPaginator} from "@angular/material/paginator";
import {MatSort} from "@angular/material/sort";
import {UsuarioService} from "../../../../../services/usuario.service";
import {MatSnackBar} from "@angular/material/snack-bar";
import {FormControl} from "@angular/forms";
import {PuntuacionCompleta} from "../../../../../models/Puntuacion";
import {PuntuacionService} from "../../../../../services/puntuacion.service";

@Component({
  selector: 'app-puntajes',
  templateUrl: './puntajes.component.html',
  styleUrls: ['./puntajes.component.css']
})
export class PuntajesComponent implements OnInit {

  loaderGuardar:boolean;
  loaderActualizar:boolean;
  selected = new FormControl(0);
  displayedColumns: string[] = ['nombreUsuario', 'nombreJuego', 'intento', 'puntuacion'];
  dataSource: MatTableDataSource<PuntuacionCompleta>;

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  constructor(private puntuacionService:PuntuacionService,
              private _snackBar: MatSnackBar) { }

  ngOnInit(): void {
    this.listarUsuarios()
  }




  listarUsuarios(){
    this.loaderActualizar=true
    this.puntuacionService.getAllPuntuacion().subscribe(value => {
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

}
