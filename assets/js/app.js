// Obtener referencia al botón de suscripción
var subscribeButton = document.querySelector('.input_button');

// Función para mostrar el mensaje
function showMessage(message) {
    var messageElement = document.getElementById('message');
    messageElement.textContent = message;
  }
  //Función para validar el formato del email  "texto@texto.texto"
function validateEmail(email) {
    // Expresión regular para validar el formato del email
    var regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    
    if (regex.test(email)) {
    return true; // El email es válido
    } else {
    return false; // El email no es válido
    }
}
function clearInputValue(inputSelector){
    document.querySelector(inputSelector).value= ''
} 

function showErrorImage(errorSelector){
    document.querySelector(errorSelector).style.opacity = '1';
}
function hideErrorImage(errorSelector){
document.querySelector(errorSelector).style.opacity = '0';
}
function applyBorder() {
    var inputElement = document.querySelector('.first_input');
    inputElement.style.border = '2px solid var(--soft-red)';
  }
function removeBorder() {
    var inputElement = document.querySelector('.first_input');
    inputElement.style.border = '1px solid var(--desaturated-red)';
  }
// Agregar evento de clic al botón
subscribeButton.addEventListener('click', function(event) {
  event.preventDefault(); // Evitar que el formulario se envíe

  // Obtener el valor del campo de entrada
  var inputValue = document.querySelector('.first_input').value;

  // Realizar las validaciones
  
  if (inputValue.trim() === '') {
    showMessage('Please provide a valid email'); // Campo vacío
    showErrorImage('.error-img');
    applyBorder();
  } else if (!validateEmail(inputValue)) {
    showMessage('Please provide a valid email'); // Email no valido
    showErrorImage('.error-img');
    applyBorder();
  } else if (inputValue.length < 5) {
    showMessage('Please provide a valid email'); // Menos de 5 letras
    showErrorImage('.error-img');
    applyBorder();
  } else {
    showMessage('Check you email please'); // Mensaje vacío (sin errores)
    hideErrorImage('.error-img');
    removeBorder();
  }
  clearInputValue('.first_input');
});
