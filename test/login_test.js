//login page
//should be able to land on login page
//should be able to login
//should require email as username
//should error if username or password is incorrect

let login = require('../page_object/login_page.js');
let users = require('../test_data/login_data.js')


describe('login page', () => {
  beforeEach(() => {
    browser.url('/dev/login');
  });
  it('should be able to land on login page', () => {
    expect(login.loginEmail.isVisible()).to.be.true;
    expect(login.loginPassword.isVisible()).to.be.true;
    expect(login.loginButton.isVisible()).to.be.true;
  });
  it('should be able to login', () => {
    login.loginOperaion(users.user1.email, users.user1.password);
    expect(browser.getUrl()).to.equal('https://darksky.net/dev/account');
  });
  it('should require email as username and password', () => {
    expect(login.loginEmail.getAttribute('type')).to.equal('email');
    expect(login.loginEmail.getAttribute('required')).to.equal('true');
    expect(login.loginPassword.getAttribute('required')).to.equal('true');
  });
    //TODO add it block for the case when credentials are incorrect
});



