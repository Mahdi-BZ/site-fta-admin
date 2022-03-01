import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { formation } from '../models/formation.model';

@Injectable({
    providedIn: 'root',
})
export class formationService {
    /*private forma: formation [];
    link = 'http://localhost:3000/api/formation';
    constructor(
        private http: HttpClient
    ) {
        this.forma = [
            new formation(1, 'souhir', 'daadouch', '36', '', '', 120, ''),

        ];
    }
    getformation(): Observable<formation[]> {
       return this.http.get<formation []>(this.link);
    }
    getFakeformation() {
        return this.forma;
    }
    getformationById(id: number): Observable<formation> {
        return this.http.get<formation>( this.link + `/${id}`);
    }
    addformation(format: formation): Observable<any> {
        return this.http.post(this.link, format);
    }
    deleteformation(id: number) {
        return this.http.delete(this.link + `/${id}` );
    }
    updateformation(format: formation) {
        console.log(format);
        return this.http.put(this.link, format);
    }*/
}

