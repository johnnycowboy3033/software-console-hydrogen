class CharUtil{

    _charFound;

    constructor(){

    }

    countChar(stringSearch,charLookFor){

        this._charFound = 0;

        for (let i = 0; i < stringSearch.length; i++) {
            if (stringSearch[i] === charLookFor) {
                this._charFound++;
            } 
        }

        return this._charFound;


    }

    get charFound() {return this._charFound;}
    set charFound(value) {this._charFound = value;}
}