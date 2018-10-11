
function buttonClick (button){
 alert("Ви натиснули на кнопку")
}


function valid (form) {
let fail = false;
let name = form.name.value;
let email = form.email.value;
let password = form.password.value;
let RePassword = form.RePassword.value;
let state = form.state.value;

if (name == "" || name == " ")
fail = "Ви не ввели ім'я";
else if (email == "")
fail = "Ви не ввели електронну адресу";
else if (password == "")
fail = "Ви не ввели пароль";
else if (password != RePassword)
fail = "Паролі не співпадають";
else if (state == "")
fail = "Вкажіть стать"


if (fail)
alert(fail);
}
