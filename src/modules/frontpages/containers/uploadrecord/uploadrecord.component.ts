import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
    selector: 'sb-uploadrecord',
    templateUrl: './uploadrecord.component.html',
    styleUrls: ['./uploadrecord.component.scss'],
})
export class UploadrecordComponent implements OnInit {
    // @ts-ignore
    selectedFile: File = null;
    // @ts-ignore
    recForm: FormGroup;
    constructor(private http: HttpClient) {}

    ngOnInit(): void {
        this.recForm = new FormGroup({
            file: new FormControl(null, { validators: [Validators.required] }),
        });
    }
    onFileSelected({ event }: { event: any }) {
        this.selectedFile = event.target.files[0] as File;
        this.recForm.patchValue({ file: this.selectedFile });
        if (this.recForm.get('file') !== null) {
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
