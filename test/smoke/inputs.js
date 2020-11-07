const sel = require ('../../data/selectors.json');
const exp = require ('../../data/expected.json');

describe('Inputs', function () {
    describe('Inputs are displayed', function () {
        it('TC-014 Name ', function () {
            browser.url('');
            const name = $(sel.name).isDisplayed();
            expect(name).toEqual(true);
        });
        it('TC-015 Gender (he)', function () {
            const gender = $$(sel.gender)[0].isDisplayed();
            expect(gender).toEqual(true);
        });
        it('TC-016 Gender (she)', function () {
            const gender = $$(sel.gender)[1].isDisplayed();
            expect(gender).toEqual(true);
        });
        it('TC-017 Gender (it)', function () {
            const gender = $$(sel.gender)[2].isDisplayed();
            expect(gender).toEqual(true);
        });
        it('TC-018 Age', function () {
            const label = $(sel.age).isDisplayed();
            expect(label).toEqual(true);
        });
        it('TC-019 Story', function () {
            const label = $(sel.story).isDisplayed();
            expect(label).toEqual(true);
        });
        it('TC-020 Create', function () {
            const label = $(sel.create).isDisplayed();
            expect(label).toEqual(true);
        });
    });
    describe('Placeholder`s name', function () {

        it('TC-010 check name placeholder', () => {
            const textPlaceHolder = $(sel.name).getProperty('placeholder');
            expect(textPlaceHolder).toEqual(exp.namesFieldPlaceholder);
        });
        it('TC-026 check age placeholder', () => {
            const agePlaceholder = $(sel.age).getProperty('placeholder');
            expect(agePlaceholder).toEqual(exp.agesFieldPlaceholder);
        });
        it('TC-046 check "Type of the story" placeholder ', () => {
            const storyPlaceholder = $(sel.storyFieldPlacehoder).getText();
            expect(storyPlaceholder).toEqual(exp.storiesFieldPlaceholder);
        });

 });

})

