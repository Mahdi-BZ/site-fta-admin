/* tslint:disable */
import {Component, OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {ActivatedRoute} from "@angular/router";
import {CompModel} from "@modules/frontpages/containers/competition-form/comp.model";

@Component({
    selector: 'sb-competition-form',
    templateUrl: './competition-form.component.html',
    styleUrls: ['./competition-form.component.scss']
})
export class CompetitionFormComponent implements OnInit {

    form: any;
    selectedFile: any;
    selectedFile1: any;
    path = 'http://localhost:3000/api/competition';
    compId: any;
    request = 'post';
    json: any;
    filespath = 'http://localhost:3000/uploads/';
    competition: CompModel|undefined = new CompModel();
    allcomps: CompModel [] = [];

    constructor(private http: HttpClient, private route: ActivatedRoute) {
    }

    ngOnInit(): void {
        this.form = new FormGroup({
            name: new FormControl('name', Validators.required),
            file: new FormControl(null, Validators.required),
            file_image: new FormControl(null, Validators.required)
        });
        this.route.params
            .subscribe((data) => {
                this.compId = data.id;
                if (this.compId) {
                    this.http.get(this.path)
                        .subscribe(comps => {
                            console.log(comps);
                            this.allcomps = comps as CompModel [];
                            this.competition = this.allcomps.find( element => element._id === this.compId);
                            console.log(this.competition);
                            if (this.competition) {
                                const file = new File([""], this.filespath + this.competition.file_name);
                                const file1 = new File([""], this.filespath + this.competition.image);
                                this.form.setValue({
                                    name: this.competition.name,
                                    file: file,
                                    file_image: file1
                                });
                            }
                            this.request = 'put';
                        })

                }
            });
    }

    onFileSelected({event}: { event: any }) {
        this.selectedFile = event.target.files[0] as File;
        console.log(this.selectedFile);
        this.form.patchValue({file: this.selectedFile});
    }

    onImageSelected({event}: { event: any }) {
        this.selectedFile1 = event.target.files[0] as File;
        this.form.patchValue({file_image: this.selectedFile1});
    }

    onUpload() {
        const fd = new FormData();
        if (this.selectedFile) {
            fd.append('uploads[]', this.selectedFile, this.selectedFile.name);
            fd.append('file_name', this.selectedFile.name);
        }
        if (this.selectedFile1) {
            fd.append('uploads[]', this.selectedFile1, this.selectedFile1.name);
            fd.append('image', this.selectedFile1.name);
        }
        if (this.request === 'put') {
            fd.append('name', this.form.controls['name'].value);
            this.http.put(this.path + '/' + this.compId, fd)
                .subscribe(res => {
                    console.log(res);
                })
        } else {
            console.log(fd.toString());
            this.http.post(this.path, fd, {
                reportProgress: true,
                observe: 'events'
            })
                .subscribe(res => {
                    console.log('sending');
                    console.log(res);
                });
            this.form.reset();
        }
    }
}
