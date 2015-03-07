var usuario_administrador = 'administrador',
  password_administrador = '123456';

var formulario_logueo = document.getElementById('formulario_logueo'),
  logueo = document.getElementById('logueo'),
  publicar_torneo = document.getElementById('publicar_torneo'),
  user = document.getElementById('user'),
  password = document.getElementById('password'),
  prueba = document.getElementById('prueba');

function mostrarLogueo(e) {

  formulario_logueo.classList.toggle('toggle');
  e.preventDefault();
  e.stopPropagation();
}

function validarLogueo() {

  if (user.value == usuario_administrador &&
    password.value == password_administrador) {

    formulario_logueo.classList.toggle('toggle');
  } else {
    alert('Usuario o contraseña incorrecta, Intentelo otra vez');
  }

  e.preventDefault();
  e.stopPropagation();
}

// Eventos
logueo.addEventListener('click', mostrarLogueo);
publicar_torneo.addEventListener('click', mostrarLogueo);
formulario_logueo.addEventListener('submit', validarLogueo);
