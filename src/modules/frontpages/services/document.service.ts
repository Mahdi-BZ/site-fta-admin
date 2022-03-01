import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { document } from '../models/document.model';

@Injectable({
    providedIn: 'root',
})
export class DocumentService {
    /*private doc: document [];
    link = 'http://localhost:3000/api/document';
    constructor(
        private http: HttpClient
    ) {
        this.doc = [
        new document(1, 'souhir', '', ''),
        ];
    }
    getdocument(): Observable<document[]> {
       return this.http.get<document []>(this.link);
    }
    getFakedocument() {
        return this.doc;
    }
    getdocumentById(id: number): Observable<document> {
        return this.http.get<document>( this.link + `/${id}`);
    }
    adddocument(actu: document): Observable<any> {
        return this.http.post(this.link, actu);
    }
    deletedocument(id: number) {
        return this.http.delete(this.link + `/${id}` );
    }
    updatedocument(actu: document) {
        console.log(actu);
        return this.http.put(this.link, actu);
    }*/
}

