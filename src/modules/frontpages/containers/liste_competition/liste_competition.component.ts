import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, NgForm, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { competitions } from '@modules/frontpages/models';
import { CompetitionsService } from '@modules/frontpages/services';

@Component({
    selector: 'sb-listecompetition',
    templateUrl: './liste_competition.component.html',
    styleUrls: ['./liste_competition.component.scss'],
})
export class ListecompetitionComponent implements OnInit {
    errorMessage = '';
    // @ts-ignore
    compForm: FormGroup;
    competition = new competitions();
    json: any;
    // @ts-ignore
    selectedFile: File = null;
    constructor(
        private listecompetitionService1: CompetitionsService,
        private router: Router,
        private http: HttpClient
    ) {}

    ngOnInit() {
        this.compForm = new FormGroup({
            idcompetition: new FormControl(null, Validators.required),
            nom: new FormControl(null, Validators.required),
            organisateur: new FormControl(null, Validators.required),
            file: new FormControl(null, { validators: [Validators.required] }),
        });
        this.compForm.setValue({
            idcompetition: this.competition.idcompetition,
            nom: this.competition.nom,
            organisateur: this.competition.organisateur,
        });
    }
    onSubmit() {
        this.json = JSON.stringify(this.compForm.value);
        console.log(this.json);
        // this.http.put('http://localhost:3000/api/athlete/' +  this.athle.id, this.json, {
        //     headers: new HttpHeaders({
        //         'Content-Type': 'application/json'
        //     })
        // })
        //     .subscribe(responseData => {
        //         console.log(responseData);
        //     });
        this.compForm.reset();
    }
    onFileSelected({ event }: { event: any }) {
        this.selectedFile = event.target.files[0] as File;
        this.compForm.patchValue({ file: this.selectedFile });
        if (this.compForm.get('file') !== null) {
            // @ts-ignore
            this.actuForm.get('file').updateValueAndValidity();
        }
    }
    onUpload() {
        console.log(this.selectedFile.name);
        const fd = new FormData();
        fd.append('file', this.selectedFile, this.selectedFile.name);
        fd.append('name', this.selectedFile.name);
        console.log(fd);
        this.http
            .post('http://localhost:3000/api/documents', fd, {
                reportProgress: true,
                observe: 'events',
            })
            .subscribe(res => {
                console.log('sending');
                console.log(res);
            });
    }
}
