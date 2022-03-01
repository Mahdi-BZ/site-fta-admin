import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { commissionfed } from '../models/commissionfed.model';

@Injectable({
    providedIn: 'root',
})
export class CommissionfedService {
    /*private membre: commissionfed [];
    link = 'http://localhost:3000/api/commissionfed';
    constructor(
        private http: HttpClient
    ) {
        this.membre = [
        new commissionfed(1, 'souhir', '', ''),
        ];
    }
    getcommissionfed(): Observable<commissionfed[]> {
       return this.http.get<commissionfed []>(this.link);
    }
    getFakecommissionfed() {
        return this.membre;
    }
    getcommissionfedById(id: number): Observable<commissionfed> {
        return this.http.get<commissionfed>( this.link + `/${id}`);
    }
    addcommissionfed(actu: commissionfed): Observable<any> {
        return this.http.post(this.link, actu);
    }
    deletecommissionfed(id: number) {
        return this.http.delete(this.link + `/${id}` );
    }
    updatecommissionfed(actu: commissionfed) {
        console.log(actu);
        return this.http.put(this.link, actu);
    }*/
}

