// Import the js file to test
import { isAVaidURL } from "../src/client/js/checkURL"

describe("Testing the functionality of url validating", () => {
    // The test() function has two arguments - a string description, and an actual test as a callback function.
    test("Testing the functionality of url validating", () => {
           expect(isAVaidURL('https://jamesclear.com/saying-no')).toBeDefined();
})



});