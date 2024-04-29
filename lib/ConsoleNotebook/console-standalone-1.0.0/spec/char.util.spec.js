describe("Character Utility", function() {

    it("(JASMINE SETUP) Should be true because this test method is for testing the Jasmine setup", function() {

        console.log("=== JASMINE SETUP ===");
        expect(true).toBeTruthy();

    });

    it('(countChar) should equal 1 beause there are one curly bracket in the string', () => {
        let charUtil = new CharUtil();

        let count = charUtil.countChar("for(let i = 0; i < s.length; i++){", "{");

        expect(count).toEqual(1);
    });

    it('(countChar) should equal 0 beause there are NO one curly bracket in the string', () => {
        let charUtil = new CharUtil();

        let count = charUtil.countChar("let i = 0;", "{");

        expect(count).toEqual(0);
    });
    


  });
