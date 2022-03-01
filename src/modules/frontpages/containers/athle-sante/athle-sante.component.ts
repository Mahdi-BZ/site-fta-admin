import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, NgForm, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { athlesante } from '@modules/frontpages/models';
import { athlesanteService } from '@modules/frontpages/services/athlesante.service';

@Component({
    selector: 'sb-athle-sante',
    templateUrl: './athle-sante.component.html',
    styleUrls: ['./athle-sante.component.scss'],
})
export class AthleSanteComponent implements OnInit {
    errorMessage = '';
    // @ts-ignore
    athlesanteForm: FormGroup;
    athles = new athlesante();
    json: any;
    // @ts-ignore
    selectedFile: File = null;
    constructor(
        private athlesanteService1: athlesanteService,
        private router: Router,
        private http: HttpClient
    ) {}

    ngOnInit() {
        this.athlesanteForm = new FormGroup({
            id: new FormControl(null, Validators.required),
            description: new FormControl(null, Validators.required),
            programme: new FormControl(null, Validators.required),
            file: new FormControl(null, { validators: [Validators.required] }),
        });
        this.athles.id = 0;
        this.athlesanteForm.setValue({
            id: this.athles.id,
            description: this.athles.description,
            programme: this.athles.programme,
        });
    }
    onFileSelected({ event }: { event: any }) {
        this.selectedFile = event.target.files[0] as File;
        this.athlesanteForm.patchValue({ file: this.selectedFile });
        if (this.athlesanteForm.get('file') !== null) {
            // @ts-ignore
            this.athlesanteForm.get('file').updateValueAndValidity();
        }
    }
    onUpload() {
        console.log(this.selectedFile.name);
        const fd = new FormData();
        fd.append('file', this.selectedFile, this.selectedFile.name);
        fd.append('name', this.selectedFile.name);
        console.log(fd);
       /* this.http
            .post('http://localhost:3000/api/documents', fd, {
                reportProgress: true,
                observe: 'events',
            })
            .subscribe(res => {
                console.log('sending');
                console.log(res);
            });
            */
    }
}
