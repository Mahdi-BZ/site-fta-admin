export class calendriermasters {
    idcompetitionmas: number;
    competition: string;
    organisateur: string;
    lieu: string;
    date: Date;

    constructor(
        idcompetitionmas = 0,
        competition = '',
        organisateur = '',
        lieu = '',
        date: Date
    ) {
        this.idcompetitionmas = idcompetitionmas;
        this.date = date;
        this.lieu = lieu;
        this.competition = competition;
        this.organisateur = organisateur;}
}
