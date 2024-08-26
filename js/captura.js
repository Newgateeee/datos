function LimpiarForm() {
 
  document.getElementById('miFormulario').reset();
  
  
  document.getElementById('modalNombre').textContent = '';
  document.getElementById('modalApellidoP').textContent = '';
  document.getElementById('modalApellidoM').textContent = '';
  document.getElementById('modalFN').textContent = '';
  document.getElementById('modalGenero').textContent = '';
  document.getElementById('modalCarrera').textContent = '';
  document.getElementById('modalNumeroControl').textContent = '';
  document.getElementById('modalEdad').textContent = '';
}
function limpiarModal(){
  document.getElementById('modalNombre').textContent = '';
  document.getElementById('modalApellidoP').textContent = '';
  document.getElementById('modalApellidoM').textContent = '';
  document.getElementById('modalFN').textContent = '';
  document.getElementById('modalGenero').textContent = '';
  document.getElementById('modalCarrera').textContent = '';
  document.getElementById('modalNumeroControl').textContent = '';
  document.getElementById('modalEdad').textContent = '';
}



function mostrarDatos() {
  const nombre = document.getElementById('Nombre').value;
  const apellidoP = document.getElementById('ApellidoP').value;
  const apellidoM = document.getElementById('ApellidoM').value;
  const fechaNacimiento = document.getElementById('FN').value;
  const genero = document.querySelector('input[name="gridRadios"]:checked').value;
  const carrera = document.getElementById('specificSizeSelect').value;
  const numeroControl = document.getElementById('numerocontrol').value;
 

  document.getElementById('modalNombre').textContent = `Nombre: ${nombre}`;
  document.getElementById('modalApellidoP').textContent = `Apellido Paterno: ${apellidoP}`;
  document.getElementById('modalApellidoM').textContent = `Apellido Materno: ${apellidoM}`;
  document.getElementById('modalFN').textContent = `Fecha de Nacimiento: ${fechaNacimiento}`;
  document.getElementById('modalGenero').textContent = `Género: ${genero}`;
  document.getElementById('modalCarrera').textContent = `Carrera: ${carrera}`;
  document.getElementById('modalNumeroControl').textContent = `Numero de Control: ${numeroControl}`;
  calculared();
}

 document.getElementById('Nombre').addEventListener('input', function (e) {
  e.target.value = e.target.value.replace(/[^a-zA-Z\s]/g, '');
});
document.getElementById('ApellidoP').addEventListener('input', function (e) {
  e.target.value = e.target.value.replace(/[^a-zA-Z\s]/g, '');
});
document.getElementById('ApellidoM').addEventListener('input', function (e) {
  e.target.value = e.target.value.replace(/[^a-zA-Z\s]/g, '');
});



function ValidarCamp() {
  const nombre = document.getElementById('Nombre').value.trim();
  const apellidoP = document.getElementById('ApellidoP').value.trim();
  const apellidoM = document.getElementById('ApellidoM').value.trim();
  const fechaNacimiento = document.getElementById('FN').value.trim();
  const carrera = document.getElementById('specificSizeSelect').value.trim();
  const numeroControl = document.getElementById('numerocontrol').value.trim();
  const alerta = document.getElementById('alerta');
  
  if (nombre === '' || apellidoP === '' || apellidoM === '' || fechaNacimiento === '' || carrera === '' || numeroControl === '') {
    alerta.classList.remove('d-none');
    limpiarModal()
    return false;
  } else {
    alerta.classList.add('d-none');
    mostrarDatos();
    return true;
  }
}