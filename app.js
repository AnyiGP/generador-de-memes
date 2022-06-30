
// const unicoElemento = document.querySelector('#parrafoId2')

// unicoElemento.classList.add('aniadida') // la clase aniadida est'a creada en el css pero no en el html, con classList.add('anidida') que en el css tiene un color de letra azul y un tama;o diferente a los dem'as, le pone ese estilo al #parrafoId2

// //ANIADIR UNA CLASE Y QUITAR OTRA COMO QUE SE MUESTRE TEXTO CUANDO APRIETO BOTON TEXTO Y SE OCULTE IMAGEN, eso lo hago con .remove saco la clase TEXTO y que se vea la otra la de IMAGEN que es igual pero tiene los atributos para modificar de la imagen


// console.log(unicoElemento)

// const quitarClase = document.querySelector('#parrafoId')
// quitarClase.classList.remove('otra') // con .remove saca la clase; con .replace la reemplaza; con .toggle si tiene la clase se la quita y si no la tiene se la agrega => con .toggle QUE SE MUESTRE OSCURO CUANDO ARIETO OSCURO Y CUANDO LO VUELVA A APRETAR SE VEA CLARO.

// console.log(quitarClase)


// //ANIDIR UNA IMAGEN MEDIANTE UNA URL QUE INGRESE EL USUARIO. //agregar imagen, a un DIV vacio del HTML. CREAMOS ELEMENTO DEL HTML, con .createElement('etiquetaDeHtml')

// const img = document.createElement('img')
// img.setAttribute('src', 'url') //'src' es el atributo y la 'url' el valor. 'src' es el atributo que le voy a poner a la variable 'img' 
// img.setAttribute('alt')


// //otra menera seria crear una etiqueta mediante un template string
// const imgQueAgregaElUsuario = //que el usuario ingrese la url en el imput
// const muestraImagenEnElDiv = `<div class='imagenAModificar'> ${imgQueAgregaElUsuario}</div>` 


// //disparar una accion un EVENTO (click) cuando el usuario haga click mediante el HANDLER que es el controlador

// prueba4Boton.addEventListener('click', funcionNombre)

//////////////////////////////////

//AGREGAR UN TEXTO AL INPUT O TEXTAREA, CUANDO EL USUARIO HACE CLICK EN EL IMPUT PARA EMPEZAR A ESCRIBIR

const input = document.getElementById('TopTextInput') // tengo el input de donde tomar la info
const renderText = document.getElementById('renderText')// Tengo el parrafo donde voy a mostrar lo que escribe el usuario
const btnModoOscuro = document.getElementById('modo-oscuro'); 

input.addEventListener('input', (event) => {
    const textoIngresado = event.target.value;  //ESTO ES LO QUE EL USUARIO EST'A ESCRIBIENDO
    renderText.innerHTML = textoIngresado;
  })

/////////////////////////////////////////////////////////////

btnModoOscuro.addEventListener('click', () => { //el evento click en html se le debe poner el on adelante => onClick
  // event.preventDefault();
  // console.log('asdnsad')
  document.body.classList.toggle('modo-oscuro'); //toggle lo que hace es si tiene la clase se la quito y si no la tiene se la pongo
  // document.body.classList.toggle('una');
})

///////////////////////////////////////////////////////////

const img = document.getElementById('img')

//filtro brillo
const pointsBrillo = document.getElementById('pointsBrillo');
const rangeBrillo = document.getElementById('rangeBrillo');

pointsBrillo.addEventListener('input', (event) => {
  console.log(event.target.value)
  const valorActualBrillo = event.target.value;
  img.style.filter = `brightness(${valorActualBrillo})`
})

//filtro Opacidad

const pointsOpacidad = document.getElementById('pointsOpacidad');
console.log(pointsOpacidad) //me trae el input del html
const rangeOpacidad = document.getElementById('rangeOpacidad');
// const img = document.getElementById('img');

pointsOpacidad.addEventListener('input', (event) => {
  console.log(event.target.value)
  const valorActualOpacidad = event.target.value;
  img.style.filter = `opacity(${valorActualOpacidad})`
})

//filtro contraste

const pointsContraste = document.getElementById('pointsContraste');
console.log(pointsContraste) //me trae el input del html
const rangeContraste = document.getElementById('rangeContraste');
// const img = document.getElementById('img');

pointsContraste.addEventListener('input', (event) => {
  console.log(event.target.value)
  const valorActualContraste = event.target.value;
  img.style.filter = `contrast(${valorActualContraste}%)`
})

//filtro Desenfoque blur

const pointsDesenfoque = document.getElementById('pointsDesenfoque');
console.log(pointsDesenfoque) //me trae el input del html
const rangeDesenfoque = document.getElementById('rangeDesenfoque');
// const img = document.getElementById('img');

pointsDesenfoque.addEventListener('input', (event) => {
  console.log(event.target.value)
  const valorActualDesenfoque = event.target.value;
  rangeDesenfoque.innerHTML = `Desenfoque: ${valorActualDesenfoque}` //me esta escribiendo en la pantalla el valor del rango en % a medida que lo muevo, lo imprime en el parrafo que tiene el id=range el valorActual que ingresa el usuario.
  img.style.filter = `blur(${valorActualDesenfoque}px)`
})

// Filtro escala de grises

const pointsGrises = document.getElementById('pointsGrises');
console.log(pointsGrises) //me trae el input del html
const rangeGrises = document.getElementById('rangeGrises');
// const img = document.getElementById('img');

pointsGrises.addEventListener('input', (event) => {
  console.log(event.target.value)
  const valorActualGrises = event.target.value;
  rangeGrises.innerHTML = `Escala de Grises: ${valorActualGrises}` //me esta escribiendo en la pantalla el valor del rango en % a medida que lo muevo, lo imprime en el parrafo que tiene el id=range el valorActual que ingresa el usuario.
  img.style.filter = `grayscale(${valorActualGrises}%)`
})

// filtro Sepia

const pointsSepia = document.getElementById('pointsSepia');
console.log(pointsSepia) //me trae el input del html
const rangeSepia = document.getElementById('rangeSepia');
// const img = document.getElementById('img');

pointsSepia.addEventListener('input', (event) => {
  console.log(event.target.value)
  const valorActualSepia = event.target.value;
  rangeSepia.innerHTML = `Sepia: ${valorActualSepia}%` //me esta escribiendo en la pantalla el valor del rango en % a medida que lo muevo, lo imprime en el parrafo que tiene el id=range el valorActual que ingresa el usuario.
  img.style.filter = `sepia(${valorActualSepia}%)`
})

// filtro Hue-rotation

const pointsHue = document.getElementById('pointsHue');
console.log(pointsHue) //me trae el input del html
const rangeHue = document.getElementById('rangeHue');
// const img = document.getElementById('img');

pointsHue.addEventListener('input', (event) => {
  console.log(event.target.value)
  const valorActualHue = event.target.value;
  rangeHue.innerHTML = `Hue-rotation: ${valorActualHue}deg` //me esta escribiendo en la pantalla el valor del rango a medida que lo muevo, lo imprime en el parrafo que tiene el id=range el valorActual que ingresa el usuario.
  img.style.filter = `hue-rotation(${valorActualHue}deg)`
})

//filtro Saturado

const pointsSaturado = document.getElementById('pointsSaturado');
console.log(pointsSaturado) //me trae el input del html
const rangeSaturado = document.getElementById('rangeSaturado');
// const img = document.getElementById('img');

pointsSaturado.addEventListener('input', (event) => {
  console.log(event.target.value)
  const valorActualSaturado = event.target.value;
  rangeSaturado.innerHTML = `Saturado: ${valorActualSaturado}%` //me esta escribiendo en la pantalla el valor del rango en % a medida que lo muevo, lo imprime en el parrafo que tiene el id=range el valorActual que ingresa el usuario.
  img.style.filter = `saturation(${valorActualSaturado}%)`
})



//filtro Negativo invert

const pointsNegativo = document.getElementById('pointsNegativo');
console.log(pointsNegativo) //me trae el input del html
const rangeNegativo = document.getElementById('rangeNegativo');
// const img = document.getElementById('img');

pointsNegativo.addEventListener('input', (event) => {
  console.log(event.target.value)
  const valorActualNegativo = event.target.value;
  rangeNegativo.innerHTML = `Negativo ${valorActualNegativo}` //me esta escribiendo en la pantalla el valor del rango en % a medida que lo muevo, lo imprime en el parrafo que tiene el id=range el valorActual que ingresa el usuario.
  img.style.filter = `invert(${valorActualNegativo})`
})



