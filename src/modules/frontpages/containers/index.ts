import { ActualiteComponent } from '@modules/frontpages/containers/actualite/actualite.component';
import { AthleSanteComponent } from '@modules/frontpages/containers/athle-sante/athle-sante.component';
import { AthleteComponent } from '@modules/frontpages/containers/athlete/athlete.component';
import { AthletemodifComponent } from '@modules/frontpages/containers/athletemodif/athletemodif.component';
import { BureaufedComponent } from '@modules/frontpages/containers/bureaufed/bureaufed.component';
import { CalendrierComponent } from '@modules/frontpages/containers/calendrier/calendrier.component';
import { CategorieComponent } from '@modules/frontpages/containers/categorie/categorie.component';
import { CentreformationComponent } from '@modules/frontpages/containers/centreformation/centreformation.component';
import { ClubComponent } from '@modules/frontpages/containers/club/club.component';
import { CommissionfedComponent } from '@modules/frontpages/containers/commissionfed/commissionfed.component';
import { CompetitionComponent } from '@modules/frontpages/containers/competition/competition.component';
import { DocumentComponent } from '@modules/frontpages/containers/documentadmi/documentadmi.component';
import { EngagementLicenceComponent } from '@modules/frontpages/containers/engagement-licence/engagement-licence.component';
import { FormationsComponent } from '@modules/frontpages/containers/formations/formations.component';
import { LigueComponent } from '@modules/frontpages/containers/ligue/ligue.component';
import { ListecompetitionComponent } from '@modules/frontpages/containers/liste_competition/liste_competition.component';
import { MastersComponent } from '@modules/frontpages/containers/masters/masters.component';
import { RecordsComponent } from '@modules/frontpages/containers/records/records.component';
import { ResultatComponent } from '@modules/frontpages/containers/resultat/resultat.component';
import { TestComponent } from '@modules/frontpages/containers/test/test.component';
import { GalerieComponent } from '@modules/frontpages/containers/galerie/galerie.component';
import { MinimasComponent } from '@modules/frontpages/containers/minimas/minimas.component';
import { UploadrecordComponent } from '@modules/frontpages/containers/uploadrecord/uploadrecord.component';
import { UploadresultComponent } from '@modules/frontpages/containers/uploadresult/uploadresult.component';

export const containers = [
    ActualiteComponent,
    AthleSanteComponent,
    EngagementLicenceComponent,
    FormationsComponent,
    CommissionfedComponent,
    BureaufedComponent,
    LigueComponent,
    ClubComponent,
    CentreformationComponent,
    DocumentComponent,
    CalendrierComponent,
    CategorieComponent,
    ListecompetitionComponent,
    MastersComponent,
    RecordsComponent,
    ResultatComponent,
    AthleteComponent,
    TestComponent,
    CompetitionComponent,
    AthletemodifComponent,
    GalerieComponent,
    MinimasComponent,
    UploadrecordComponent,
    UploadresultComponent,
];

export * from './actualite/actualite.component';
export * from './athle-sante/athle-sante.component';
export * from './engagement-licence/engagement-licence.component';
export * from './formations/formations.component';
export * from './commissionfed/commissionfed.component';
export * from './bureaufed/bureaufed.component';
export * from './ligue/ligue.component';
export * from './club/club.component';
export * from './centreformation/centreformation.component';
export * from './documentadmi/documentadmi.component';
export * from './calendrier/calendrier.component';
export * from './resultat/resultat.component';
export * from './records/records.component';
export * from './masters/masters.component';
export * from './liste_competition/liste_competition.component';
export * from './categorie/categorie.component';
export * from './athlete/athlete.component';
export * from './test/test.component';
export * from './competition/competition.component';
export * from './athletemodif/athletemodif.component';
export * from './galerie/galerie.component';
export * from './minimas/minimas.component';
export * from './uploadrecord/uploadrecord.component';
export * from './uploadresult/uploadresult.component';
