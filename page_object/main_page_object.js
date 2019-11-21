class Main {
  //navbar
  get navBar() { return $('nav') }
  get darkSkyLogo() { return $("//nav//img[@alt='Dark Sky Logo']"); }
  get phoneIcon() { return $('#phone-icon'); }
  get appLink() { return $('=App'); }
  get mapsLink() { return $('=Maps'); }
  get devApiLink() { return $('=Dark Sky API'); }
  get helpLink() { return $('=Help'); }
  get aboutLink() { return $('=About'); }
  get twitterLogo() { return $("//nav//img[@alt='Twitter Logo']"); }
  // search bar
  get searchHeader() { return $('#header'); }
  get currentLocationButton() { return $('.currentLocationButton'); }
  get savedLocationsList() { return $('#savedLocations') };
  get searchForm() { return $('#searchForm'); }
  get searchFormInputField() { return $("//form[@id='searchForm']/input"); }
  get searchButton() { return $("//form//img[@alt='Search Button']"); }
  get unitsSelector() { return $('#header .selectric-units'); }
  get unitsOptionsMenu() { return $('#units-container .selectric-units .selectric-hide-select'); }
  get uitsSecondOption() { return $("#header .selectric-units [data-index='1']"); }
  get languageSelector() { return $('#header .selectric-language .selectric'); }
  inputLocation(location) {
    this.searchFormInputField.setValue(location);
    this.searchButton.click();
  }
  chooseUnitOption(index) {
    this.unitsSelector.click();
    $("#header .selectric-units [data-index='" + index + "']").click()
  }
  //current details wrapper
  get windDetial() { return $('.wind'); }
  get humidityDetail() { return $('.humidity'); }
  get dew_pointDetail() { return $('.dew_point'); }
  get uv_indexDetail() { return $('.uv_index'); }
  get visibilityDetail() { return $('.visibility') }
  get pressureDetail() { return $('.pressure'); }
}
module.exports = new Main();
//TODO create page object model for main page elements
  //center forcast display
