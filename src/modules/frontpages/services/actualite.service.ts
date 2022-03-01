import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';


@Injectable({
    providedIn: 'root',
})
export class actualiteService {
    /* private act: actualite [];
    link = 'http://localhost:3000/api/actualite';
    constructor(
        private http: HttpClient
    ) {
        this.act = [
        new actualite(1, 'souhir', 22-06-96, '', '', ''),
        ];
    }
    getactualite(): Observable<actualite[]> {
       return this.http.get<actualite []>(this.link);
    }
    getFakeactualite() {
        return this.act;
    }
    getactualiteById(id: number): Observable<actualite> {
        return this.http.get<actualite>( this.link + `/${id}`);
    }
    addactualite(actu: actualite): Observable<any> {
        return this.http.post(this.link, actu);
    }
    deleteactualite(id: number) {
        return this.http.delete(this.link + `/${id}` );
    }
    updateactualite(actu: actualite) {
        console.log(actu);
        return this.http.put(this.link, actu);
    }*/
}

