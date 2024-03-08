import './eliminarActivo.js';
let btnEliminarActivo = document.getElementById('activosEliminar');
btnEliminarActivo.addEventListener('click',function(){
    let main = document.getElementById('principal')
    let titulo = document.querySelector('.title')
    titulo.innerHTML='';
    main.innerHTML='';
    let creator = document.querySelector('.principal')
    let base = `<eliminar-activo></eliminar-activo>`
    let tdic = document.createElement('div');
    tdic.classList.add('informacion')
    tdic.innerHTML = base;
    creator.appendChild(tdic);
});
