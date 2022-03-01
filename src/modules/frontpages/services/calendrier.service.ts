import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { calendrier } from '../models/calendrier.model';

@Injectable({
    providedIn: 'root',
})
export class CalendrierService {
    /*private comp: calendrier [];
    link = 'http://localhost:3000/api/calendrier';
    constructor(
        private http: HttpClient
    ) {
        this.comp = [
        new calendrier(1, 'souhir', '', '', '', '','',22-06-96),
        ];
    }
    getcalendrier(): Observable<calendrier[]> {
       return this.http.get<calendrier []>(this.link);
    }
    getFakecalendrier() {
        return this.comp;
    }
    getcalendrierById(id: number): Observable<calendrier> {
        return this.http.get<calendrier>( this.link + `/${id}`);
    }
    addcalendrier(actu: calendrier): Observable<any> {
        return this.http.post(this.link, actu);
    }
    deletecalendrier(id: number) {
        return this.http.delete(this.link + `/${id}` );
    }
    updatecalendrier(actu: calendrier) {
        console.log(actu);
        return this.http.put(this.link, actu);
    }*/
}

