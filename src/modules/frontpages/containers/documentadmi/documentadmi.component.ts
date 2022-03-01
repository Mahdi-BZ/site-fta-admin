import { HttpClient } from '@angular/common/http';
import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, NgForm, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { document } from '@modules/frontpages/models';
import { DocumentService } from '@modules/frontpages/services/document.service';

@Component({
    selector: 'sb-documents',
    templateUrl: './documentadmi.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush,

    styleUrls: ['./documentadmi.component.scss'],
})
export class DocumentComponent implements OnInit {
    errorMessage = '';
    // @ts-ignore
    docForm: FormGroup;
    doc = new document();
    // @ts-ignore
    selectedFile: File = null;
    json: any;
    constructor(
        private documentService1: DocumentService,
        private router: Router,
        private http: HttpClient
    ) {}

    ngOnInit() {
        this.docForm = new FormGroup({
            iddoc: new FormControl(null, Validators.required),
            pathdoc: new FormControl(null, Validators.required),
            typedoc: new FormControl(null, Validators.required),
            file: new FormControl(null, { validators: [Validators.required] }),
        });
        this.docForm.setValue({
            iddoc: this.doc.iddoc,
            pathdoc: this.doc.pathdoc,
            typedoc: this.doc.typedoc,
        });
    }
    onSubmit() {
        this.json = JSON.stringify(this.docForm.value);
        console.log(this.json);
        // this.http.put('http://localhost:3000/api/athlete/' +  this.athle.id, this.json, {
        //     headers: new HttpHeaders({
        //         'Content-Type': 'application/json'
        //     })
        // })
        //     .subscribe(responseData => {
        //         console.log(responseData);
        //     });
        this.docForm.reset();
    }
    addDocument(formulaire: NgForm) {
        /*this.documentService1.addDocument(formulaire.value).subscribe(
            reponse => {
                const link = ['form'];
                this.router.navigate(link);
            },
            error => {
                this.errorMessage = 'Problème de connexion à votre serveur';
                console.log(error);
            }
        );*/
    }
    onFileSelected({ event }: { event: any }) {
        this.selectedFile = event.target.files[0] as File;
        this.docForm.patchValue({ file: this.selectedFile });
        if (this.docForm.get('file') !== null) {
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
}
