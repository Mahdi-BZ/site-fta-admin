export class document {
    iddoc: number;
    pathdoc: string;
    typedoc: string;

    constructor(
        iddoc=0,
        pathdoc='',
        typedoc=''
    ) {
        this.iddoc = iddoc;
        this.pathdoc = pathdoc;
        this.typedoc = typedoc;
     }
}
