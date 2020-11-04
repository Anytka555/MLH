const sel = require('../../data/selectors.json')
const exp = require('../../data/expected.json')

describe1 = describe('MT-001 Home Page Navigation', function () {
    it('', function () {
        browser.url('')
        expect($(sel.homePageNavigation).getText()).toEqual(exp.homePageNavigation);

    });
});
