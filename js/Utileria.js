function validarUyC() {
  const email = document.getElementById('CorreoU').value;
  const password = document.getElementById('password').value;

  let emailValido = validarEmail(email);
  let passwordValida = validarPassword(password);

  if (!emailValido) {
      document.getElementById('alertCorreo').classList.remove('d-none');
  } else {
      document.getElementById('alertCorreo').classList.add('d-none');
  }

  if (!passwordValida) {
      document.getElementById('alertaPassword').classList.remove('d-none');
  } else {
      document.getElementById('alertaPassword').classList.add('d-none');
  }

  if (emailValido && passwordValida) {
      document.getElementById('alertFormulario').classList.remove('d-none');
      setTimeout(() => {
          document.getElementById('alertFormulario').classList.add('d-none');
      }, 3000);
      
      return true;
  }

  return false;
}

function validarEmail(email) {
  const regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return regexEmail.test(email);
}

function validarPassword(password) {
  const regexPassword = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
  return regexPassword.test(password);
}


// Validar longitud de un numero

function validarNum(input) {
  console.log('Entra a la funcion validar numero');
  if (input.value.length > 6) {
    input.value = input.value.slice(0, 6);
  }
 }

//Calcular edad
function calculared() {
  const fechaNacimiento = document.getElementById('FN').value;
  const fechaNacimientoDate = new Date(fechaNacimiento);
  const hoy = new Date();
  let edad = hoy.getFullYear() - fechaNacimientoDate.getFullYear();
  const mes = hoy.getMonth() - fechaNacimientoDate.getMonth();
  const dia = hoy.getDate() - fechaNacimientoDate.getDate();

  
  if (mes < 0 || (mes === 0 && dia < 0)) {
    edad--; 
  }

  const mayorEdad = edad >= 18 ? "Mayor de Edad" : "Menor de Edad";
  document.getElementById('modalEdad').textContent = `Edad: ${edad} (${mayorEdad})`;
}
