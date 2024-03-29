import {LOCALE_ID, NgModule} from '@angular/core';
import { CommonModule } from '@angular/common';
import { BienvenidaComponent } from './bienvenida/bienvenida.component';
import { MaterialModule } from "../../../material/material.module";
import { RouterModule, Routes } from "@angular/router";
import { ClientesComponent } from './clientes/clientes.component';
import { ReactiveFormsModule } from "@angular/forms";
import { AsistenciacursoComponent } from "./cursos/asistenciacurso/asistenciacurso.component";
import { ReporteCursoComponent } from "./cursos/reporteCurso/reporte-curso.component";
import { CrudcursoComponent } from "./cursos/crudcurso/crudcurso.component";
import { NuevaInscripcionComponent } from './cursos/inscripcionCurso/nueva-inscripcion-curso.component';
import { NuevaParticipacionTallerComponent } from './taller/participacionTaller/nueva-participacion-taller.component';
import { PrestamoComputoComponent } from './computo/prestamoComputo/prestamo-computo.component';
import { NuevaPrestamoLibroComponent } from './libros/prestamoLibro/nuevo-prestamo-libro.component';
import { AsistenciaTallerComponent } from './taller/asistenciaTaller/asistencia-taller.component';
import { ReporteTallerComponent } from './taller/reporteTaller/reporte-taller.component';
import { ReporteLibrosComponent } from './libros/reporteLibros/reporte-libros.component';
import { NuevaUsoImpresionCopiaComponent } from './ImpresionesCopias/UsoImpresionCopia/nuevo-uso-impresion-copia.component';
import { ReporteComputoComponent } from './computo/reporteComputo/reporte-computo.component';
import { ReporteImpresionCopiasComponent } from './ImpresionesCopias/reporteImpresionCopias/reporte-impresion-copias.component';
import { ReporteEventoComponent } from './eventos/reporteEvento/reporte-evento.component';
import { informeMensualComponent } from './informes/mensual/informe-mensual.component';
import { registroEventoComponent } from './eventos/registroEvento/registro-evento.component';
import { CrudtallerComponent } from './taller/crudtaller/crudtaller.component';
import { CrudeventoComponent } from './eventos/crudevento/crudevento.component';
import { CrudusuarioComponent } from './crudusuario/crudusuario.component';
import { CrudcomputoComponent } from './computo/crudcomputo/crudcomputo.component';
import { nuevoClienteComponent } from './clientes/nuevoCliente/nuevoCliente.component';
import { EditarClientesComponent } from './clientes/editarClientes/editar-clientes.component';
import { EditarUsuariosComponent } from './crudusuario/editarUsuarios/editar-usuarios.component';
import { EditarCursoComponent } from './cursos/crudcurso/editar-curso/editar-curso.component';
import { EditarTallerComponent } from './taller/crudtaller/editar-taller/editar-taller.component';
import localeEs from '@angular/common/locales/es';
import {registerLocaleData} from "@angular/common";
import { EditarcomputoComponent } from './computo/editarcomputo/editarcomputo.component';
import { CrudLibroComponent } from './libros/crudLibro/crudlibro.component';
import { ExelmensualComponent } from './informes/exelmensual/exelmensual.component';
import { crudServicioVariosComponent } from './serviciosVarios/crudServicioVarios/crudservicio.component';
import { usoServicioVariosComponent } from './serviciosVarios/UsoServicioVarios/usoServicioVarios.component';
import { ReportevariosComponent } from './serviciosVarios/reportevarios/reportevarios.component';
import { MenujuegosComponent } from './menujuegos/menujuegos.component';
import { Juego1Component } from './Juegos/juego1/juego1.component';
import { PuntajesComponent } from './Juegos/puntajes/puntajes/puntajes.component';
import { PerfilComponent } from './crudusuario/perfil/perfil/perfil.component';
import { Juego2Component } from './Juegos/juego2/juego2.component';
import { Juego3Component } from './Juegos/juego3/juego3.component';
import { Juego4Component } from './Juegos/juego4/juego4.component';
import { Juego5Component } from './Juegos/juego5/juego5.component';
import { Juego6Component } from './Juegos/juego6/juego6.component';
import { Juego7Component } from './Juegos/juego7/juego7.component';
import { Juego8Component } from './Juegos/juego8/juego8.component';
import { Juego9Component } from './Juegos/juego9/juego9.component';
import { Juego10Component } from './Juegos/juego10/juego10.component';
import { Juego11Component } from './Juegos/juego11/juego11.component';
import { Juego12Component } from './Juegos/juego12/juego12.component';
import { Juego13Component } from './Juegos/juego13/juego13.component';
import { Juego14Component } from './Juegos/juego14/juego14.component';
import { Juego15Component } from './Juegos/juego15/juego15.component';
registerLocaleData(localeEs, 'es')


const routes: Routes = [



  {
    path: 'bienvenida',
    component: BienvenidaComponent
  },
  {
    path: 'administracionclientes',
    component: ClientesComponent
  },
  {
    path: 'asistenciacurso',
    component: AsistenciacursoComponent

  },
  {
    path: 'inscripcioncurso',
    component: NuevaInscripcionComponent

  },
  {
    path: 'inscripciontaller',
    component: NuevaParticipacionTallerComponent
  },
  {
    path: 'reportecurso',
    component: ReporteCursoComponent

  },
  {
    path: 'cursos',
    component: CrudcursoComponent
  },
  {
    path: 'prestamocomputo',
    component: PrestamoComputoComponent
  },
  {
    path: 'prestamolibro',
    component: NuevaPrestamoLibroComponent
  },

  {
    path: 'usoImpresionCopia',
    component: NuevaUsoImpresionCopiaComponent
  },
  {
    path: 'asistenciataller',
    component: AsistenciaTallerComponent
  },
  {
    path: 'reportetaller',
    component: ReporteTallerComponent
  },
  {
    path: 'reportelibros',
    component: ReporteLibrosComponent
  },
  {
    path: 'informeMensualdoc',
    component: informeMensualComponent
  },
  {
    path: 'reportecomputo',
    component: ReporteComputoComponent
  },
  {
    path: 'reporteimpresioncopia',
    component: ReporteImpresionCopiasComponent
  },
  {
    path: 'reporteeventos',
    component: ReporteEventoComponent
  },
  {
    path: 'registroevento',
    component: registroEventoComponent
  },
  {
    path: 'crudtaller',
    component: CrudtallerComponent
  },
  {
    path: 'crudevento',
    component: CrudeventoComponent
  },
  {
    path: 'crudusuario',
    component: CrudusuarioComponent
  },
  {
    path: 'crudcomputo',
    component: CrudcomputoComponent
  },

  {
    path: 'crudlibro',
    component: CrudLibroComponent
  },

  {
    path: 'editarcliente/:id',
    component: EditarClientesComponent
  },
  {
    path: 'administracionusuarios',
    component: CrudusuarioComponent
  },
  {
    path: 'editarusuarios/:id',
    component: EditarUsuariosComponent
  },
  {
    path: 'editarcursos/:id',
    component: EditarCursoComponent
  },
  {
    path: 'editartalleres/:id',
    component: EditarTallerComponent
  },
  {
    path: 'editarcomputo/:id',
    component: EditarcomputoComponent
  },
  {
    path: 'informeMensualExel',
    component: ExelmensualComponent
  },

  {
    path: 'crudServiciosVarios',
    component: crudServicioVariosComponent
  },
  {
    path: 'usoserviciosvarios',
    component: usoServicioVariosComponent
  },
  {
    path: 'reportevarios',
    component: ReportevariosComponent
  },{
    path: 'juegos',
    component: MenujuegosComponent
  },{
    path: 'juegos/juego1',
    component: Juego1Component
  },{
    path: 'juegos/juego2',
    component: Juego2Component
  },{
    path: 'juegos/juego3',
    component: Juego3Component
  },{
    path: 'juegos/juego4',
    component: Juego4Component
  },{
    path: 'juegos/juego5',
    component: Juego5Component
  },{
    path: 'juegos/juego6',
    component: Juego6Component
  },{
    path: 'juegos/juego7',
    component: Juego7Component
  },{
    path: 'juegos/juego8',
    component: Juego8Component
  },{
    path: 'juegos/juego9',
    component: Juego9Component
  },{
    path: 'juegos/juego10',
    component: Juego10Component
  },{
    path: 'juegos/juego11',
    component: Juego11Component
  },{
    path: 'juegos/juego12',
    component: Juego12Component
  },{
    path: 'juegos/juego13',
    component: Juego13Component
  },{
    path: 'juegos/juego14',
    component: Juego14Component
  },{
    path: 'juegos/juego15',
    component: Juego15Component
  },{
    path: 'juegos/puntajes',
    component: PuntajesComponent
  },{
    path: 'perfil',
    component: PerfilComponent
  }

]

@NgModule({
  declarations: [
    BienvenidaComponent,
    ClientesComponent,
    AsistenciacursoComponent,
    ReporteCursoComponent,
    CrudcursoComponent,
    CrudLibroComponent,
    NuevaInscripcionComponent,
    NuevaParticipacionTallerComponent,
    PrestamoComputoComponent,
    NuevaPrestamoLibroComponent,
    NuevaUsoImpresionCopiaComponent,
    AsistenciaTallerComponent,
    ReporteTallerComponent,
    ReporteLibrosComponent,
    informeMensualComponent,
    ReporteComputoComponent,
    ReporteImpresionCopiasComponent,
    ReporteEventoComponent,
    registroEventoComponent,
    nuevoClienteComponent,
    CrudtallerComponent,
    CrudeventoComponent,
    CrudusuarioComponent,
    CrudcomputoComponent,
    EditarClientesComponent,
    EditarUsuariosComponent,
    EditarCursoComponent,
    EditarTallerComponent,
    EditarcomputoComponent,
    ExelmensualComponent,
    crudServicioVariosComponent,
    usoServicioVariosComponent,
    ReportevariosComponent,
    MenujuegosComponent,
    Juego1Component,
    PuntajesComponent,
    PerfilComponent,
    Juego2Component,
    Juego3Component,
    Juego4Component,
    Juego5Component,
    Juego6Component,
    Juego7Component,
    Juego8Component,
    Juego9Component,
    Juego10Component,
    Juego11Component,
    Juego12Component,
    Juego13Component,
    Juego14Component,
    Juego15Component,
  ],
  imports: [
    CommonModule,
    MaterialModule,
    RouterModule.forChild(routes),
    ReactiveFormsModule,

  ],
  providers: [{provide: LOCALE_ID,useValue: 'es'}]
})
export class AdministracionModule {
}



