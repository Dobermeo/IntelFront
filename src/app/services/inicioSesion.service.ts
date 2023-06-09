import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {PersonaUsuario} from "../models/personaUsuario";
import {Observable} from "rxjs";
import {FormControl, ɵFormGroupRawValue, ɵTypedOrUntyped} from "@angular/forms";
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class InicioSesionService {


  constructor(private http: HttpClient) {
  }

  loginUsuario(persona: ɵTypedOrUntyped<{ clave: FormControl<String | null>; cedula: FormControl<String | null> }, ɵFormGroupRawValue<{ clave: FormControl<String | null>; cedula: FormControl<String | null> }>, any>): Observable<PersonaUsuario> {
    console.log(persona)
    return this.http.post<PersonaUsuario>(environment.URL_APP + "/persona/login", persona)
  }

  saveUsuario(personaRequest: ɵTypedOrUntyped<{ apellidos: FormControl<String | null>; clave: FormControl<String | null>; idRol: FormControl<String | null>; cedula: FormControl<String | null>; telefono: FormControl<String | null>; email: FormControl<String | null>; nombres: FormControl<String | null> }, ɵFormGroupRawValue<{ apellidos: FormControl<String | null>; clave: FormControl<String | null>; idRol: FormControl<Number | null>; cedula: FormControl<String | null>; telefono: FormControl<String | null>; email: FormControl<String | null>; nombres: FormControl<String | null> }>, any>): Observable<PersonaUsuario> {
    console.log(personaRequest)
    return this.http.post<PersonaUsuario>(environment.URL_APP + "/persona/registroUsuario", personaRequest)
  }

}
