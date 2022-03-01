import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { club } from '../models/club.model';

@Injectable({
    providedIn: 'root',
})
export class ClubService {
    /*private act: club [];
    link = 'http://localhost:3000/api/club';
    constructor(
        private http: HttpClient
    ) {
        this.act = [
        new club(1, 'souhir', 22-06-96, '', '', ''),
        ];
    }
    getclub(): Observable<club[]> {
       return this.http.get<club []>(this.link);
    }
    getFakeclub() {
        return this.act;
    }
    getclubById(id: number): Observable<club> {
        return this.http.get<club>( this.link + `/${id}`);
    }
    addclub(actu: club): Observable<any> {
        return this.http.post(this.link, actu);
    }
    deleteclub(id: number) {
        return this.http.delete(this.link + `/${id}` );
    }
    updateclub(actu: club) {
        console.log(actu);
        return this.http.put(this.link, actu);
    }*/
}

