import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { record } from '../models/record.model';

@Injectable({
    providedIn: 'root',
})
export class RecordService {
    /*private rec: record [];
    link = 'http://localhost:3000/api/record';
    constructor(
        private http: HttpClient
    ) {
        this.rec = [
        new record(1, 'souhir', '','', '', 23, 22_06_96),
        ];
    }
    getrecord(): Observable<record[]> {
       return this.http.get<record []>(this.link);
    }
    getFakerecord() {
        return this.rec;
    }
    getrecordById(id: number): Observable<record> {
        return this.http.get<record>( this.link + `/${id}`);
    }
    addrecord(actu: record): Observable<any> {
        return this.http.post(this.link, actu);
    }
    deleterecord(id: number) {
        return this.http.delete(this.link + `/${id}` );
    }
    updaterecord(actu: record) {
        console.log(actu);
        return this.http.put(this.link, actu);
    }*/
}

