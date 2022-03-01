import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { ligue } from '../models/ligues.model';

@Injectable({
    providedIn: 'root',
})
export class LigueService {
    /*private lg: ligue [];
    link = 'http://localhost:3000/api/ligue';
    constructor(
        private http: HttpClient
    ) {
        this.lg = [
            new ligue(1, 'souhir', 2356, '36', 6457, ''),

        ];
    }
    getligue(): Observable<ligue[]> {
       return this.http.get<ligue []>(this.link);
    }
    getFakeligue() {
        return this.lg;
    }
    getligueById(id: number): Observable<ligue> {
        return this.http.get<ligue>( this.link + `/${id}`);
    }
    addligue(format: ligue): Observable<any> {
        return this.http.post(this.link, format);
    }
    deleteligue(id: number) {
        return this.http.delete(this.link + `/${id}` );
    }
    updateligue(format: ligue) {
        console.log(format);
        return this.http.put(this.link, format);
    }*/
}

