export class Form{
    constructor(public ujNev: string, public ujKedvencEtel: string){
        if  (ujNev.trim()==''){
            throw new Error('Hibás név');
        }
        if  (ujKedvencEtel.trim()==''){
            throw new Error('Hibás étel');
        }
    }
}