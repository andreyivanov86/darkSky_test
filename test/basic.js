
describe('darksky.net page', function() {
    it('should have the right title', function () {
        browser.url('/');
        var title = browser.getTitle();
        expect(title).to.include("Dark Sky");
    });
});
