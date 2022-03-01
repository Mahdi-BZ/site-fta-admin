import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, NgForm, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { formationService } from '@modules/frontpages/services/formation.service';
import { formation } from '@modules/frontpages/models';

@Component({
    selector: 'sb-formations',
    templateUrl: './formations.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush,

    styleUrls: ['./formations.component.scss'],
})
export class FormationsComponent implements OnInit {
    errorMessage = '';
    // @ts-ignore
    formationForm: FormGroup;
    // @ts-ignore
    selectedFile: File = null;
    json: any;
    constructor() {
    }
    ngOnInit(): void {
    }

    onFileSelected({ event }: { event: any }) {
        this.selectedFile = event.target.files[0] as File;
    }
    onUpload() {
        const fd = new FormData();
        fd.append('file', this.selectedFile, this.selectedFile.name);
        /* this.http.post('', fd).subscribe(res => {
             console.log(res);
         });*/
    }
    onSubmit() {
        this.json = JSON.stringify(this.formationForm.value);
        console.log(this.json);
        // this.http.put('http://localhost:3000/api/athlete/' +  this.athle.id, this.json, {
        //     headers: new HttpHeaders({
        //         'Content-Type': 'application/json'
        //     })
        // })
        //     .subscribe(responseData => {
        //         console.log(responseData);
        //     });
        this.formationForm.reset();
    }
}
