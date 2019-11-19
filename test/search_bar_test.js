let main = require('../page_object/main_page_object');

describe('search header', function () {
  browser.url('/');

  describe('unit options', () => {
    it('should have default units F, mph', () => {
      expect(main.unitsSelector.getText()).to.include('F, mph');
      expect(main.windDetial.getText()).to.include('mph');
    });
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
  it('should have current location', () => {
    expect(main.searchFormInputField.getValue()).to.not.equal('');
  });
  describe('when current location button is clicked', () => {
    it('search bar input should change to Searching...', () => {
      main.currentLocationButton.click();
      expect(main.searchFormInputField.getValue()).to.equal('Searching...');
    });
  });
  describe('when I input Boston', () => {
    it.only('saved locations should popup', () => {


    });
  });
  //TODO test saved locations dropdown menu
    //search locations
      //input Boston
      //click search
      //input Chicago
      //hit Enter
    //click on search Bar
      //pop up loactions should contain boston and chicago

});
