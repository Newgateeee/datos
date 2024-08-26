// function ingresar()
// {
//     window.location.href='Menu.html';

// }
function validarFormulario() {
    const Usu = 'lore';
    const pass = '123';

    const usuario = document.getElementById('Usuario').value;
    const contraseña = document.getElementById('pass').value;
    const alerta = document.getElementById('alerta');
    if (usuario.trim() === '' || contraseña.trim() === '') {
        return false;
    }
    if (usuario === Usu && contraseña === pass) {
        window.location.href = 'Menu.html';
        return true;
    } else {
    
        alerta.classList.remove('d-none');
        return false;
    }

}
function limpiar()
{
    document.getElementById('alerta').classList.add('d-none');
}

// function validarpASS() {
  
//     const password = document.getElementById('password').value;

    
//     let passwordValida = validarPassword(password);


//     if (!passwordValida) {
//         document.getElementById('alerta').classList.remove('d-none');
//     } else {
//         document.getElementById('alerta').classList.add('d-none');
//     }

//     if (passwordValida) {
//         alert('Formulario válido.');
//         window.location.href = 'Menu.html';
//         return true;
//     }

//     return false;
// }
// function validarPassword(password) {
//     const regexPassword = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
//     return regexPassword.test(password);
// }