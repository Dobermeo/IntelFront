import {Injectable} from "@angular/core";
import {environment} from "../../environments/environment";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {FormControl, ɵFormGroupRawValue, ɵTypedOrUntyped} from "@angular/forms";
import {map, Observable} from "rxjs";
import {PersonaUsuario} from "../models/personaUsuario";
import {PuntuacionCompleta, PuntuacionResponse} from "../models/Puntuacion";


@Injectable({
  providedIn: 'root'
})

export class PuntuacionService{


  private urlEndPoint = environment.URL_APP;

  private httpHeaders = new HttpHeaders({
    'Content-Type': 'application/json',
    'Authorization': 'Bearer ' + JSON.parse(sessionStorage["personausuario"]).token
  })

  constructor(private http: HttpClient) {
  }


  savePuntuacion(puntuacionRequest: ɵTypedOrUntyped<{ id: FormControl<Number | null>; puntuacion: FormControl<Number | null>; intento: FormControl<Number | null>; idJuego: FormControl<Number | null>; idUsuario: FormControl<Number | null>; }, ɵFormGroupRawValue<{ id: FormControl<Number | null>; puntuacion: FormControl<Number | null>; intento: FormControl<Number | null>; idJuego: FormControl<Number | null>; idUsuario: FormControl<Number | null>; }>, any>): Observable<PuntuacionResponse> {
    console.log(puntuacionRequest)
    return this.http.post<PuntuacionResponse>(this.urlEndPoint + "/puntuacion/registroPuntuacion", puntuacionRequest)
  }

  getAllPuntuacion(): Observable<PuntuacionCompleta[]> {
    return this.http.get(this.urlEndPoint + "/puntuacion/todasPuntuaciones", { headers: this.httpHeaders }).pipe(map(Response => Response as PuntuacionCompleta[]))
  }



}
