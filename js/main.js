import './eliminarActivo.js';
import './crearNuevoActivo.js';
function limpador() {
    let main = document.getElementById('principal')
    let titulo = document.querySelector('.title')
    titulo.innerHTML='';
    main.innerHTML='';
}
let btnEliminarActivo = document.getElementById('activosEliminar');
btnEliminarActivo.addEventListener('click',function(){
    limpador();
    let creator = document.querySelector('.principal')
    let base = `<eliminar-activo></eliminar-activo>`
    let tdic = document.createElement('div');
    tdic.classList.add('informacion')
    tdic.innerHTML = base;
    creator.appendChild(tdic);
});
let btnAgregarActivos = document.getElementById('agregarActivos');
btnAgregarActivos.addEventListener('click',function(){
    limpador();
    let creator = document.querySelector('.principal')
    let base = `<crear-activo></crear-activo>`
    let tdic = document.createElement('div');
    tdic.classList.add('informacion')
    tdic.innerHTML = base;
    creator.appendChild(tdic);
});