import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  url = 'https://gorest.co.in/public/v1/users'
  token = '7137e0b39c97ed9ffe63e32a2f700aa02ca3409a743f55db45be112d5a2681df'
  constructor(private _http: HttpClient) { }

  getUsuario():Observable<any>{
    return this._http.get(`${this.url}?access-token=${this.token}`);
  }

  getUsuarioId(id:number):Observable<any>{
    return this._http.get(`${this.url}/${id}?access-token=${this.token}`);
  }
}
