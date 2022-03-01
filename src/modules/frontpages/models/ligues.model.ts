export class ligue {
    idligue: number;
    nomligue: string;
    fax: number;
    email: string;
    fb: string;
    tel: number;

    constructor(idligue = 0, nomligue = '', fax = 22356, email = '', tel = 0, fb = '') {
        this.idligue = idligue;
        this.nomligue = nomligue;
        this.fax = fax;
        this.email = email;
        this.fb = fb;
        this.tel = tel;
    }
}
