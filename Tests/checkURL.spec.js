// Import the js file to test
import { isAVaidURL } from "../src/client/js/checkURL"

// var  isAVaidURL = require("../src/client/js/checkURL")

test("Testing the functionality of url validating", () => {
    expect(isAVaidURL('https://jamesclear.com/saying-no')).toBeDefined();
})