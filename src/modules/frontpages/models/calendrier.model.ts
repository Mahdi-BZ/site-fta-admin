export class calendrier {
    idcompetition: number;
    nom: string;
    organisateur: string;
    lieu: string;
    niveau: string;
    categorie: string;
    type: string;
    date: Date;

    constructor(
        idcompetition = 0,
        nom = '',
        organisateur = '',
        lieu = '',
        niveau = '',
        categorie = '',
        type = '',
        date: Date
    ) {
        this.idcompetition = idcompetition;
        this.categorie = categorie;
        this.date = date;
        this.lieu = lieu;
        this.niveau = niveau;
        this.nom = nom;
        this.organisateur = organisateur;
        this.type = type;
    }
}
