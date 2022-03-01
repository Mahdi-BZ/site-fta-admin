export class categorie {
    idcat: number;
    organisme: string;
    cat: string;
    anneenaissance: Date;

    constructor(
        idcat = 0,
        organisme = '',
        cat = '',
        anneenaissance: Date
    ) {
        this.idcat = idcat;
        this.cat = cat;
        this.anneenaissance = anneenaissance;
        this.organisme = organisme;
    }
}
