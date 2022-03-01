export class centre {
    idcentre: number;
    name: string;
    athlete: string;
    category: string;
    specialty: string;
    club: string;
    directeur: string;
    tel: string;

    constructor(
        idcentre = 0,
        name = '',
        athlete = '',
        category = '',
        specialty = '',
        club = '',
        directeur = '',
        tel = ''
    ) {
        this.idcentre = idcentre;
        this.name = name;
        this.athlete = athlete;
        this.category = category;
        this.specialty = specialty;
        this.club = club;
        this.directeur = directeur;
        this.tel = tel;
    }
}

