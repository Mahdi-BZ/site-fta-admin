import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, NgForm, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { masters } from '@modules/frontpages/models';
import { MastersService } from '@modules/frontpages/services';

@Component({
    selector: 'sb-masters',
    templateUrl: './masters.component.html',
    styleUrls: ['./masters.component.scss'],
})
export class MastersComponent implements OnInit {
    errorMessage = '';
    // @ts-ignore
    masterForm: FormGroup;
    master = new masters();
    json: any;
    // @ts-ignore
    selectedFile: File = null;
    constructor(
        private mastersService1: MastersService,
        private router: Router,
        private http: HttpClient
    ) {}

    ngOnInit() {
        this.masterForm = new FormGroup({
            idmas: new FormControl(null, Validators.required),
            description: new FormControl(null, Validators.required),
            nbrpatrtietr: new FormControl(null, Validators.required),
            nbrtotal: new FormControl(null, Validators.required),
            file: new FormControl(null, { validators: [Validators.required] }),
        });
        this.masterForm.setValue({
            idmas: this.master.idmas,
            description: this.master.description,
            nbrpatrtietr: this.master.nbrpatrtietr,
            nbrtotal: this.master.nbrtotal,
        });
    }
    onSubmit() {
        this.json = JSON.stringify(this.masterForm.value);
        console.log(this.json);
        // this.http.put('http://localhost:3000/api/athlete/' +  this.athle.id, this.json, {
        //     headers: new HttpHeaders({
        //         'Content-Type': 'application/json'
        //     })
        // })
        //     .subscribe(responseData => {
        //         console.log(responseData);
        //     });
        this.masterForm.reset();
    }
    onFileSelected({ event }: { event: any }) {
        this.selectedFile = event.target.files[0] as File;
        this.masterForm.patchValue({ file: this.selectedFile });
        if (this.masterForm.get('file') !== null) {
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
