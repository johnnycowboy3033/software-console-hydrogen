$(function() {
    
    let consoleNotebook = new ConsoleNotebook();

    consoleNotebook.arrayPointerLabel(['Head','Midpoint','Tail']);

    //Webpage site layout
    consoleNotebook.insertCodeBlock('code-1',0,43);//The whole code base
    consoleNotebook.insertCodeBlock('code-2',16,20);//When the target is found
    consoleNotebook.insertCodeBlock('code-3',23,27);//When the target value is smaller then the Midpoint value

    

    consoleNotebook.clearPage();

    consoleNotebook.setClass("bottom-page");

     logging = new Array();
     counter = 0;
     binarySearch(new Array(0, 10, 20, 30, 40, 50, 60),20);
     consoleNotebook.insertSteps("steps-1",logging);
     consoleNotebook.insertSteps("steps-2",logging);
     consoleNotebook.insertSteps("steps-3",logging);


  });