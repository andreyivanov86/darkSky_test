class Login {
  get loginEmail() { return $('#email'); }
  get loginPassword() { return $('#password'); }
  get loginButton() { return $('button'); }
  loginOperaion(email, password) {
    this.loginEmail.setValue(email);
    this.loginPassword.setValue(password);
    this.loginButton.click();
  }
}

module.exports = new Login();
