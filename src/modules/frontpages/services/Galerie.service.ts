import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Galerie } from '@modules/frontpages/models';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root',
})
export class GalerieService {
    private gl: Galerie[];
    // link = 'http://localhost:3000/api/';
    constructor(private http: HttpClient) {
        this.gl = [new Galerie()];
    }
    /*getGalerie(): Observable<Galerie[]> {
        return this.http.get<Galerie[]>(this.link);
    }
    getFakeGalerie() {
        return this.gl;
    }
    getGalerieById(id: number): Observable<Galerie> {
        return this.http.get<Galerie>(this.link + `/${id}`);
    }
    addGalerie(format: Galerie): Observable<any> {
        return this.http.post(this.link, format);
    }
    deleteGalerie(id: number) {
        return this.http.delete(this.link + `/${id}`);
    }
    updateGalerie(format: Galerie) {
        console.log(format);
        return this.http.put(this.link, format);
    }*/
}
