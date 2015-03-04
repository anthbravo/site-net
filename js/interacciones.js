var usuario_administrador = 'administrador',
    password_administrador = '123456';

var $formulario_logueo = $('#formulario_logueo'),
    $logueo = $('#logueo'),
    $publicar_torneo = $('#publicar_torneo'),
    $user = $('#user'),
    $password = $('#password');

function mostrarLogueo(){

  $formulario_logueo.slideToggle();
  return false;
}

function validarLogueo(){

  if($user.val() == usuario_administrador &&
      $password.val() == password_administrador){

    $formulario_logueo.slideToggle();
  }else{
    alert('Usuario o contraseña incorrecta, Intentelo otra vez');
  }

  return false;
}

// Eventos

$logueo.on('click', mostrarLogueo);
$publicar_torneo.on('click', mostrarLogueo);
$formulario_logueo.on('submit', validarLogueo);
