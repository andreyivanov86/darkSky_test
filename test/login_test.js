//login page
  //should be able to land on login page
  //should be able to login
  //should error if no username provided
  //should error if username format is incorrect
  //should error if no password provided
  //should error if username or password is incorrect

  let login = require('../page_object/login_page.js');
  let users = require('../test_data/login_data.js')


  before(() => {
    browser.url('/dev/login');
  });

  describe('login page', () => {
    it('should be able to land on login page', () => {
      expect(login.loginEmail.isVisible()).to.be.true;
      expect(login.loginPassword.isVisible()).to.be.true;
      expect(login.loginButton.isVisible()).to.be.true;
    });
    it('should be able to login', () => {
      login.loginOperaion(users.user1.email, users.user1.password);
      expect(browser.getUrl()).to.equal('https://darksky.net/dev/account');
    });
    it('should be able to login', () => {
      // login.loginOperaion(users.user1.email, users.user1.password);
      // expect(browser.getUrl()).to.equal('https://darksky.net/dev/account');
    });
  });
