export class athlesante {
    id: number;
    description: string;
    programme: string;

    constructor(id = 0, description = '', programme = '') {
        this.id = id;
        this.description = description;
        this.programme = programme;
    }
}
