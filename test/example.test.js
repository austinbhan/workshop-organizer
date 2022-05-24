// IMPORT MODULES under test here:
// import { example } from '../example.js';
import { renderWorkShops } from '../list-page/list-page.js';

const test = QUnit.test;

test('time to test a function', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const expected = `<div class="workShopDiv"><h3 class="workshop-name">Workshop name</h3><ul class="participants"></ul></div>`;
    
    //Act 
    // Call the function you're testing and set the result to a const
    const actual = renderWorkShops();

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual, expected);
});
