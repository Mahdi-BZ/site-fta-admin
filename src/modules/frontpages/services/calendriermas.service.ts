import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { calendriermasters} from '@modules/frontpages/models/calendriermasters.model';

@Injectable({
    providedIn: 'root',
})
export class CalendriermasService {
    /*private mas: calendriermasters [];
    link = 'http://localhost:3000/api/calendriermas';
    constructor(
        private http: HttpClient
    ) {
        this.mas = [
        new calendriermasters(1, 'souhir', '', '', 22-06-96),
        ];
    }
    getcalendriermas(): Observable<calendriermasters[]> {
       return this.http.get<calendriermasters []>(this.link);
    }
    getFakecalendriermass() {
        return this.mas;
    }
    getcalendriermasById(id: number): Observable<calendriermasters> {
        return this.http.get<calendriermasters>( this.link + `/${id}`);
    }
    addcalendriermas(actu: calendriermasters): Observable<any> {
        return this.http.post(this.link, actu);
    }
    deletecalendriermas(id: number) {
        return this.http.delete(this.link + `/${id}` );
    }
    updatecalendriermas(actu: calendriermasters) {
        console.log(actu);
        return this.http.put(this.link, actu);
    }*/
}

