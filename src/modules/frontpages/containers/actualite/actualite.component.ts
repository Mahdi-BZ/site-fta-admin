/* tslint:disable */
import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {HttpClient} from "@angular/common/http";

@Component({
    selector: 'sb-actualite',
    templateUrl: './actualite.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush,
    styleUrls: ['./actualite.component.scss'],
})
export class ActualiteComponent implements OnInit {
    // error: string;
    // @ts-ignore
    uploadResponse = {status: '', message: '', filePath: ''};

    errorMessage = '';
    // @ts-ignore
    actuForm: FormGroup;
    // @ts-ignore
    selectedFile: File = null;

    constructor(private http: HttpClient) {
    }

    ngOnInit(): void {
        this.actuForm = new FormGroup({
            file: new FormControl(null, {validators: [Validators.required]})
        })
    }

    onFileSelected({event}: { event: any }) {
        this.selectedFile = event.target.files[0] as File;
        this.actuForm.patchValue({file: this.selectedFile});
    //     if (this.actuForm.get('file') !== null){
    //     this.actuForm.get('file').updateValueAndValidity();
    // }

    }

    onUpload() {
        const fd = new FormData();
        fd.append('file', this.selectedFile, this.selectedFile.name);
        fd.append('name', this.selectedFile.name);
        console.log(fd);
        this.http.post('http://localhost:3000/api/documents', fd, {
            reportProgress: true,
            observe: 'events'
        })
            .subscribe(res => {
                console.log('sending');
                console.log(res);
            });
    }
}
