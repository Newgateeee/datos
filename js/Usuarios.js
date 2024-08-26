

function LimpiarForm() {
    document.getElementById('miFormulario').reset();
    document.getElementById('alert').classList.add('d-none');
    document.getElementById('alerta').classList.add('d-none');
}


document.getElementById('NombreU').addEventListener('input', function (e) {
    e.target.value = e.target.value.replace(/[^a-zA-Z\s]/g, '');
  });


// function iniciarSesion() {
//     const email = document.getElementById('loginCorreo').value;
//     const password = document.getElementById('loginPassword').value;

//     const storedEmail = localStorage.getItem('email');
//     const storedPassword = localStorage.getItem('password');

//     if (email === storedEmail && password === storedPassword) {
//         alert('Inicio de sesión exitoso.');
//         document.getElementById('loginAlert').classList.add('d-none');
//     } else {
//         document.getElementById('loginAlert').classList.remove('d-none');
//     }
// }
