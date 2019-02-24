"use strict";

function ask(question, answer, ok, fail) {
  var result = prompt(question, "");
  if (result.toLowerCase() == answer.toLowerCase()) ok();
  else fail();
}

var user = {
  login: "Василий",
  password: "123456",

  loginOk: function() {
    alert(this.login + " вошел на сайт");
  },

  loginFail: function() {
    alert(this.login + ": ошибка входа");
  },

  checkPassword: function() {
    ask(
      "Ваш пароль?",
      this.password,
      this.loginOk.bind(this),
      this.loginFail.bind(this)
    );
  }
};

user.checkPassword();
