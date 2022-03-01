import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, NgForm, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CommissionfedService } from '@modules/frontpages/services';
import { commissionfed } from '@modules/frontpages/models';

@Component({
    selector: 'sb-commissionfed',
    templateUrl: './commissionfed.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush,

    styleUrls: ['./commissionfed.component.scss'],
})
export class CommissionfedComponent implements OnInit {
    errorMessage = '';
    // @ts-ignore
    commissionForm: FormGroup;
    membre = new commissionfed();
    json: any;
    // formulaire: NgForm;
    constructor(private commissionfedService1: CommissionfedService, private router: Router) {}

    ngOnInit() {
        this.commissionForm = new FormGroup({
            idmembre: new FormControl(null, Validators.required),
            nom: new FormControl(null, Validators.required),
            president: new FormControl(null, Validators.required),
            email: new FormControl(null, Validators.required),

        });
        this.commissionForm.setValue({
            idmembre: this.membre.idmembre,
            nom: this.membre.nom,
            president: this.membre.president,
            email: this.membre.email,
        });
    }
    onSubmit() {
        this.json = JSON.stringify(this.commissionForm.value);
        console.log(this.json);
        // this.http.put('http://localhost:3000/api/athlete/' +  this.athle.id, this.json, {
        //     headers: new HttpHeaders({
        //         'Content-Type': 'application/json'
        //     })
        // })
        //     .subscribe(responseData => {
        //         console.log(responseData);
        //     });
        this.commissionForm.reset();
    }
    /*addmembre(formulaire: NgForm) {
        /*this.commissionfedService1.addcommissionfed(formulaire.value).subscribe(
            reponse => {
                const link = ['form'];
                this.router.navigate(link);
            },
            error => {
                this.errorMessage = 'Problème de connexion à votre serveur';
                console.log(error);
            }
        );
    }*/
}
