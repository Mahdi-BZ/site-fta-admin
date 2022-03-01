import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, NgForm, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LigueService } from '@modules/frontpages/services';
import { ligue } from '@modules/frontpages/models';

@Component({
    selector: 'sb-ligue',
    templateUrl: './ligue.component.html',
    styleUrls: ['./Ligue.component.scss'],
})
export class LigueComponent implements OnInit {
    errorMessage = '';
    // @ts-ignore
    ligueForm: FormGroup;
    ligue = new ligue();
    json: any;
    constructor(private LigueService1: LigueService, private router: Router) {}

    ngOnInit() {
        this.ligueForm = new FormGroup({
            idligue: new FormControl(null, Validators.required),
            nomligue: new FormControl(null, Validators.required),
            fax: new FormControl(null, Validators.required),
            email: new FormControl(null, Validators.required),
            fb: new FormControl(null, Validators.required),
            tel: new FormControl(null, Validators.required),

        });
        this.ligueForm.setValue({
            idligue: this.ligue.idligue,
            nomligue: this.ligue.nomligue,
            fax: this.ligue.fax,
            email: this.ligue.email,
            fb: this.ligue.fb,
            tel: this.ligue.tel,
        });
    }
    onSubmit() {
        this.json = JSON.stringify(this.ligueForm.value);
        console.log(this.json);
        // this.http.put('http://localhost:3000/api/athlete/' +  this.athle.id, this.json, {
        //     headers: new HttpHeaders({
        //         'Content-Type': 'application/json'
        //     })
        // })
        //     .subscribe(responseData => {
        //         console.log(responseData);
        //     });
        this.ligueForm.reset();
    }
    /*addLigue(formulaire: NgForm) {
        /*this.LigueService1.addLigue(formulaire.value).subscribe(
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
