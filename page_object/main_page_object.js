let Base = require('./base_page.js');
let request = require('sync-request');

class Main extends Base {
  constructor() {
    super('/');
  }
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
  get unitsOptionsMenu() { return $('#header .options div:nth-of-type(1) .selectric-scroll'); }
  get uitsSecondOption() { return $("#header .selectric-units [data-index='1']"); }
  get languageSelector() { return $('#header .selectric-language .selectric'); }
  //search new location and wait unitl its founf
  inputLocation(location) {
    this.searchFormInputField.setValue(location);
    this.searchButton.click();
    browser.waitUntil(() => {
      return this.searchFormInputField.getValue().includes(location) == true;
    });
  }
  searchCurrentLocation() {
    this.currentLocationButton.click();
    browser.waitUntil(() => {
      return this.searchFormInputField.getValue() != 'Searching...';
    });
  }
  //click on search bar and wait unitl saved locations menu is visible
  revealSavedLocations() {
    this.searchFormInputField.click();
    browser.waitUntil(() => {
      return this.savedLocationsList.isVisible() == true;
    });
  }
  chooseUnitOption(index) {
    this.unitsSelector.click();
    browser.waitUntil(() => {
      return this.unitsOptionsMenu.isVisible() == true;
    });
    $("#header .selectric-units [data-index='" + index + "']").click()
  }
  //current details wrapper
  get windDetial() { return $('.wind'); }
  get humidityDetail() { return $('.humidity'); }
  get dew_pointDetail() { return $('.dew_point'); }
  get uv_indexDetail() { return $('.uv_index'); }
  get visibilityDetail() { return $('.visibility') }
  get pressureDetail() { return $('.pressure'); }
  //current weather
  get weatherSummary() { return $('.summary.swap'); }

  getWeather(lat, long) {
    let res = request('GET', "https://api.darksky.net/forecast/82561398d6aaa5940ac45a35b47191bf/" + lat + "," + long);
    return JSON.parse(res.getBody().toString('utf8'));
  }
}
module.exports = new Main();
//TODO create page object model for main page elements
  //center forcast display
