/* tslint:disable */
import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {ActivatedRoute, Router} from '@angular/router';
import {AthleteService} from '@modules/frontpages/services';

import {athlete} from '../../models/athlete.model';
import {CompModel} from "@modules/frontpages/containers/competition-form/comp.model";
import {HttpClient} from "@angular/common/http";

@Component({
    selector: 'sb-athlete',
    templateUrl: './athlete.component.html',
    styleUrls: ['./athlete.component.scss'],
})
export class AthleteComponent implements OnInit {
    errorMessage = '';
    // @ts-ignore
    athleteForm: FormGroup;
    athle: athlete|undefined = new athlete();
    json: any;
    athleteId: any;
    path = 'http://localhost:3000/api/athlete';
    filespath = 'http://localhost:3000/uploads/';
    listAthletes: athlete[] = [];
    request = 'post';
    selectedFile: any;
    // formulaire: NgForm;
    constructor(private http: HttpClient, private route: ActivatedRoute) {
    }

    ngOnInit() {
        this.athleteForm = new FormGroup({
            numero: new FormControl('', Validators.required),
            nom: new FormControl('', Validators.required),
            prenom: new FormControl('', Validators.required),
            sexe: new FormControl('', Validators.required),
            ddn: new FormControl(null, Validators.required),
            lieu: new FormControl('', Validators.required),
            club: new FormControl('', Validators.required),
            clubetranger: new FormControl('', Validators.required),
            discipline1: new FormControl('', Validators.required),
            discipline2: new FormControl('', Validators.required),
            meilleurPerfo1: new FormControl('', Validators.required),
            meilleurPerfo2: new FormControl('', Validators.required),
            classe: new FormControl('', Validators.required),
            etablissement: new FormControl('', Validators.required),
            encadreurtech: new FormControl('', Validators.required),
            Npasseport: new FormControl('', Validators.required),
            validité: new FormControl('', Validators.required),
            telephone: new FormControl('', Validators.required),
            adremail: new FormControl('', Validators.required),
            adresse: new FormControl('', Validators.required),
            pointure: new FormControl('', Validators.required),
            file: new FormControl(null, Validators.required)
        });
        this.route.params
            .subscribe((data) => {
                this.athleteId = data.id;
                if (this.athleteId) {
                    this.http.get(this.path)
                        .subscribe(athletes => {
                            this.listAthletes = athletes as athlete [];
                            this.athle = this.listAthletes.find( element => element._id === this.athleteId);
                            console.log(this.athle);
                            if (this.athle) {
                                console.log(new Date(this.athle.ddn).toISOString().substring(0,10));
                                this.request = 'put';
                                const file = new File([""], this.filespath + this.athle.image);
                                this.athleteForm.setValue({
                                    file: file,
                                    numero: this.athle.numero,
                                    nom: this.athle.nom,
                                    prenom: this.athle.prenom,
                                    sexe: this.athle.sexe,
                                    ddn: new Date(this.athle.ddn).toISOString().substring(0,10),
                                    lieu: this.athle.lieu,
                                    club: this.athle.club,
                                    clubetranger: this.athle.clubetranger,
                                    discipline1: this.athle.discipline1,
                                    discipline2: this.athle.discipline2,
                                    meilleurPerfo1: this.athle.meilleurPerfo1,
                                    meilleurPerfo2: this.athle.meilleurPerfo2,
                                    classe: this.athle.classe,
                                    etablissement: this.athle.etablissement,
                                    encadreurtech: this.athle.encadreurtech,
                                    Npasseport: this.athle.Npasseport,
                                    validité: this.athle.validité,
                                    telephone: this.athle.telephone,
                                    adremail: this.athle.adremail,
                                    adresse: this.athle.adresse,
                                    pointure: this.athle.pointure
                                });
                            }
                            else {
                                this.athleteForm.setValue({
                                    file: null,
                                    numero: '',
                                    nom: '',
                                    prenom: '',
                                    sexe: 'Masculin',
                                    ddn: new Date().toISOString().substring(0,10),
                                    lieu: '',
                                    club: '',
                                    clubetranger: '',
                                    discipline1: '',
                                    discipline2: '',
                                    meilleurPerfo1: '',
                                    meilleurPerfo2: '',
                                    classe: '',
                                    etablissement: '',
                                    encadreurtech: '',
                                    Npasseport: '',
                                    validité: '',
                                    telephone: '',
                                    adremail: '',
                                    adresse: '',
                                    pointure: ''
                                });
                            }
                        })
                }
            });
    }

    onFileSelected({ event }: { event: any }) {
        this.selectedFile = event.target.files[0] as File;
        this.athleteForm.patchValue({ file: this.selectedFile });
        console.log(this.selectedFile.name);
    }

    onSubmit() {
        const fd = new FormData();
        console.log(fd.toString());
        if (this.selectedFile) {
            fd.append('file', this.selectedFile, this.selectedFile.name);
            fd.append('image', this.selectedFile.name);

        }
        if (this.request === 'put') {
            this.http.put(this.path + '/' + this.athleteId, fd)
                .subscribe(res => {
                    console.log(res);
                })
        } else {
            this.http.post(this.path, this.athleteForm.value, {
                reportProgress: true,
                observe: 'events'
            })
                .subscribe(res => {
                    console.log('sending');
                    console.log(res);
                });
            this.athleteForm.reset();
        }
    }
}
