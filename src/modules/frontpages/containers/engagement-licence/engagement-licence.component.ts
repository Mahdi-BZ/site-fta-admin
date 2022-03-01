import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
    selector: 'sb-engagement-licence',
    templateUrl: './engagement-licence.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush,
    styleUrls: ['./engagement-licence.component.scss'],
})
export class EngagementLicenceComponent implements OnInit {
    constructor() {}

    ngOnInit(): void {}
}
