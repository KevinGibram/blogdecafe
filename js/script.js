// //querySelector
// const heading = document.querySelector(' .header__texto h2'); // retorna de 0 a 1max elemento
// heading.textContent = "nuevo texto"

// //querySelectorAll
// const enlaces = document.querySelectorAll(' .navegacion a');
// enlaces[5].textContent = " number 5"


// //agregar eventos

// console.log (1);

// //cuando carge el html, css, js
// window.addEventListener("load", function(){
//     console.log (4);
// });

// // cuando cargue el html pero no espera ni css ni js
// document.addEventListener("DOMContentLoaded", function(){
//     console.log (3);
// });

// console.log (2);

// const btprincipal = document.querySelector('#btprincipal'); //selec un elemento del html

// btprincipal.addEventListener('click', function(evento){ //estamos creando un evento (e, event, evento evt)
//     evento.preventDefault(); //quita la redireccion
//     console.log('cargando evento');
// })
 

//tomar valores de un label
const datos = {
    nombre: '' ,
    email: '',
    textarea: ''
}

 const nombre = document.querySelector('#nombre');
 const email = document.querySelector('#email');
 const textarea = document.querySelector('#textarea');
const formulario = document.querySelector('.formulario');

 nombre.addEventListener('input', leerTexto);
 email.addEventListener('input', leerTexto);
 textarea.addEventListener('input', leerTexto);

//Creando eventos del submit

formulario.addEventListener('submit', function(e){
   e.preventDefault()

   //Validar formulario
    const {nombre, email, textarea} = datos;
    if( nombre === '' || email === '' || textarea === '' ){
        mostarAlerta('Todos los datos son obligatorios' , true);

        return; //Corta la ejecucion del codigo
    }
    
   //Enviar formulario
   mostarAlerta('Enviando Formulario');
})

//Tomando datos del imput
 function leerTexto(e) {
    // console.log(e.target.value);

    datos[e.target.id] = e.target.value;
    // console.log(datos);

}

//Muestra mensaje en pantalla
function mostarAlerta(mensaje, error = null){
    const alerta = document.createElement('P') //creando el parrafo 
    alerta.textContent = mensaje; // agregandole de contenido el mensaje

    if(error){
        alerta.classList.add('error'); //agregando una clase 
    } else {
        alerta.classList.add('envio'); //agregando una clase 
    }

    formulario.appendChild( alerta ); //mostrando en pantalla

    setTimeout(function() {
        alerta.remove(); // eliminando el párrafo después de 3 segundos
      }, 3000);
};
