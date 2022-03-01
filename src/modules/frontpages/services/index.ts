import { actualiteService } from '@modules/frontpages/services/actualite.service';
import { athlesanteService } from '@modules/frontpages/services/athlesante.service';
import { AthleteService } from '@modules/frontpages/services/athlete.service';
import { BureaufedService } from '@modules/frontpages/services/bureaufed.service';
import { CalendrierService } from '@modules/frontpages/services/calendrier.service';
import { CalendriermasService } from '@modules/frontpages/services/calendriermas.service';
import { CategorieService } from '@modules/frontpages/services/categorie.service';
import { CentreformationService } from '@modules/frontpages/services/centreformation.service';
import { ClubService } from '@modules/frontpages/services/club.service';
import { CommissionfedService } from '@modules/frontpages/services/commissionfed.service';
import { CompetitionsService } from '@modules/frontpages/services/competitions.service';
import { DocumentService } from '@modules/frontpages/services/document.service';
import { formationService } from '@modules/frontpages/services/formation.service';
import { FrontpagesService } from '@modules/frontpages/services/frontpages.service';
import { LigueService } from '@modules/frontpages/services/ligue.service';
import { MastersService } from '@modules/frontpages/services/masters.service';
import { RecordService } from '@modules/frontpages/services/record.service';
import { ResultatService } from '@modules/frontpages/services/resultat.service';
import { GalerieService } from '@modules/frontpages/services/Galerie.service';

export const services = [
    FrontpagesService,
    athlesanteService,
    actualiteService,
    formationService,
    CommissionfedService,
    BureaufedService,
    LigueService,
    ClubService,
    CentreformationService,
    DocumentService,
    CalendrierService,
    CalendriermasService,
    CategorieService,
    CompetitionsService,
    GalerieService,
    MastersService,
    RecordService,
    ResultatService,
    AthleteService,
];

export * from './frontpages.service';
export * from './actualite.service';
export * from './athlesante.service';
export * from './formation.service';
export * from './commissionfed.service';
export * from './bureaufed.service';
export * from './ligue.service';
export * from './club.service';
export * from './centreformation.service';
export * from './document.service';
export * from './calendrier.service';
export * from './calendriermas.service';
export * from './categorie.service';
export * from './competitions.service';
export * from './masters.service';
export * from './record.service';
export * from './resultat.service';
export * from './athlete.service';
export * from './Galerie.service';
