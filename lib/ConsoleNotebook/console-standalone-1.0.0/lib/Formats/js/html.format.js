class HtmlFormat{

    _pageWrite;

    constructor(){
        this._pageWrite = "";
    }

    builder(valueBuilder){
        this._pageWrite = this._pageWrite + valueBuilder;
    }

    codeName(valueCodeName){
        this.builder( '<span class="code-file-name" ><i><b>'+valueCodeName + '</b></i></span><br>');
    }

    code(lineNumber,valueCode){
        this.builder(`<span class="line-number">${lineNumber} :</span> `+ valueCode +'<br>');
    }

    beginDiv(className){
        this.builder(`<div class="${className}" >`)
    }
    endDiv(){
        this.builder('</div>')
    }

    
    span(classSpan,valueSpan){
        return "<span class='"+classSpan+"' >" + valueSpan +  "</span>";
    }

    header(valueHeader,classSpan,valueSpan){
        this.builder("<"+valueHeader+">"+this.span(classSpan,valueSpan)+"</"+valueHeader+"></br>");
    }


    title(valueTitle){
        this.header("h2","title",valueTitle);
    }

    section(valueSection){
        this.header("h3","section",valueSection);
    }

    subsection(valueSubsetion){
        this.header("h4","subsection",valueSubsetion);
    }

    paragraph(valueParagraph){
        this.builder("<p class='paragraph' >"+valueParagraph+"</p>");
    }

    method(methodTitle,methodCounter){

        let title = `<span class="method-title"> ${methodTitle}</span>`;
        let counter = `<span class="method-counter" > # ${methodCounter} </span>`;
        this.builder(`<p class="method" > ${title} ${counter} </p>`);

    }

    arrayElement(index,element,label){
        let htmlIndex = `<span class='array-index' > [ ${index} ] = </span>`;
        let htmlElement = `<span class='array-element' > ${element} </span>`;
        let htmlLabel = `<span class='array-label' > ${label} </span>`;
        this.builder(`<p> ${htmlIndex} ${htmlElement} ${htmlLabel} </p>`);
    }

    variables(variableNames,variables){

        if(variableNames.length == variables.length){
            for(let i = 0; i < variables.length; i++){

                let htmlVariableName = `<span class="variable-name"> ${variableNames[i]} </span>`;
                let htmlVariable = `<span class="variable"> ${variables[i]}</span>`;
                this.builder(`<p class="variable-group" > ${ htmlVariableName } = ${htmlVariable}  </p>`);

            }

        }else{
            //TODO throw error (Variable Names and Variable must be the same length)
        }

    }

    newLine(){
        this._pageWrite = this._pageWrite + "<br>";
    }

    manyNewLine(times){
        for( var index = 0 ; index < times; index++){
            this.newLine();
        }
    }

    divider(){
        this.builder(`<p class="divider" ></p>`);
    }

    get pageWrite(){ return this._pageWrite}
    set pageWrite(value){ this._pageWrite = value}

 
}