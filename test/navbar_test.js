
describe('darksky.net page', function () {
    it('should have the right title', function () {
        browser.url('/');
        var title = browser.getTitle();
        expect(title).to.include("Dark Sky");
    });
    it('should have visible navbar', () => {
        let navBarisDisplayed = $("nav").isVisible();
        expect(navBarisDisplayed).to.be.true;
    });
    describe('navbar should have', () => {
        it('visible Dark Sky logo', () => {
            let darkSkyLogoIsVisible = $("//nav//img[@alt='Dark Sky Logo']").isVisible();
            expect(darkSkyLogoIsVisible).to.be.true;
        });
        it('visible phone icon with App link', () => {
            let phoneIconIsVisible = $('#phone-icon').isVisible();
            expect(phoneIconIsVisible).to.be.true;
            let appLinkIsVisible = $('=App').isVisible();
            expect(appLinkIsVisible).to.be.true;
        });
        it('visible Maps Link', () => {
            let mapsLinkIsVisible = $('=Maps').isVisible();
            expect(mapsLinkIsVisible).to.be.true;
        });
        it('visible Dark Sky API Link', () => {
            let apiLinkIsVisible = $('=Dark Sky API').isVisible();
            expect(apiLinkIsVisible).to.be.true;
        });
        it('visible Help Link', () => {
            let helpLinkIsVisible = $('=Help').isVisible();
            expect(helpLinkIsVisible).to.be.true;
        });
        it('visible About Link', () => {
            let aboutLinkIsVisible = $('=About').isVisible();
            expect(aboutLinkIsVisible).to.be.true;
        });
        it('visible Twitter logo', () => {
            let twitterLogoIsVisible = $("//nav//img[@alt='Twitter Logo']").isVisible();
            expect(twitterLogoIsVisible).to.be.true;
        });
    })

});
