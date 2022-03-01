export class formation {
    idformation: number;
    activite: string;
    natureactivite: string;
    periode: string;
    lieu: string;
    nbrparticipants: number;
    organisme: string;
    pathcomformation: string;

    constructor(
        idformation = 0,
        activite = '',
        natureactivite = '',
        periode = '',
        lieu = '',
        organisme = '',
        nbrparticipants = 120,
        pathcomformation = ''
    ) {
        this.activite = activite;
        this.idformation = idformation;
        this.lieu = lieu;
        this.natureactivite = natureactivite;
        this.nbrparticipants = nbrparticipants;
        this.organisme = organisme;
        this.periode = periode;
        this.pathcomformation = pathcomformation;
    }
}
