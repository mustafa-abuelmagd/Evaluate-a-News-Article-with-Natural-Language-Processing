// Import the js file to test
import { polarity } from "../src/client/js/formHandler"

// var  polarity = require("../src/client/js/formHandler")


    test("Testing the calculation of polarity", () => {
           expect(polarity('P+')).toBe("strong positive");
})

test("Testing the calculation of polarity", () => {
    expect(polarity('P')).toBe('positive');
})


test("Testing the calculation of polarity", () => {
    expect(polarity('NONE')).toBe('no sentiment');
})


