const sel = require ('../../data/selectors.json');
const exp = require ('../../data/expected.json');

describe('Cheking the page load', function () {
    it('TC001 Home Page Navigation', function () {
        browser.url('')
        expect($(sel.title).getText()).toEqual(exp.title);
    });
});