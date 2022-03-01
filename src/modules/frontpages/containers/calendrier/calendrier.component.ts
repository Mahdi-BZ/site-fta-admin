import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, NgForm, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { calendrier } from '@modules/frontpages/models';
import { CalendrierService } from '@modules/frontpages/services/calendrier.service';
@Component({
    selector: 'sb-calendrier',
    templateUrl: './calendrier.component.html',
    styleUrls: ['./calendrier.component.scss'],
})
export class CalendrierComponent implements OnInit {
    errorMessage = '';
    // @ts-ignore
    calendrierForm: FormGroup;
    // @ts-ignore
    cal = new calendrier();
    json: any;

    constructor(private calendrierService1: CalendrierService, private router: Router) {}
    ngOnInit() {
        this.calendrierForm = new FormGroup({
            idcompetition: new FormControl(null, Validators.required),
            nom: new FormControl(null, Validators.required),
            organisateur: new FormControl(null, Validators.required),
            lieu: new FormControl(null, Validators.required),
            niveau: new FormControl(null, Validators.required),
            categorie: new FormControl(null, Validators.required),
            type: new FormControl(null, Validators.required),
            date: new FormControl(null, Validators.required),
        });
        this.cal.idcompetition = 0;
        this.calendrierForm.setValue({
            idcompetition: this.cal.idcompetition,
            nom: this.cal.nom,
            organisateur: this.cal.organisateur,
            lieu: this.cal.lieu,
            niveau: this.cal.niveau,
            categorie: this.cal.categorie,
            type: this.cal.type,
            date: this.cal.date,
        });
    }
    onSubmit() {
        this.json = JSON.stringify(this.calendrierForm.value);
        console.log(this.json);
        // this.http.put('http://localhost:3000/api/athlete/' +  this.athle.id, this.json, {
        //     headers: new HttpHeaders({
        //         'Content-Type': 'application/json'
        //     })
        // })
        //     .subscribe(responseData => {
        //         console.log(responseData);
        //     });
        this.calendrierForm.reset();
    }
    /*
    addcompetition(formulaire: NgForm) {
        /*this.calendrierService1.addcalendrier(formulaire.value).subscribe(
            reponse => {
                const link = ['ath'];
                this.router.navigate(link);
            },
            error => {
                this.errorMessage = 'Problème de connexion à votre serveur';
                console.log(error);
            }
        );
    }*/
}
