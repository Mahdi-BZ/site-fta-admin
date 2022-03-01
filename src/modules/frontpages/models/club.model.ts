export class club {
    idclub: number;
    name: string;
    gouvernorat: string;
    presidentsecretaireGenerale: string;
    mobilePresidentsecretaireGenerale: string;
    mobileClub: string;
    faxClub: string;
    adresse: string;
    img: string;

    constructor(
        idclub = 0,
        name = '',
        gouvernorat = '',
        presidentsecretaireGenerale = '',
        mobilePresidentsecretaireGenerale = '',
        mobileClub = '',
        faxClub = '',
        adresse = '',
        img = ''
    ) {
        this.idclub = idclub;
        this.name = name;
        this.gouvernorat = gouvernorat;
        this.presidentsecretaireGenerale = presidentsecretaireGenerale;
        this.mobilePresidentsecretaireGenerale = mobilePresidentsecretaireGenerale;
        this.mobileClub = mobileClub;
        this.faxClub = faxClub;
        this.adresse = adresse;
        this.img = img;
    }
}
