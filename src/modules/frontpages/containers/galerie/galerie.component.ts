import { Component, OnInit } from '@angular/core';
import { Galerie } from '@modules/frontpages/models/galerie.model';

@Component({
    selector: 'sb-galerie',
    templateUrl: './galerie.component.html',
    styleUrls: ['./galerie.component.scss'],
})
export class GalerieComponent implements OnInit {
    public Galerie = new Galerie();

    dataarray = [];
    constructor() {}

    ngOnInit() {
        this.Galerie = new Galerie();
        // @ts-ignore
        this.dataarray.push(this.Galerie);
    }
    addForm() {
        this.Galerie = new Galerie();
        const { Galerie: Galerie1 } = this as any;
        // @ts-ignore
        this.dataarray.push(Galerie1);
    }
    removeForm(index: number){
        this.dataarray.splice(index);
    }
    onsubmit() {
        console.log(this.dataarray);
    }
}
