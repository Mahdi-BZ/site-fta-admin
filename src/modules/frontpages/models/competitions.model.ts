export class competitions {
    idcompetition: number;
    nom: string;
    organisateur: string;

    constructor(
        idcompetition = 0,
        nom = '',
        organisateur = '',
    ) {
        this.idcompetition = idcompetition;
        this.nom = nom;
        this.organisateur = organisateur;
    }
}
