/* tslint:disable: ordered-imports*/
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

/* Modules */
import { AppCommonModule } from '@common/app-common.module';
import { NavigationModule } from '@modules/navigation/navigation.module';

/* Components */
import * as frontpagesComponents from './components';

/* Containers */
import * as frontpagesContainers from './containers';

/* Guards */
import * as frontpagesGuards from './guards';

/* Services */
import * as frontpagesServices from './services';
import { IconsModule, MDBBootstrapModule } from 'angular-bootstrap-md';
import { CompetitionFormComponent } from './containers/competition-form/competition-form.component';

@NgModule({
    imports: [
        CommonModule,
        RouterModule,
        ReactiveFormsModule,
        FormsModule,
        HttpClientModule,
        AppCommonModule,
        NavigationModule,
        IconsModule,
        MDBBootstrapModule,
    ],
    providers: [...frontpagesServices.services, ...frontpagesGuards.guards],
    declarations: [...frontpagesContainers.containers, ...frontpagesComponents.components, CompetitionFormComponent],
    exports: [...frontpagesContainers.containers, ...frontpagesComponents.components],
})
export class FrontpagesModule {}
