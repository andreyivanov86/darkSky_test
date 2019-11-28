let login = require('../page_object/login_page.js');
let users = require('../test_data/login_data.js')

describe('login page', () => {
  beforeEach(() => {
    login.load();
  });
  it('should be able to land on login page', () => {
    expect(login.loginEmail.isVisible()).to.be.true;
    expect(login.loginPassword.isVisible()).to.be.true;
    expect(login.loginButton.isVisible()).to.be.true;
  });
  it('should be able to login', () => {
    login.loginOperation(users.user1.email, users.user1.password);
    expect(browser.getUrl()).to.equal('https://darksky.net/dev/account');
  });
  it('should require email as username and password', () => {
    expect(login.loginEmail.getAttribute('type')).to.equal('email');
    expect(login.loginEmail.getAttribute('required')).to.equal('true');
    expect(login.loginPassword.getAttribute('required')).to.equal('true');
  });
  it('should error if username or password is incorrect', () => {
    login.loginOperation(users.user2.email, users.user2.password);
    expect(login.errorMsg.getText()).to.equal('Username and password do not match');
    login.loginOperation(users.user3.email, users.user3.password);
    expect(login.errorMsg.getText()).to.equal('Username and password do not match');
  });
});



