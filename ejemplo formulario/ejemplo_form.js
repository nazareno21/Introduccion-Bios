function validarFormulario() {
  const nombre = document.getElementById("nombre").value;
  const email = document.getElementById("email").value;
  const telefono = document.getElementById("telefono").value;
  const mensaje = document.getElementById("mensaje").value;

  if (nombre == "" || email == "" || mensaje == "") {
    alert("Por favor complete todos los campos requeridos.");
    return false;
  }

  if (telefono != "" && !/^\d{10}$/.test(telefono)) {
    alert("Por favor ingrese un número de teléfono válido de 10 dígitos.");
    return false;
  }

  return true;
}
