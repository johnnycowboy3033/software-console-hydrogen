describe("Convert Util", function() {

    it("(JASMINE SETUP) Should be true because this test method is for testing the Jasmine setup", function() {

        console.log("=== JASMINE SETUP ===");
        expect(true).toBeTruthy();

    });

    it("(mappingArrays) Should be all key/value but the Action key/value", function() {

        let data = {  Action:"VARIABLES", LOW: 10, HIGH : 30};
        let convert = new ConvertUtil({});

        convert.mappingArrays(data);

        expect(convert.arrayKey).toEqual([ 'LOW', 'HIGH']);
        expect(convert._arrayValue).toEqual([ 10, 30]);

    });

    it('(mappingArrays) should create two empty arrays when called with an empty object', () => {
        let data = {};
        let convert = new ConvertUtil({});

        convert.mappingArrays(data);

        expect(convert.arrayKey).toEqual([]);
        expect(convert.arrayValue).toEqual([]);
      });

      it('(mappingArrays) should create two empty arrays when called with an object containing only the Action key/value', () => {
        let data = { Action: "VARIABLES" };
        let convert = new ConvertUtil({});

        convert.mappingArrays(data);

        expect(convert.arrayKey).toEqual([]);
        expect(convert.arrayValue).toEqual([]);
      });



    


  });
