import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { athlete, Performance, Performances } from '../models/athlete.model';
@Injectable({
    providedIn: 'root',
})
export class AthleteService {
    /* private act: athlete [];
    link = 'http://localhost:3000/api/athlete';
    constructor(
        private http: HttpClient
    ) {
        this.act = [
        new athlete(1,'','','',23,'','','','','',''
            ,'','','','','','','',
            '',2256,'','',46
            , new Performances('', new Performance (2019,'','', ''))),
        ];
    }
    getathlete(): Observable<athlete[]> {
       return this.http.get<athlete []>(this.link);
    }
    getFakeathlete() {
        return this.act;
    }
    getathleteById(id: number): Observable<athlete> {
        return this.http.get<athlete>( this.link + `/${id}`);
    }
    addathlete(actu: athlete): Observable<any> {
        return this.http.post(this.link, actu);
    }
    deleteathlete(id: number) {
        return this.http.delete(this.link + `/${id}` );
    }
    updateathlete(actu: athlete) {
        console.log(actu);
        return this.http.put(this.link, actu);
    }*/
}

