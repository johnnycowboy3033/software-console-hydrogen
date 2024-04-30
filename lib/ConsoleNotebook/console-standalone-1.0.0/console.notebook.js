class ConsoleNotebook{
    
    _cnFormat;
    _cnUtil;
    _cnComponent;
    _pointerLabel;
    
    constructor(pointerLabel){

        if(typeof pointerLabel == "undefined"){
            this._pointerLabel = [];
        }else{
            this._pointerLabel = new Array();
            for(let i= 0; i < pointerLabel.length;i++){
                this._pointerLabel.push(pointerLabel[i]);
            }
        }
        this._cnFormat = new HtmlFormat();
        this._cnUtil = new ConvertUtil(this._cnFormat);
        this._cnComponent = new DataComponent(this._pointerLabel,this._cnFormat);
    
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

    insertSteps(className,logging){


        logging.forEach((element) => {

            if(element.Action == 'ENTER_POINT'){
                this._cnFormat.title(` ${element.FunctionName} # ${element.Counter}`);
            }

            if(element.Action == 'MESSAGE'){
                this._cnFormat.paragraph(` ${element.message} # ${element.Counter}`);
            }

            if(element.Action == 'VARIABLES'){

                this._cnFormat.section(`# ${element.Counter}`)
                this._cnUtil.variables(element);
            }

            if(element.Action == 'ARRAY'){
                this._cnComponent.printPointers(element.presentArray,element.indexes);
            }

            if(element.Action == 'DIVIDER'){
                this._cnFormat.divider();
            }

            if(element.Action == 'RESULTS'){
                this._cnFormat.results(` ${element.message} # ${element.Counter}`);
                this._cnFormat.divider();
            }

            this._cnFormat.newLine();
        });

        this.setClass(className);

    }

    /*
        This method removes contain of the html tags stored in the Format Object.
    */
    clearPage(){ 
        this._cnFormat.pageWrite = "";
    }

    /*
      This method you can set the class which you want the contains of the page in the Format Object to
      be inserted. 
    */ 

    setClass(className){
        $(`.${className}`).html(this._cnFormat.pageWrite);
    }

    get format(){ return this._cnFormat;}

}


