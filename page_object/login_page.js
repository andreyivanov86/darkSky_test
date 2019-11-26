class Login {
  get loginEmail() { return $('#email'); }
  get loginPassword() { return $('#password'); }
  get loginButton() { return $('button'); }

  loginOperaion(email, password) {
    if (email) {
      this.loginEmail.setValue(email);
    } else {
      this.loginEmail.setValue("");
    }
    if (password) {
      this.loginPassword.setValue(password);
    } else {
      this.loginPassword.setValue("");
    }
    this.loginButton.click();
  }

}
module.exports = new Login();
