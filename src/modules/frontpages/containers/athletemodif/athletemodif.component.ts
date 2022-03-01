import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { athlete, Performance, Performances } from '@modules/frontpages/models';
import { AthleteService } from '@modules/frontpages/services';
import { HttpClient } from '@angular/common/http';

@Component({
    selector: 'sb-athletemodif',
    templateUrl: './athletemodif.component.html',
    styleUrls: ['./athletemodif.component.scss'],
})
export class AthletemodifComponent implements OnInit {

    path = 'http://localhost:3000/uploads/';
    reqUrl = 'http://localhost:3000/api/';
    // public Perfo = new Performances('', new Performance(0, '', '', ''));
    listAthletes: athlete[] = [];
    listFiltre: athlete[] = [];
    searchStr = '';

    constructor( private http: HttpClient, private AthleteService1: AthleteService, private router: Router) {}

    ngOnInit(): void {
        this.http.get(this.reqUrl + 'athlete')
            .subscribe(list => {
                this.listAthletes = list as athlete[];
                this.listFiltre = this.listAthletes;
            });
    }

    filtrer (str: string){
        this.searchStr = str;
        this.listFiltre = this.listAthletes.filter( e => e.nom.toLowerCase().includes(this.searchStr.toLowerCase()) );
        console.log(str);
        console.log(this.listFiltre);
    }

    onDelete(id: string) {
        this.http.delete(this.reqUrl + 'athlete/' + id)
            .subscribe(res => {
                console.log(res);
                this.http.get(this.reqUrl + 'athlete')
                    .subscribe(list => {
                        this.listAthletes = list as athlete[];
                        this.listFiltre = this.listAthletes;
                    });
            });
    }
}
