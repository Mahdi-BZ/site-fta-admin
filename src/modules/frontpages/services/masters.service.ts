import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { masters } from '../models/masters.model';

@Injectable({
    providedIn: 'root',
})
export class MastersService {
    /*private mas: masters [];
    link = 'http://localhost:3000/api/masters';
    constructor(
        private http: HttpClient
    ) {
        this.mas = [
        new masters(1, 55, 45, ''),
        ];
    }
    get master(): Observable<masters[]> {
       return this.http.get<masters []>(this.link);
    }
    getFakemaster() {
        return this.mas;
    }
    getmasterById(id: number): Observable<masters> {
        return this.http.get<masters>( this.link + `/${id}`);
    }
    addmaster(actu: masters): Observable<any> {
        return this.http.post(this.link, actu);
    }
    deletemaster(id: number) {
        return this.http.delete(this.link + `/${id}` );
    }
    updatemaster(actu: masters) {
        console.log(actu);
        return this.http.put(this.link, actu);
    }*/
}

