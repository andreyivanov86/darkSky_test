let weather = require('../test_data/weather_data.js');
let main = require('../page_object/main_page_object');

before(() => {
    main.load();
    browser.waitUntil(() => {
        return main.weatherSummary.isVisible() == true;
    });
});

describe('Current wether', function () {
    it('should show correct temperature and summary for current location', () => {
        main.searchCurrentLocation();
        let weather = main.getWeather(40.58946, -73.95001).currently;
        let temperature = Math.round(weather.temperature);
        let summary = weather.summary;
        expect(main.weatherSummary.getText()).to.include(temperature);
        expect(main.weatherSummary.getText()).to.include(summary);
    });
    it('should show correct temperature and summary for Boston, MA', () => {
        main.inputLocation('Boston, MA')
        let weather = main.getWeather(42.360081, -71.058884).currently;
        let temperature = Math.round(weather.temperature);
        let summary = weather.summary;
        expect(main.weatherSummary.getText()).to.include(temperature);
        expect(main.weatherSummary.getText()).to.include(summary);
    });
    it('should show correct temperature and summary for Miami, FL', () => {
        main.inputLocation('Miami, FL')
        let weather = main.getWeather(25.761681, -80.191788).currently;
        let temperature = Math.round(weather.temperature);
        let summary = weather.summary;
        expect(main.weatherSummary.getText()).to.include(temperature);
        expect(main.weatherSummary.getText()).to.include(summary);
    });
});
