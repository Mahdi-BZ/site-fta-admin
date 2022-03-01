import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { centre } from '../models/centreformation.model';

@Injectable({
    providedIn: 'root',
})
export class CentreformationService {
    /*private act: centre [];
    link = 'http://localhost:3000/api/centre';
    constructor(
        private http: HttpClient
    ) {
        this.act = [
        new centre(1, 'souhir', 22-06-96, '', '', ''),
        ];
    }
    getcentre(): Observable<centre[]> {
       return this.http.get<centre []>(this.link);
    }
    getFakecentre() {
        return this.act;
    }
    getcentreById(id: number): Observable<centre> {
        return this.http.get<centre>( this.link + `/${id}`);
    }
    addcentre(actu: centre): Observable<any> {
        return this.http.post(this.link, actu);
    }
    deletecentre(id: number) {
        return this.http.delete(this.link + `/${id}` );
    }
    updatecentre(actu: centre) {
        console.log(actu);
        return this.http.put(this.link, actu);
    }*/
}

