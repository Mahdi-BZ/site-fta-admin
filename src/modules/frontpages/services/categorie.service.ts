import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { categorie } from '../models/categorie.model';

@Injectable({
    providedIn: 'root',
})
export class CategorieService {
    /*private cat: categorie [];
    link = 'http://localhost:3000/api/categorie';
    constructor(
        private http: HttpClient
    ) {
        this.cat = [
        new categorie(1, 'souhir', '', 22-06-96),
        ];
    }
    getcategorie(): Observable<categorie[]> {
       return this.http.get<categorie []>(this.link);
    }
    getFakecategorie() {
        return this.cat;
    }
    getcategorieById(id: number): Observable<categorie> {
        return this.http.get<categorie>( this.link + `/${id}`);
    }
    addcategorie(actu: categorie): Observable<any> {
        return this.http.post(this.link, actu);
    }
    deletecategorie(id: number) {
        return this.http.delete(this.link + `/${id}` );
    }
    updatecategorie(actu: categorie) {
        console.log(actu);
        return this.http.put(this.link, actu);
    }*/
}

