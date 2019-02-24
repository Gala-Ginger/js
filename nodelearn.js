"use strict";

function ask(question, answer, ok, fail) {
  var result = prompt(question, "");
  if (result.toLowerCase() == answer.toLowerCase()) ok();
  else fail();
}

var user = {
  login: "Василий",
  password: "123456",

  loginDone: function(result) {
    alert(this.login + (result ? " вошел на сайт" : " ошибка входа"));
  }

  checkPassword: function() {
    ask(
      "Ваш пароль?",
      this.password,
      this.loginDone.bind(this, true),
      this.loginDone.bind(this, false)
    );
  }
};

user.checkPassword();
