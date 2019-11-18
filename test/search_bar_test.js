let main = require('../page_object/main_page_object');

describe('search bar', function () {
  browser.url('/');
  it('should have default units', () => {
    expect(main.unitsSelector.getText()).to.include('F, mph');
    expect(main.windDetial.getText()).to.include('mph');
  });
  it.only('should have C m/s when changed', () => {
    describe('units options menu', () => {
      it('should be become visible when I click on it', () => {
        console.log(main.unitsSelector.getAttribute('class'));
        main.unitsSelector.click();


        console.log(main.unitsOptionsMenu.isVisible());
      })
    })
  });
});
