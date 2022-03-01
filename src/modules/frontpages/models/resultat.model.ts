export class resultat {
    idcompetition: number;
    nom: string;
    date: Date;
    lieu: string;
    constructor(
        idcompetition = 0,
        nom = '',
        date: 22_06_96,
        lieu = ''
    ) {
        this.idcompetition = idcompetition;
        this.nom = nom;
        // @ts-ignore
        this.date = date;
        this.lieu = lieu;
    }
}
