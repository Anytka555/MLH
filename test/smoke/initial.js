const sel = require('../../data/selectors.json')
const exp = require('../../data/expected.json')

describe('My Little Hero', function () { //define suite title by passing a string

    describe('Getting to the page', function () { //define sub-suite title by passing a string

        it('TC-001 Title is correct ', function () { //define test title by passing a string
            browser.url('https://qa-apps.netlify.app/app_my_hero'); //open baseUrl
            let title = browser.getTitle(); //get page title and assign it to the "title" variable
            expect(title).toEqual('MLH trial'); //compare {title} (actual) and "MLH trial" (expected)
        });

    });

    describe('Lables exist', function () {

        it('TC-002 Label for name', function () {
            const label = $$(sel.label)[0].isDisplayed();
            expect(label).toEqual(true);
        });

        it('TC-003 Label for gender', function () {
            const label = $$(sel.label)[1].isDisplayed();
            expect(label).toEqual(true);
        });

        it('TC-004 Label for age', function () {
            const label = $$(sel.label)[2].isDisplayed();
            expect(label).toEqual(true);
        });

        it('TC-005 Label for story', function () {
            const label = $$('.ant-form-item-required')[3].isDisplayed();
            expect(label).toEqual(true);
        });

    });

    describe('Lables are correct', function () {

        it('TC-006 Label for name', function () {
            const text = $$('.ant-form-item-required')[0].getAttribute('title');
            expect(text).toEqual(exp.labelName);
        });

        it('TC-007 Label for gender = 2. Please choose a gender.', function () {
            const text = $$('.ant-form-item-required')[1].getAttribute('title');
            expect(text).toEqual(exp.labelGender);
        });

        /*it('TC-008 Label for age', function () {
            const label = $$('.ant-form-item-required')[2].isDisplayed();
            expect(label).toEqual(true);
        });

        it('TC-009 Label for story', function () {
            const label = $$('.ant-form-item-required')[3].isDisplayed();
            expect(label).toEqual(true);
        }); */

    });

});
