let main = require('../page_object/main_page_object');

describe('darksky.net page', function () {
    browser.url('/');
    it('should have the right title', function () {
        var title = browser.getTitle();
        expect(title).to.include("Dark Sky");
    });
    it('should have visible navbar', () => {
        let navBarisDisplayed = main.navBar.isVisible();
        expect(navBarisDisplayed).to.be.true;
    });
    describe('navbar should have', () => {
        it('visible Dark Sky logo', () => {
            let darkSkyLogoIsVisible = main.darkSkyLogo.isVisible();
            expect(darkSkyLogoIsVisible).to.be.true;
        });
        it('visible phone icon with App link', () => {
            let phoneIconIsVisible = main.phoneIcon.isVisible();
            expect(phoneIconIsVisible).to.be.true;
            let appLinkIsVisible = main.appLink.isVisible();
            expect(appLinkIsVisible).to.be.true;
        });
        it('visible Maps Link', () => {
            let mapsLinkIsVisible = main.mapsLink.isVisible();
            expect(mapsLinkIsVisible).to.be.true;
        });
        it('visible Dark Sky API Link', () => {
            let apiLinkIsVisible = main.devApiLink.isVisible();
            expect(apiLinkIsVisible).to.be.true;
        });
        it('visible Help Link', () => {
            let helpLinkIsVisible = main.helpLink.isVisible();
            expect(helpLinkIsVisible).to.be.true;
        });
        it('visible About Link', () => {
            let aboutLinkIsVisible = main.aboutLink.isVisible();
            expect(aboutLinkIsVisible).to.be.true;
        });
        it('visible Twitter logo', () => {
            let twitterLogoIsVisible = main.twitterLogo.isVisible();
            expect(twitterLogoIsVisible).to.be.true;
        });
    });
    it('should have search bar', () => {
        expect(main.searchHeader.isVisible()).to.be.true;
    });
    describe('search bar', () => {
        it('should have current location button', () => {
            expect(main.currentLocation.isVisible()).to.be.true;
        });
        it('should have search bar', () => {
            expect(main.searchForm.isVisible()).to.be.true;
        });
        it('should have search button', () => {
            expect(main.searchButton.isVisible()).to.be.true;
        });
        it('should have units selector', () => {
            expect(main.unitsSelector.isVisible()).to.be.true;
            expect(main.unitsOptionsMenu.isVisible()).to.be.false;
        });
        it('should have language selector', () => {
            expect(main.languageSelector.isVisible()).to.be.true;
        })
    });
    //TODO check visibility of current details wrapper and it's elements
});
