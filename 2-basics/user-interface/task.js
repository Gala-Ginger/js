var login = prompt('Логин', '');

if (login == 'Админ') {
  var pass = prompt('Введите пароль', '');
  if (pass == 'Черный властелин') {
    alert('Добро пожаловать');
  } else if (pass == null) {
    alert('Вход отменен');
  } else {
    alert('Пароль не верен');
  }
}
  else if (login == null) {
    alert('Вход отменен');
  }
  else {
    alert('Я вас не знаю');
  }


