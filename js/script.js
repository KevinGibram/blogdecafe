//querySelector
const heading = document.querySelector(' .header__texto h2'); // retorna de 0 a 1max elemento
heading.textContent = "nuevo texto"

//querySelectorAll
const enlaces = document.querySelectorAll(' .navegacion a');
enlaces[5].textContent = " number 5"


//agregar eventos

console.log (1);

//cuando carge el html, css, js
window.addEventListener("load", function(){
    console.log (4);
});

// cuando cargue el html pero no espera ni css ni js
document.addEventListener("DOMContentLoaded", function(){
    console.log (3);
});

console.log (2);


