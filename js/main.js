import './eliminarActivo.js';
import './crearNuevoActivo.js';
function limpador() {
    let main = document.getElementById('principal')
    let titulo = document.querySelector('.title')
    titulo.innerHTML='';
    main.innerHTML='';
}
function reconocer(x) {
    let Elements = document.querySelectorAll(x);
    Elements.forEach(function(event){
        event.addEventListener('click', function(){
            let className = event.className;
            let idName =event.id
            console.log(idName, className);
            
        });
    }); 
}
reconocer(".activos");
reconocer(".marcas");
reconocer(".personas");
reconocer(".estado");
reconocer(".tipoPersona");
reconocer(".tipoMovActivo");
reconocer(".tipos");
reconocer(".asignacion");
function callDelete(name) {
    limpador();
    let creator = document.querySelector('.title')
    let base = `<eliminar-activo name = ${name}></eliminar-activo>`
    let tdic = document.createElement('div');
    tdic.classList.add('informacion')
    tdic.innerHTML = base;
    creator.appendChild(tdic);
}
