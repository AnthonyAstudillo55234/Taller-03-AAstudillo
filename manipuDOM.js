//ANTHONY ASTUDILLO
//EJEMPLO DE CAMBIAR COLOR DE FONDO Y TIPO DE LETRA DE UNA PAGINA WEB USANDO EL DOM

// Crear un botón para cambiar el color de fondo
var botonColor = document.createElement('button');
botonColor.innerHTML = 'Cambiar Color';
document.body.insertBefore(botonColor, document.body.firstChild);

// Crear un botón para cambiar el tipo de letra
var botonFuente = document.createElement('button');
botonFuente.innerHTML = 'Cambiar Tipo de Letra';
document.body.insertBefore(botonFuente, document.body.firstChild);

// Función para generar un color aleatorio
function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

// Función para cambiar el tipo de letra de la página
function cambiarFuente() {
    var fuentes = ['Arial', 'Verdana', 'Georgia', 'Times New Roman', 'Courier New'];
    var fuenteAleatoria = fuentes[Math.floor(Math.random() * fuentes.length)];
    document.body.style.fontFamily = fuenteAleatoria;
}

// Agregar evento de clic al botón de cambiar color
botonColor.addEventListener('click', function() {
    document.body.style.backgroundColor = getRandomColor();
});

// Agregar evento de clic al botón de cambiar fuente
botonFuente.addEventListener('click', function() {
    cambiarFuente();
});
