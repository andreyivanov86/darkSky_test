let main = require('../page_object/main_page_object');
let units = require('../test_data/units_options');

before(() => {
  main.load();
  browser.waitUntil(() => {
    return main.navBar.isVisible() == true;
  });
});
describe('search header', function () {
  // browser.url('/');


  it('should have current location', () => {
    expect(main.searchFormInputField.getValue()).to.not.equal('');
  });
  describe('when I search new locations', () => {
    it('should present correct locations', () => {
      main.inputLocation('Boston');
      expect(main.searchFormInputField.getValue()).to.include('Boston');
      main.inputLocation('Miami');
      expect(main.searchFormInputField.getValue()).to.include('Miami');
    });
    it('should show saved locations', () => {
      main.revealSavedLocations();
      expect(main.savedLocationsList.getAttribute('class')).to.equal('visible');
      expect($("#savedLocations .inner .location-container:nth-of-type(1)").getText()).to.include('Boston');
    });
    it('should remove saved location', () => {
      $("#savedLocations .location-container:nth-of-type(1) .delete-location").click();
      main.revealSavedLocations();
      expect($("#savedLocations .inner .location-container:nth-of-type(1)").getText()).to.not.include('Boston');
    });
  });
  describe('when current location button is clicked', () => {
    it('search bar input should change to Searching...', () => {
      main.currentLocationButton.click();
      expect(main.searchFormInputField.getValue()).to.equal('Searching...');
    });
  });
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
    });
  });
  describe('units options list', () => {
    it('should have 4 options', () => {
      //get li indexes
      let unitOptionsList = $$('.selectric-items ul')
      unitOptionsList.forEach(unitOption => {
        //function that clicks on unit dropdown and chooses option iteratively
        main.chooseUnitOption(unitOption.index);
        expect(main.windDetial.getText()).to.include(units[unitOption.index].wind);
      });
    });
  });
});

