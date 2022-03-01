import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, NgForm, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { bureaufed } from '@modules/frontpages/models';
import { BureaufedService } from '@modules/frontpages/services';

@Component({
    selector: 'sb-bureaufed',
    templateUrl: './bureaufed.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush,

    styleUrls: ['./bureaufed.component.scss'],
})
export class BureaufedComponent implements OnInit {
    errorMessage = '';
    // @ts-ignore
    bureauFedForm: FormGroup;
    // @ts-ignore
    membre = new bureaufed();
    json: any;

    // formulaire: NgForm;
    constructor(private bureaufedService1: BureaufedService, private router: Router) {}

    ngOnInit() {
        this.bureauFedForm = new FormGroup({
            cin: new FormControl(null, Validators.required),
            nom: new FormControl(null, Validators.required),
            poste: new FormControl(null, Validators.required),
            email: new FormControl(null, Validators.required),
            ddn: new FormControl(null, Validators.required),
            tel: new FormControl(null, Validators.required),
        });
        this.bureauFedForm.setValue({
            cin: this.membre.cin,
            nom: this.membre.nom,
            poste: this.membre.poste,
            email: this.membre.email,
            ddn: this.membre.ddn,
            tel: this.membre.tel,
        });
    }
    onSubmit() {
        this.json = JSON.stringify(this.bureauFedForm.value);
        console.log(this.json);
        // this.http.put('http://localhost:3000/api//' +  this.athle.id, this.json, {
        //     headers: new HttpHeaders({
        //         'Content-Type': 'application/json'
        //     })
        // })
        //     .subscribe(responseData => {
        //         console.log(responseData);
        //     });
        this.bureauFedForm.reset();
    }
    /*addmembre(formulaire: NgForm) {
        /*this.bureaufedService1.addbureaufed(formulaire.value).subscribe(
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
