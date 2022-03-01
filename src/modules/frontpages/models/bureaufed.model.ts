export class bureaufed {
    cin: number;
    nom: string;
    poste: string;
    email: string;
    ddn: Date;
    tel: number;

    constructor(
        cin = 0,
        nom = '',
        poste = '',
        email = '',
        tel = 0,
        ddn : Date ,
    ) {
        this.cin = cin;
        this.nom = nom;
        this.poste = poste;
        this.email = email;
        this.ddn = ddn;
        this.tel = tel;

    }
}
