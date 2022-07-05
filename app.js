
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

//////////elegir entre texto e imagen//////////

const texto = document.getElementById('texto')
const imagen = document.getElementById('imagen')

const btnImg = document.getElementById('btnImg')
const btnTxt = document.getElementById('btnTxt')

btnImg.addEventListener('click', () => {
  texto.style.display = 'none'
  imagen.style.display = 'block'
})
 
btnTxt.addEventListener('click', () => {
  imagen.style.display = 'none'
  texto.style.display = 'block'
})

///////////////////modo claro/oscuro///////////////////////

// const btnModoOscuro = document.getElementById('btnModoOscuro')
// const encabezado = document.getElementById('encabezado')
// const vistaMeme = document.getElementById('vistaMeme') 

// btnModoOscuro.addEventListener('click', () => {
//   encabezado.classList.toggle('modo-oscuro')
//   vistaMeme.classList.toggle('modo-oscuro')
// })

const btnModoOscuro = document.getElementById('btnModoOscuro')
const encabezado = document.getElementById('encabezado')
const vistaMeme = document.getElementById('vistaMeme')
const contenedorBody = document.getElementById('contenedorBody') 
const textoAside = document.getElementById('texto')
const imagenAside = document.getElementById('imagen')
const titulos2 = document.querySelectorAll('h2')

console.log(titulos2)


btnModoOscuro.addEventListener('input', () => {
  contenedorBody.classList.toggle('modo-oscuro2')
  encabezado.classList.toggle('modo-oscuro')
  vistaMeme.classList.toggle('modo-oscuro')
  textoAside.classList.toggle('modo-oscuro3')  
  imagenAside.classList.toggle('modo-oscuro3')

  for ( let i = 0; i < titulos2.length; i++) {
    titulos2[i].classList.toggle('modo-oscuro4')

  }
  
  
})




// btnModoOscuro.addEventListener('click', () => { //el evento click en html se le debe poner el on adelante => onClick
//   // event.preventDefault();
//   // console.log('asdnsad')
//   document.body.classList.add('modo-oscuro'); //probar tb con .toggle que hace q si tiene la clase se la quita y si no la tiene se la pone
//   // document.body.classList.toggle('una');
//   document.body.classList.remove('modo-claro');
// })



//////////escribir en el meme///////////////////

const TopTextInput = document.getElementById('TopTextInput') // tengo el input de donde tomar la info
const BotTextInput = document.getElementById('BotTextInput') // tengo el input de donde tomar la info
const renderText = document.getElementById('renderText')// Tengo el parrafo donde voy a mostrar lo que escribe el usuario

// const btnModoOscuro = document.getElementById('modo-oscuro'); 

TopTextInput.addEventListener('input', (event) => {
    const textoIngresado = event.target.value;  //ESTO ES LO QUE EL USUARIO EST'A ESCRIBIENDO
    renderTopText.innerHTML = textoIngresado;
  })

BotTextInput.addEventListener('input', (event) => {
    const textoIngresado = event.target.value;  //ESTO ES LO QUE EL USUARIO EST'A ESCRIBIENDO
    renderBotText.innerHTML = textoIngresado;
  })



//Agregar imagen con url

// const imagenMeme = document.getElementById('img')


// const actualizarImagen = (evento) => {
//   if (evento.target.value.length !== 0) {
//     $('imagenMeme').style.backgroundImage = `url("${evento.target.value}")`
//   }
// }


document.addEventListener('DOMContentLoaded', function() {
  var elems = document.querySelectorAll('select');
  var instances = M.FormSelect.init(elems);
})

//*******ME TRAIGO LA IMAGEN*******//
const img = document.getElementById('img')

//////////////FILTROS//////////////////////////////
//***********FINCION QUE NADA POR NO ACUMULA********//


// // //filtro brillo

// const pointsBrillo = document.getElementById('pointsBrillo');

// pointsBrillo.addEventListener('input', (event) => {
//   img.style.filter = `brightness(${event.target.value})`
// })

// // //filtro Opacidad

// const pointsOpacidad = document.getElementById('pointsOpacidad');

// pointsOpacidad.addEventListener('input', (event) => {
//   img.style.filter = `opacity(${event.target.value})`
// })

// // //filtro contraste

// const pointsContraste = document.getElementById('pointsContraste');

// pointsContraste.addEventListener('input', (event) => {
//   img.style.filter = `contrast(${event.target.value}%)`
// })

// // //filtro Desenfoque blur

// const pointsDesenfoque = document.getElementById('pointsDesenfoque');

// pointsDesenfoque.addEventListener('input', (event) => {
//   img.style.filter = `blur(${event.target.value}px)`
// })

// // // Filtro escala de grises

// const pointsGrises = document.getElementById('pointsGrises');

// pointsGrises.addEventListener('input', (event) => {
//   img.style.filter = `grayscale(${event.target.value}%)`
// })

// // // filtro Sepia

// const pointsSepia = document.getElementById('pointsSepia');

// pointsSepia.addEventListener('input', (event) => {
//   img.style.filter = `sepia(${event.target.value}%)`
// })

// // // filtro Hue-rotation

// const pointsHue = document.getElementById('pointsHue');

// pointsHue.addEventListener('input', (event) => {
//   img.style.filter = `hue-rotation(${event.target.value}deg)`
// })

// // //filtro Saturado

// const pointsSaturado = document.getElementById('pointsSaturado');

// pointsSaturado.addEventListener('input', (event) => {
//   img.style.filter = `saturation(${event.target.value}%)`
// })

// // //filtro Negativo invert

// const pointsNegativo = document.getElementById('pointsNegativo');

// pointsNegativo.addEventListener('input', (event) => {
//   img.style.filter = `invert(${event.target.value})`
// })

//*****************btn reestablecer filtros

// const btnReestablecerFiltros = document.getElementById('btnReestablecerFiltros') 
// btnReestablecerFiltros.addEventListener('onclick', (event) => {
//   pointsNegativo.value = '1' 
// })


// const filtros = () => {
//   console.log(pointsBrillo.value)
// }


//***********como lo hizo el profe y ruth ********************//

/////////////////////////////////////

//  const filter = () => {
  // console.log(brillo.value)
  // console.log(opacity.value)
  // brilloP.innerHTML = El valor actual del brillo es: ${brillo.value}%
  // opacityP.innerHTML = El valor actual del brillo es: ${opacity.value}%

  // img.style.filter = `brightness(${brillo.value}), opacity(${opacity.value})`;
  
  ///////////////////////////////////////////////////
  
//   const pointsNegativo = document.getElementById('pointsNegativo');

// pointsNegativo.addEventListener('input', (event) => {
//   const valorActualNegativo = event.target.value;
//   img.style.filter = `invert(${valorActualNegativo})`
// })

//********************ATENTA SOFI ******************************/
const pointsBrillo = document.getElementById('pointsBrillo')
const pointsOpacidad = document.getElementById('pointsOpacidad')
const pointsContraste = document.getElementById('pointsContraste')
const pointsDesenfoque = document.getElementById('pointsDesenfoque')
const pointsGrises = document.getElementById('pointsGrises')
const pointsSepia = document.getElementById('pointsSepia');
const pointsHue = document.getElementById('pointsHue');
const pointsSaturado = document.getElementById('pointsSaturado')
// let pointsNegativo = document.getElementById('pointsNegativo')

const pointsNegativo = document.getElementById('pointsNegativo');

// const filter = () => { 

// }


const filter = () => {

  console.log(pointsBrillo.value)
  // let pointsBrillo = input.target.value
  img.style.filter = `brightness(${pointsBrillo.value}) opacity(${pointsOpacidad.value}) contrast(${pointsContraste.value}%) blur(${pointsDesenfoque.value}px) grayscale(${pointsGrises.value}%) sepia(${pointsSepia.value}%) hue-rotation(${pointsHue.value}deg) saturation(${pointsSaturado.value}%) invert(${pointsNegativo.value})`
};

pointsBrillo.addEventListener('input', filter)
pointsOpacidad.addEventListener('input', filter)
pointsContraste.addEventListener('input', filter)
pointsDesenfoque.addEventListener('input', filter)
pointsGrises.addEventListener('input', filter)
pointsSepia.addEventListener('input', filter)
pointsHue.addEventListener('input', filter)
pointsSaturado.addEventListener('input', filter)
pointsNegativo.addEventListener('input', filter)

// // dento de la funcion filter, deben meter los filtros que faltan con los valores correspondientes
// // Cualquier duda que tengan avisenme

//////////////////prueba 2 con filtros apra que se acumulen en la imagen
// const filtros = () => {

// //filtro brillo
// const pointsBrillo = document.getElementById('pointsBrillo');

// pointsBrillo.addEventListener('input', (event) => {
//   const valorActualBrillo = event.target.value;
// })

// //filtro Opacidad

// const pointsOpacidad = document.getElementById('pointsOpacidad');

// pointsOpacidad.addEventListener('input', (event) => {
//   const valorActualOpacidad = event.target.value;

// })

// //filtro contraste

// const pointsContraste = document.getElementById('pointsContraste');

// pointsContraste.addEventListener('input', (event) => {
//   const valorActualContraste = event.target.value;
  
// })

// //filtro Desenfoque blur

// const pointsDesenfoque = document.getElementById('pointsDesenfoque');

// pointsDesenfoque.addEventListener('input', (event) => {
//   const valorActualDesenfoque = event.target.value;
  
// })

// // Filtro escala de grises

// const pointsGrises = document.getElementById('pointsGrises');

// pointsGrises.addEventListener('input', (event) => {
//   const valorActualGrises = event.target.value;
  
// })

// // filtro Sepia

// const pointsSepia = document.getElementById('pointsSepia');

// pointsSepia.addEventListener('input', (event) => {
//   const valorActualSepia = event.target.value;
  
// })

// // filtro Hue-rotation

// const pointsHue = document.getElementById('pointsHue');

// pointsHue.addEventListener('input', (event) => {
//   const valorActualHue = event.target.value;
  
// })

// //filtro Saturado

// const pointsSaturado = document.getElementById('pointsSaturado');

// pointsSaturado.addEventListener('input', (event) => {
//   const valorActualSaturado = event.target.value;
  
// })

// //filtro Negativo invert

// const pointsNegativo = document.getElementById('pointsNegativo');

// pointsNegativo.addEventListener('input', (event) => {
//   const valorActualNegativo = event.target.value;
  
// })

// img.style.filter = `brightness(${valorActualBrillo}) opacity(${valorActualOpacidad}) contrast(${valorActualContraste}%) blur(${valorActualDesenfoque}px) grayscale(${valorActualGrises}%) sepia(${valorActualSepia}%) hue-rotation(${valorActualHue}deg) saturation(${valorActualSaturado}%) invert(${valorActualNegativo})` 

// }

// filtros(pointsBrillo, pointsContraste, pointsDesenfoque, pointsGrises, pointsHue, pointsNegativo, pointsOpacidad, pointsSaturado, pointsSepia)