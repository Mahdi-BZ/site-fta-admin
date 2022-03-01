import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, NgForm, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CategorieService } from '@modules/frontpages/services/categorie.service';

@Component({
    selector: 'sb-categorie',
    templateUrl: './categorie.component.html',
    styleUrls: ['./categorie.component.scss'],
})
export class CategorieComponent implements OnInit {
    // @ts-ignore
    catForm: FormGroup;
    // @ts-ignore
    selectedFile: File = null;
    constructor() {}

    ngOnInit() {
        this.catForm = new FormGroup({
            file: new FormControl(null, { validators: [Validators.required] }),
        });
    }
    onFileSelected({ event }: { event: any }) {
        this.selectedFile = event.target.files[0] as File;
        this.catForm.patchValue({ file: this.selectedFile });
        if (this.catForm.get('file') !== null) {
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
