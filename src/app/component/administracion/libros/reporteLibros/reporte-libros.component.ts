import { Component, OnInit } from '@angular/core';
import pdfMake from "pdfmake/build/pdfmake";
import pdfFonts from "pdfmake/build/vfs_fonts";
import {MatSnackBar} from "@angular/material/snack-bar";
import {UsuarioService} from "src/app/services/usuario.service";
import {LibroService} from "src/app/services/libro.service";
import {ReporteLibros} from "src/app/models/libro";
import {DatePipe} from "@angular/common";
pdfMake.vfs = pdfFonts.pdfMake.vfs;

@Component({
  selector: 'app-reporteLibros',
  templateUrl: './reporte-libros.component.html',
  styleUrls: ['./reporte-libros.component.css']
})
export class ReporteLibrosComponent implements OnInit {

  cargar:boolean;
  habilitar:boolean;

  reporteLibros:ReporteLibros= new ReporteLibros();

  constructor(private libroService:LibroService,
              private _snackBar: MatSnackBar,
              private usuarioService:UsuarioService) { }

  ngOnInit(): void {
  }
  consultarDatos(mes: HTMLInputElement){
    this.cargar=true;
    var n:String[]=[]
    n=mes.value.split('-');
    this.libroService.getReporteLibros(n[1],n[0]).subscribe(value => {
      if(value.total!=0){
        this.reporteLibros=value;
        this.cargar=false;
        this.habilitar=true;
      }else {
        this._snackBar.open('Mes sin datos','ACEPTAR')
        this.cargar=false;
      }
    },error => {
      this._snackBar.open(error.error.message+' OCURRIO UN ERROR','ACEPTAR')
      this.cargar=false;
    })
  }

  generatePDF(mes: HTMLInputElement) {
    this.cargar=true;
    var n:String[]=[]
    n=mes.value.split('-');
    var pipe: DatePipe = new DatePipe('es')
    var dia: String = new Date().toISOString();
    this.usuarioService.getAllUsuarios().subscribe(valueb =>{
      this.libroService.getReporteLibros(n[1],n[0]).subscribe(async value => {
        if(value.total!=0){
          this.libroService.getReporteLibrosClientes(n[1],n[0]).subscribe(async cliente => {
            const pdfDefinition: any = {
              content: [
                {image: await this.getBase64ImageFromURL('assets/images/logovallenegro.png'), width: 100},
                {
                  text: '_________________________________________________________________________________________',
                  alignment: 'center'
                },
                // @ts-ignore
                {text: pipe.transform(dia, 'MMMM d, y'), alignment: 'right'},
                {text: 'REPORTE DE LIBROS', fontSize: 15, bold: true, alignment: 'center'},
                {text: '      '},
                {text: 'MES: ' + value.mes + "/" + value.anio},
                {text: '    '},
                {text: 'REPORTE POR GENERO'},
                {
                  table: {
                    headerRows: 1,
                    widths: ['34,4%', '33,4%', '33,4%'],
                    body: [
                      ['CUADRO DE DATOS SEGÚN EL GÉNERO', 'Nº', '%'],
                      ['MASCULINO', value.masculino?.num, Math.round(value.masculino?.pct) + '%'],
                      ['FEMENINO', value.femenino?.num, Math.round(value.femenino?.pct) + '%'],
                      ['OTRO', value.otros?.num, Math.round(value.otros?.pct) + '%'],
                      ['TOTAL', value.total, '100%'],
                    ]
                  }
                },
                {text: '    '},
                {text: 'LISTA DE CLIENTES'},
                {
                  table: {
                    headerRows: 1,
                    widths: ['10%', '32.5%', '32.5%','25%'],
                    body: [
                      ['ID', 'NOMBRES', 'APELLIDOS', 'GENERO'],
                      [cliente.map(function (item, index) {
                        return (index + 1)
                      }),
                        cliente.map(function (item) {
                          return item.nombres
                        }),
                        cliente.map(function (item) {
                          return item.apellidos
                        }),
                        cliente.map(function (item) {
                          return item.genero
                        })
                      ],
                    ]
                  },
                },
                {text: '    '},
                {text: '    '},
                {
                  table: {
                    headerRows: 1,
                    widths: ['100%'],
                    heights: 40,
                    body: [
                      ['BIBLIOTECARIO/A: ' + valueb.filter(value1 => value1.idRol == 1).pop().apellidos + ' ' + valueb.filter(value1 => value1.idRol == 1).pop().nombres],
                      ['Firma:']
                    ]
                  },
                }
              ]
            }
            this.cargar = false;
            const pdf = pdfMake.createPdf(pdfDefinition);
            pdf.open();
          })
        }else {
          this.cargar=false;
          this._snackBar.open('Mes sin datos','ACEPTAR')
        }
      })
    })

  }



  getBase64ImageFromURL(url:any) {
    return new Promise((resolve, reject) => {
      var img = new Image();
      img.setAttribute("crossOrigin", "anonymous");

      img.onload = () => {
        var canvas = document.createElement("canvas");
        canvas.width = img.width;
        canvas.height = img.height;

        var ctx = canvas.getContext("2d");
        // @ts-ignore
        ctx.drawImage(img, 0, 0);

        var dataURL = canvas.toDataURL("image/png");

        resolve(dataURL);
      };

      img.onerror = error => {
        reject(error);
      };

      img.src = url;
    });
  }
  seleccion:String;
  select(arr){
    this.seleccion=arr.value;
  }
}
