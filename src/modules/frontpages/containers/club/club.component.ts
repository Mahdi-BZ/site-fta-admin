import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, NgForm, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { club } from '@modules/frontpages/models';
import { ClubService } from '@modules/frontpages/services';

@Component({
    selector: 'sb-club',
    templateUrl: './club.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush,

    styleUrls: ['./club.component.scss'],
})
export class ClubComponent implements OnInit {
    errorMessage = '';
    // @ts-ignore
    clubForm: FormGroup;
    club = new club();
    json: any;

    // formulaire: NgForm;
    constructor(private clubService1: ClubService, private router: Router) {}

    ngOnInit() {
        this.clubForm = new FormGroup({
            idclub: new FormControl(null, Validators.required),
            name: new FormControl(null, Validators.required),
            gouvernorat: new FormControl(null, Validators.required),
            presidentsecretaireGenerale: new FormControl(null, Validators.required),
            mobilePresidentsecretaireGenerale: new FormControl(null, Validators.required),
            mobileClub: new FormControl(null, Validators.required),
            faxClub: new FormControl(null, Validators.required),
            adresse: new FormControl(null, Validators.required),
            img: new FormControl(null, Validators.required),
        });
        this.clubForm.setValue({
            idclub: this.club.idclub,
            name: this.club.name,
            gouvernorat: this.club.gouvernorat,
            presidentsecretaireGenerale: this.club.presidentsecretaireGenerale,
            mobilePresidentsecretaireGenerale: this.club.mobilePresidentsecretaireGenerale,
            mobileClub: this.club.mobileClub,
            faxClub: this.club.faxClub,
            img: this.club.img,
            adresse: this.club.adresse,
        });
    }
    onSubmit() {
        this.json = JSON.stringify(this.clubForm.value);
        console.log(this.json);
        // this.http.put('http://localhost:3000/api/athlete/' +  this.athle.id, this.json, {
        //     headers: new HttpHeaders({
        //         'Content-Type': 'application/json'
        //     })
        // })
        //     .subscribe(responseData => {
        //         console.log(responseData);
        //     });
        this.clubForm.reset();
    }
    /*addclub(formulaire: NgForm) {
        /*this.clubService1.addclub(formulaire.value).subscribe(
            reponse => {
                const link = ['form'];
                this.router.navigate(link);
            },
            error => {
                this.errorMessage = 'Problème de connexion à votre serveur';
                console.log(error);
            }
        );
    }
    onFileChange(event) {
        const reader = new FileReader();

        if(event.target.files && event.target.files.length) {
            const [file] = event.target.files;
            reader.readAsDataURL(file);

            reader.onload = () => {
                this.formulaire.patchValue({
                    // tslint:disable-next-line:prettier
                    file: reader.result;
            });

                // need to run CD since file load runs outside of zone
                this.cd.markForCheck();
            };
        }*/
}
