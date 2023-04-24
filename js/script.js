//querySelector
const heading = document.querySelector(' .header__texto h2'); // retorna de 0 a 1max elemento
heading.textContent = "nuevo texto"

//querySelectorAll
const enlaces = document.querySelectorAll(' .navegacion a');
enlaces[5].textContent = " number 5"