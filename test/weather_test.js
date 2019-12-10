let locations = require('../test_data/weather_data.js');
let main = require('../page_object/main_page_object');


before(() => {
    main.load();
    browser.waitUntil(() => {
        return main.weatherSummary.isVisible() == true;
    });
});

describe('Current wether', function () {
    it.skip('should show correct temperature and summary for current location', () => {
        main.searchCurrentLocation();
        let weather = main.getWeather(40.58946, -73.95001).currently;
        let temperature = Math.round(weather.temperature);
        let summary = weather.summary;
        expect(main.weatherSummary.getText()).to.include(temperature);
        expect(main.weatherSummary.getText()).to.include(summary);
    });
    it('should show correct temperature and summary for Boston, MA', () => {
        main.inputLocation(locations.location1.name);
        let weather = main.getWeather(locations.location1.lat, locations.location1.long).currently;
        let temperature = Math.round(weather.temperature);
        let summary = weather.summary;
        expect(main.weatherSummary.getText()).to.include(temperature);
        expect(main.weatherSummary.getText()).to.include(summary);
    });
    it('should show correct temperature and summary for Miami, FL', () => {
        main.inputLocation(locations.location2.name)
        let weather = main.getWeather(locations.location2.lat, locations.location2.long).currently;
        let temperature = Math.round(weather.temperature);
        let summary = weather.summary;
        expect(main.weatherSummary.getText()).to.include(temperature);
        expect(main.weatherSummary.getText()).to.include(summary);
    });
});
