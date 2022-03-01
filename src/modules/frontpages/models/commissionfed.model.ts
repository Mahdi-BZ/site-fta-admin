export class commissionfed {
    idmembre: number;
    nom: string;
    president: string;
    email: string;

    constructor(
        idmembre = 0,
        nom = '',
        president = '',
        email = ''
    ) {
        this.idmembre = idmembre;
        this.nom = nom;
        this.email = email;
        this.president = president;
    }
}
