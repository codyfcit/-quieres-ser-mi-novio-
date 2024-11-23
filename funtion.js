const buttonSi = document.getElementById('buttonSi');
const buttonNo = document.getElementById('buttonNo');
const result = document.getElementById('result');
let moveX = 0; // Variable para la posición del botón "No"
let moveY = 0; // Variable para la posición vertical del botón "No"

// Acción al hacer clic en el botón "Sí"
buttonSi.addEventListener('click', () => {
  result.style.display = "block";
  buttonSi.disabled = true;
  buttonNo.disabled = true;
});

// Movimiento aleatorio para el botón "No"
buttonNo.addEventListener('mouseover', () => {
  moveX = Math.random() * window.innerWidth * 0.8; // Posición horizontal aleatoria
  moveY = Math.random() * window.innerHeight * 0.8; // Posición vertical aleatoria
  buttonNo.style.left = moveX + 'px';
  buttonNo.style.top = moveY + 'px';
});

// Previene que el botón "No" se seleccione o se quede fijo
buttonNo.addEventListener('mousedown', (event) => {
  event.preventDefault();
});
