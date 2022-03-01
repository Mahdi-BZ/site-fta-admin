import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, NgForm, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { centre } from '@modules/frontpages/models';
import { CentreformationService } from '@modules/frontpages/services';

@Component({
    selector: 'sb-centre',
    templateUrl: './centreformation.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush,

    styleUrls: ['./centreformation.component.scss'],
})
export class CentreformationComponent implements OnInit {
    errorMessage = '';
    // @ts-ignore
    centreForm: FormGroup;
    centre = new centre();
    json: any;

    // formulaire: NgForm;
    constructor(private centreService1: CentreformationService, private router: Router) {}

    ngOnInit() {
        this.centreForm = new FormGroup({
            idcentre: new FormControl(null, Validators.required),
            name: new FormControl(null, Validators.required),
            athlete: new FormControl(null, Validators.required),
            category: new FormControl(null, Validators.required),
            club: new FormControl(null, Validators.required),
            directeur: new FormControl(null, Validators.required),
            tel: new FormControl(null, Validators.required),
            specialty: new FormControl(null, Validators.required),
        });
        this.centreForm.setValue({
            idcentre: this.centre.idcentre,
            name: this.centre.name,
            athlete: this.centre.athlete,
            category: this.centre.category,
            specialty: this.centre.specialty,
            club: this.centre.club,
            directeur: this.centre.directeur,
            tel: this.centre.tel,
        });
    }
    onSubmit() {
        this.json = JSON.stringify(this.centreForm.value);
        console.log(this.json);
        // this.http.put('http://localhost:3000/api/athlete/' +  this.athle.id, this.json, {
        //     headers: new HttpHeaders({
        //         'Content-Type': 'application/json'
        //     })
        // })
        //     .subscribe(responseData => {
        //         console.log(responseData);
        //     });
        this.centreForm.reset();
    }

    /*addcentre(formulaire: NgForm) {
        this.centreService1.addcentre(formulaire.value).subscribe(
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
