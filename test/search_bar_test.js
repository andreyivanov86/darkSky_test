let main = require('../page_object/main_page_object');

describe('search header', function () {
  browser.url('/');

  describe('unit options', () => {
    it('should have default units F, mph', () => {
      expect(main.unitsSelector.getText()).to.include('F, mph');
      expect(main.windDetial.getText()).to.include('mph');
    });
  });
  //TODO check all options using $$
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
  describe('when I search new locations (Boston, Chicago)', () => {
    it('should present correct locations', () => {
      let location = 'Boston'
      main.inputLocation(location);
      expect(main.searchFormInputField.getValue()).to.include(location);
      location = 'Chicago';
      main.inputLocation(location);
      expect(main.searchFormInputField.getValue()).to.include(location);
    });
    it('should show saved locations', () => {
      main.searchFormInputField.click();
      //TODO add wait unitll drop list is visible
      expect(main.savedLocationsList.getAttribute('class')).to.equal('visible');
      expect($("#savedLocations .inner .location-container:nth-of-type(1)").getText()).to.include('Boston');
    })
  });
});
