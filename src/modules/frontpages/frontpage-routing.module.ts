/* tslint:disable: ordered-imports*/
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SBRouteData } from '@modules/navigation/models';

/* Module */
import { FrontpagesModule } from './frontpages.module';

/* Containers */
import * as frontpagesContainers from './containers';

/* Guards */
import * as frontpagesGuards from './guards';
import {CompetitionFormComponent} from "@modules/frontpages/containers/competition-form/competition-form.component";
/* Routes */
export const ROUTES: Routes = [
    {
        path: '',
        pathMatch: 'full',
        redirectTo: 'home',
    },
    {
        path: 'calendrier',
        canActivate: [],
        component: frontpagesContainers.CalendrierComponent,
        data: {
            title: 'FTA - SB Admin Angular',
        } as SBRouteData,
    },
    {
        path: 'engagement-licence',
        canActivate: [],
        component: frontpagesContainers.EngagementLicenceComponent,
        data: {
            title: 'Engagements et licences - SB Admin Angular',
        } as SBRouteData,
    },
    {
        path: 'formation',
        canActivate: [],
        component: frontpagesContainers.FormationsComponent,
        data: {
            title: 'Formation - SB Admin Angular',
        } as SBRouteData,
    },
    {
        path: 'galerie',
        canActivate: [],
        component: frontpagesContainers.GalerieComponent,
        data: {
            title: 'Formation - SB Admin Angular',
        } as SBRouteData,
    },
    {
        path: 'actualite',
        canActivate: [],
        component: frontpagesContainers.ActualiteComponent,
        data: {
            title: 'ACTUALITE - SB Admin Angular',
        } as SBRouteData,
    },
    {
        path: 'minimas',
        canActivate: [],
        component: frontpagesContainers.MinimasComponent,
        data: {
            title: 'ACTUALITE - SB Admin Angular',
        } as SBRouteData,
    },
    {
        path: 'athle-sante',
        canActivate: [],
        component: frontpagesContainers.AthleSanteComponent,
        data: {
            title: 'Athlé-Santé - SB Admin Angular',
        } as SBRouteData,
    },
    {
        path: 'commissionfed',
        canActivate: [],
        component: frontpagesContainers.CommissionfedComponent,
        data: {
            title: ' - SB Admin Angular',
        } as SBRouteData,
    },
    {
        path: 'bureaufed',
        canActivate: [],
        component: frontpagesContainers.BureaufedComponent,
        data: {
            title: ' - SB Admin Angular',
        } as SBRouteData,
    },
    {
        path: 'ligue',
        canActivate: [],
        component: frontpagesContainers.LigueComponent,
        data: {
            title: ' - SB Admin Angular',
        } as SBRouteData,
    },
    {
        path: 'club',
        canActivate: [],
        component: frontpagesContainers.ClubComponent,
        data: {
            title: ' - SB Admin Angular',
        } as SBRouteData,
    },
    {
        path: 'centreformation',
        canActivate: [],
        component: frontpagesContainers.CentreformationComponent,
        data: {
            title: ' - SB Admin Angular',
        } as SBRouteData,
    },
    {
        path: 'document',
        canActivate: [],
        component: frontpagesContainers.DocumentComponent,
        data: {
            title: ' - SB Admin Angular',
        } as SBRouteData,
    },
    {
        path: 'liste_competition',
        canActivate: [],
        component: frontpagesContainers.ListecompetitionComponent,
        data: {
            title: 'home - SB Admin Angular',
        } as SBRouteData,
    },
    {
        path: 'competition',
        canActivate: [],
        component: frontpagesContainers.CompetitionComponent,
        data: {
            title: 'FTA - SB Admin Angular',
        } as SBRouteData,
    },
    {
        path: 'categorie',
        canActivate: [],
        component: frontpagesContainers.CategorieComponent,
        data: {
            title: ' - SB Admin Angular',
        } as SBRouteData,
    },
    {
        path: 'masters',
        canActivate: [],
        component: frontpagesContainers.MastersComponent,
        data: {
            title: ' - SB Admin Angular',
        } as SBRouteData,
    },
    {
        path: 'records',
        canActivate: [],
        component: frontpagesContainers.RecordsComponent,
        data: {
            title: 'Athlé-Santé - SB Admin Angular',
        } as SBRouteData,
    },
    {
        path: 'resultat',
        canActivate: [],
        component: frontpagesContainers.ResultatComponent,
        data: {
            title: 'Athlé-Santé - SB Admin Angular',
        } as SBRouteData,
    },
    {
        path: 'athlete',
        canActivate: [],
        component: frontpagesContainers.AthleteComponent,
        data: {
            title: 'Athlétes - SB Admin Angular',
        } as SBRouteData,
    },
    {
        path: 'athlemodif',
        canActivate: [],
        component: frontpagesContainers.AthletemodifComponent,
        data: {
            title: 'Athlétes - SB Admin Angular',
        } as SBRouteData,
    },
    {
        path: 'competition/form',
        canActivate: [],
        component: CompetitionFormComponent,
        data: {
            title: 'FTA - SB Admin Angular',
        } as SBRouteData,
    },
    {
        path: 'competition/form/:id',
        canActivate: [],
        component: CompetitionFormComponent,
        data: {
            title: 'FTA - SB Admin Angular',
        } as SBRouteData,
    },
    {
        path: 'athlete/:id',
        canActivate: [],
        component: frontpagesContainers.AthleteComponent,
        data: {
            title: 'Athlétes - SB Admin Angular',
        } as SBRouteData,
    }
];

@NgModule({
    imports: [FrontpagesModule, RouterModule.forChild(ROUTES)],
    exports: [RouterModule],
})
export class FrontpageRoutingModule {}
