import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { bureaufed } from '../models/bureaufed.model';

@Injectable({
    providedIn: 'root',
})
export class BureaufedService {
    /*private membre: bureaufed [];
    link = 'http://localhost:3000/api/bureaufed';
    constructor(
        private http: HttpClient
    ) {
        this.membre = [
        new bureaufed(1, 'souhir', '', '', 23564689, 22_06_96),
        ];
    }
    getbureaufed(): Observable<bureaufed[]> {
       return this.http.get<bureaufed []>(this.link);
    }
    getFakebureaufed() {
        return this.membre;
    }
    getbureaufedById(id: number): Observable<bureaufed> {
        return this.http.get<bureaufed>( this.link + `/${id}`);
    }
    addbureaufed(actu: bureaufed): Observable<any> {
        return this.http.post(this.link, actu);
    }
    deletebureaufed(id: number) {
        return this.http.delete(this.link + `/${id}` );
    }
    updatebureaufed(actu: bureaufed) {
        console.log(actu);
        return this.http.put(this.link, actu);
    }*/
}

