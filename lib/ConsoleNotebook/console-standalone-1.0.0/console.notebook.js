class ConsoleNotebook{
    
    _cnFormat;
    _cnUtil;
    _cnComponent;
    _pointerLabel;
    
    constructor(pointerLabel){

        if(typeof pointerLabel == "undefined"){
            this._pointerLabel = [];
        }else{
            this._pointerLabel = pointerLabel;
        }
        this._cnFormat = new HtmlFormat();
        this._cnUtil = new ConvertUtil(this._cnFormat);
        this. _cnComponent = new DataComponent([this._pointerLabel],this._cnFormat);
    
    }

    insertCodeBlock(blockClass,beginLineNo, endLlineNo){

        this._cnFormat.codeName(data.fileName);

        this._cnFormat.beginDiv("coding-block")
        for(let i = beginLineNo; i < endLlineNo+ 1;i++){
            this._cnFormat.code (i,data.raw[`ln_${i}`] );
        }
        this._cnFormat.beginDiv();

        $(`.${blockClass}`).html(this._cnFormat.pageWrite);

    }

    formatClear(){ 
        this._cnFormat.pageWrite = "";
        return this._cnFormat;
    }
    setClass(className){
        $(`.${className}`).html(this._cnFormat.pageWrite);
    }

    get format(){ return this._cnFormat;}

}


