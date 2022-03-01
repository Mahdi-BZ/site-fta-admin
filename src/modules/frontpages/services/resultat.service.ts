import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { resultat } from '../models/resultat.model';

@Injectable({
    providedIn: 'root',
})
export class ResultatService {
    /*private res: resultat [];
    link = 'http://localhost:3000/api/resultat';
    constructor(
        private http: HttpClient
    ) {
        this.res = [
        new resultat(1, 'souhir', 22_06_09,''),
        ];
    }
    getresultat(): Observable<resultat[]> {
       return this.http.get<resultat []>(this.link);
    }
    getFakeresultat() {
        return this.res;
    }
    getresultatById(id: number): Observable<resultat> {
        return this.http.get<resultat>( this.link + `/${id}`);
    }
    addresultat(actu: resultat): Observable<any> {
        return this.http.post(this.link, actu);
    }
    deleteresultat(id: number) {
        return this.http.delete(this.link + `/${id}` );
    }
    updateresultat(actu: resultat) {
        console.log(actu);
        return this.http.put(this.link, actu);
    }*/
}

