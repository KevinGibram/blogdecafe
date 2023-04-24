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

const btclick = document.querySelector('boton--principal'); //selec un elemento del html

document.addEventListener('click', function(evento){ //estamos creando un evento (e, event, evento evt)
    console.log(evento);
    evento.preventDefault(); //quita la redireccion
    console.log('cargando evento');
})