describe("Data Component", function() {

    it("(JASMINE SETUP) Should be true because this test method is for testing the Jasmine setup", function() {

        console.log("=== JASMINE SETUP ===");
        expect(true).toBeTruthy();

    });

    it("(Data Component SETUP) Should be true because the label set and get result value", function() {

        console.log("=== Data Component SETUP ===");

        let data = new DataComponent(['Head','Midpoint','Tail']);

        expect(data.label).toEqual(['Head','Midpoint','Tail']);

    });
    
    it("(Data Component - isLabelIndex) Should be true because 2 is in the [1,2,3]", function() {

        console.log("=== Data Component SETUP ===");

        let data = new DataComponent(['Head','Midpoint','Tail']);

        let result = data.isLabelIndex([1,2,3],2)

        expect(result).toBeTrue();

    });

    it("(Data Component - isLabelIndex) Should be false because 6 is not in the [1,2,3]", function() {

        console.log("=== Data Component SETUP ===");

        let data = new DataComponent(['Head','Midpoint','Tail']);

        let result = data.isLabelIndex([1,2,3],6)

        expect(result).toBeFalse();

    });

    it("(Data Component - findLabelIndex) Should be true because element 2 is in the [1,2,3] the index is 1", function() {

        console.log("=== Data Component SETUP ===");

        let data = new DataComponent(['Head','Midpoint','Tail']);

        let result = data.findLabelIndex([1,2,3],2)

        expect(result).toEqual(1);

    });


  });