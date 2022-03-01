export class record {
    idcompetition: number;
    categorie: string;
    Epr: string;
    Performance: string;
    nomprenom: string;
    age: number;
    date: Date;
    lieu: string;
    constructor(
        idcompetition = 0,
        categorie = '',
        Epr = '',
        Performance = '',
        nomprenom = '',
        age = 0,
        date: 22_06_96,
        lieu = ''
    ) {
        this.idcompetition = idcompetition;
        this.categorie = categorie;
        this.Epr = Epr;
        this.Performance = Performance;
        this.nomprenom = nomprenom;
        this.age = age;
        // @ts-ignore
        this.date = date;
        this.lieu = lieu;
    }
}
