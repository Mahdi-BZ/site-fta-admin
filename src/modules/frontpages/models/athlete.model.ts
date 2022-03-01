export class Performances {
    Type: string;
    Perfor: Performance;

    constructor(Type = '', Perfor = new Performance(0, '', '', '')) {
        this.Type = Type;
        this.Perfor = Perfor;
    }
}

export class Performance {
    Annee: number;
    PERFORMANCE: string;
    PLACE: string;
    DATE: string;

    constructor(Annee = 2019, PERFORMANCE = '', PLACE = '', DATE = '') {
        this.Annee = Annee;
        this.DATE = DATE;
        this.PERFORMANCE = PERFORMANCE;
        this.PLACE = PLACE;
    }
}

export class athlete {
    _id: string = '';
    numero: string = '';
    nom: string = '';
    prenom: string = '';
    sexe: string = '';
    ddn: Date = new Date();
    lieu: string = '';
    club: string = '';
    clubetranger: string = '';
    discipline1: string = '';
    discipline2: string = '';
    meilleurPerfo1: string = '';
    meilleurPerfo2: string = '';
    classe: string = '';
    etablissement: string = '';
    encadreurtech: string = '';
    Npasseport: string = '';
    validité: string = '';
    telephone: string = '';
    adremail: string = '';
    adresse: string = '';
    pointure: string = '';
    // Performances: Performances = new Performances();
    PathPerformanceCopiePDF: string = '';
    image: string = '';

    constructor() {}
}
