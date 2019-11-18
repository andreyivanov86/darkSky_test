let main = require('../page_object/main_page_object');

describe('search bar', function () {
  browser.url('/');
  it('should have default units F, mph', () => {
    expect(main.unitsSelector.getText()).to.include('F, mph');
    expect(main.windDetial.getText()).to.include('mph');
  });
  describe('when I click units options and change to C, m/s', () => {
    it('units menu should become visible', () => {
      main.unitsSelector.click();
      expect(main.unitsSelector.getAttribute('class')).to.include('selectric-open selectric-focus');
    });
    it('units should change in current details', () => {
      main.uitsSecondOption.click();
      expect(main.windDetial.getText()).to.include('m/s');
    })
  });
  //TODO test search bar when click on current locatoin
});
