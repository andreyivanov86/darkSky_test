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
    })
});
