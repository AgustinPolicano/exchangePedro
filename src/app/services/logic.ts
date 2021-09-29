import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { DolarModel, hola } from '../model/model';

@Injectable({
  providedIn: 'root'
})

export class LogicService {
  dolarApi = 'https://www.dolarsi.com/api/api.php?type=valoresprincipales'
  constructor(private http: HttpClient) {

  }

  //Obtengo toda la data mediante un GET

  getUsd(): Observable<DolarModel[]> {
    return this.http.get<DolarModel[]>(this.dolarApi);
  }


}
