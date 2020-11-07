const sel = require ('../../data/selectors.json');
const exp = require ('../../data/expected.json');

describe('TC004 Check description', function () {
    it('', function () {
        browser.url('')
        const label = $(sel.description).getText();
        expect(label).toEqual(exp.description);
    });
});