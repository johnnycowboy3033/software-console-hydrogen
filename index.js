$(function() {
    
    let consoleNotebook = new ConsoleNotebook([['Head','Midpoint','Tail']]);

    //Webpage site layout
    consoleNotebook.insertCodeBlock('code-1',0,43);

    consoleNotebook.clearPage();
    consoleNotebook.format.manyNewLine(6);
    consoleNotebook.setClass("bottom-page");

     //Algorithm logging
     function Algorithm(arr,x){
        let result = binarySearch(arr, x);

        consoleNotebook.insertSteps("steps-algorithm",logging);

    };

     logging = new Array();
     counter = 0;
     Algorithm(new Array(0, 10, 20, 30, 40, 50, 60),0);
    
  });