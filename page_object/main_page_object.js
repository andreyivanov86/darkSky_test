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
}
module.exports = new Main();
//TODO create page object model for main page elements
  // search bar
  //current details wrapper
  //center forcast display
