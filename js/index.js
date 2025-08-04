const form = document.getElementById('loginForm');
const email = document.getElementById('email');
const password = document.getElementById('password');
const message = document.getElementById('loginMessage');

form.onsubmit = function (event) {
  event.preventDefault();

  if (email.value === 'test@mail.com' && password.value === '1234') {
    form.remove();
    message.className = 'alert alert-success text-center mt-3';
    message.textContent = '✅ Inicio de sesión exitoso';
  } else {
    message.className = 'alert alert-danger text-center mt-3';
    message.textContent = '❌ Correo o contraseña incorrectos';
  }
};
