// Import the js file to test
import { polarity } from "../src/client/js/formHandler"

// The describe() function takes two arguments - a string description, and a test suite as a callback function.
// A test suite may contain one or more related tests
describe("Testing the calculation of polarity", () => {
    // The test() function has two arguments - a string description, and an actual test as a callback function.
    test("Testing the calculation of polarity", () => {
           expect(polarity('P+')).toBe('STRONG POSITIVE');
})

test("Testing the calculation of polarity", () => {
    expect(polarity('P')).toBe('positive');
})


test("Testing the calculation of polarity", () => {
    expect(polarity('NONE')).toBe('no sentiment');
})



});