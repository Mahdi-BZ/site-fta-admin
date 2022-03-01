import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, NgForm, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { record } from '@modules/frontpages/models';
import { RecordService } from '@modules/frontpages/services';

@Component({
    selector: 'sb-records',
    templateUrl: './records.component.html',
    styleUrls: ['./records.component.scss'],
})
export class RecordsComponent implements OnInit {
    errorMessage = '';
    // @ts-ignore
    recordForm: FormGroup;
    // @ts-ignore
    rec = new record();
    json: any;
    // @ts-ignore
    selectedFile: File = null;
    constructor(
        private recordService1: RecordService,
        private router: Router,
        private http: HttpClient
    ) {}

    ngOnInit() {
        this.recordForm = new FormGroup({
            idcompetition: new FormControl(null, Validators.required),
            categorie: new FormControl(null, Validators.required),
            Epr: new FormControl(null, Validators.required),
            Performance: new FormControl(null, Validators.required),
            nomprenom: new FormControl(null, Validators.required),
            age: new FormControl(null, Validators.required),
            date: new FormControl(null, Validators.required),
            lieu: new FormControl(null, Validators.required),
            file: new FormControl(null, { validators: [Validators.required] }),
        });
        this.recordForm.setValue({
            lieu: this.rec.lieu,
            date: this.rec.date,
            age: this.rec.age,
            nomprenom: this.rec.nomprenom,
            Performance: this.rec.Performance,
            Epr: this.rec.Epr,
            categorie: this.rec.categorie,
            idcompetition: this.rec.idcompetition,
        });
    }
    onFileSelected({ event }: { event: any }) {
        this.selectedFile = event.target.files[0] as File;
        this.recordForm.patchValue({ file: this.selectedFile });
        if (this.recordForm.get('file') !== null) {
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
        /*this.http
            .post('http://localhost:3000/api/documents', fd, {
                reportProgress: true,
                observe: 'events',
            })
            .subscribe(res => {
                console.log('sending');
                console.log(res);
            });*/
    }
    onSubmit() {
        this.json = JSON.stringify(this.recordForm.value);
        console.log(this.json);
        // this.http.put('http://localhost:3000/api/athlete/' +  this.athle.id, this.json, {
        //     headers: new HttpHeaders({
        //         'Content-Type': 'application/json'
        //     })
        // })
        //     .subscribe(responseData => {
        //         console.log(responseData);
        //     });
        this.recordForm.reset();
    }
    /*
     addrecord(formulaire: NgForm) {
        this.recordService1.addrecord(formulaire.value).subscribe(
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
