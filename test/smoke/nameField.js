const sel = require ('../../data/selectors.json');
const exp = require ('../../data/expected.json');

describe('Checks for Name Field', function () {
    it('TC007 Label for name', function () {
        browser.url('')
        const label = $(sel.label).getText();
        expect(label).toEqual(exp.labelName);
    });

        it('TC008 Input letters', function () {
            browser.url('');
           $(sel.name).setValue('Lady');
           //const name = $$(".ant-row.ant-form-item")[0].getAttribute('class');
           expect($$(".ant-row.ant-form-item")[0]).toHaveAttrContaining('class', 'success');
        });

      /*  it('TC009 Asterisk contains', function () {
        browser.url('');
        $(sel.name).setValue('Lady');
        //const name = $$(".ant-row.ant-form-item")[0].getAttribute('class');
        expect($$(".ant-row.ant-form-item")[0]).toHaveAttrContaining('class', 'success');
    });*/

    });


