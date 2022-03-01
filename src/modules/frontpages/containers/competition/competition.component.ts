import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
    selector: 'sb-competition',
    templateUrl: './competition.component.html',
    styleUrls: ['./competition.component.scss']
})
export class CompetitionComponent implements OnInit {
    errorMessage = '';
    // @ts-ignore
    compForm: FormGroup;
    // @ts-ignore
    selectedFile: File = null;
    competitions = [];
    path = 'http://localhost:3000/uploads/';
    reqUrl = 'http://localhost:3000/api/';

    constructor(private http: HttpClient, public sanitizer: DomSanitizer) {
    }

    ngOnInit(): void {
        this.http.get(this.reqUrl + 'competition')
            .subscribe(comp => {
                this.competitions = comp as [];
            });
    }

    onDelete(id: string) {
        this.http.delete(this.reqUrl + 'competition/' + id)
            .subscribe(res => {
                console.log(res);
                this.http.get(this.reqUrl + 'competition')
                    .subscribe(comp => {
                        this.competitions = comp as [];
                    });
            });
    }
}
