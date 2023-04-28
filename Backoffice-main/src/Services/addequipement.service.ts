import { Injectable } from '@angular/core';
import {environnment} from "../app/environnement/environnement";
import {HttpClient, HttpResponse} from "@angular/common/http";
import {map, Observable} from "rxjs";
import {Equipement} from "../app/Models/equipement";

@Injectable({
  providedIn: 'root'
})
export class AddequipementService {
  private baseUrl = environnment.baseUrl + '/equipement/';


  constructor(private http: HttpClient) {
  }

  retrieve(): Observable<Equipement[]> {
    return this.http.get<Equipement[]>(this.baseUrl + 'getequipement');
  }

  add(data: any):  Observable<HttpResponse<any>> {
    return this.http.post(this.baseUrl + 'addequipement', data, { observe: 'response' }).pipe(
      map(response => {
        console.log(response)
        return response;
      })
    );
  }

  remove(id: any) {
    return this.http.delete(this.baseUrl + 'deleequipement/' + id);
  }

  update(data: any, id: any):Observable<Equipement> {
    return this.http.put<Equipement>(this.baseUrl + 'updatequipement/' +id, data);
  }

}
