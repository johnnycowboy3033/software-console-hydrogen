class DataComponent{

    _labels;
    _format;

    constructor(label, format){
        this._labels = label;
        this._format = format;
    }

    get label(){return this._labels;}
    set label(value){this._labels = value;}


    printPointers(elements, labelIndex,hideElements){

        for( let index = 0; index < elements.length; index++){

            let label = "";

            if(this.isLabelIndex(labelIndex, index)){

                label = label + `<---`;

                for(var i = 0; i < labelIndex.length; i++){

                    if(index == labelIndex[i]){

                        label = label + ` ${ this._labels[i]}`;

                    }

                    label

                }


            }

            if(typeof hideElements == 'undefined'){
                this._format.arrayElement(index, elements[index], label);
            }else{
                if(hideElements == index){
                    this._format.arrayElement(index, '[ ]', label); 
                }else{
                    this._format.arrayElement(index, elements[index], label);
                }
            }

            
        }

    }

    isLabelIndex(labelIndex, index){

        return labelIndex.some( (value)=>{ 
            return value == index
        });;

    }

    findLabelIndex(labelIndex, index){
        return labelIndex.findIndex((value)=>{ 
            return value == index
        });;
    }

}