export class masters {
    idmas: number;
    description: string;
    nbrpatrtietr: number;
    nbrtotal: number;

    constructor(idmas = 0, nbrpatrtietr = 0, nbrtotal = 0, description = '') {
        this.idmas = idmas;
        this.description = description;
        this.nbrpatrtietr = nbrpatrtietr;
        this.nbrtotal = nbrtotal;
    }
}
