import { Injectable } from '@angular/core';
import {athlesante} from '../models/athlesante.model';
import {HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
    providedIn: 'root',
})
export class athlesanteService {
    /*private athle_sante: athlesante [];
    link = 'http://localhost:3000/api/athlesante';
    constructor(
        private http: HttpClient
    ) {
        this.athle_sante = [
            new athlesante(1, 'souhir', 'daadouch', '36'),
            new athlesante(2, 'souhir2', 'daadouch2', '36'),
        ];
    }
    getathle_sante(): Observable<athlesante[]> {
       return this.http.get<athlesante []>(this.link);
    }
    getFakeathle_sante() {
        return this.athle_sante;
    }
    getathlesanteById(id: number): Observable<athlesante> {
        return this.http.get<athlesante>( this.link + `/${id}`);
    }
    addathlesante(athles: athlesante): Observable<any> {
        return this.http.post(this.link, athles);
    }
    deleteathlesante(id: number) {
        return this.http.delete(this.link + `/${id}` );
    }
    updateathlesante(athles: athlesante) {
        console.log(athles);
        return this.http.put(this.link, athles);
    }*/
}

