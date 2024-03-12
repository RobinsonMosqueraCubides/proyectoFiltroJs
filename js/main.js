import './eliminarActivo.js';
import './crearNuevoActivo.js';
import './buscar.js';
import './agregar.js'
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
            if (className == 'activos' && idName =='agregar') {
                webComponentAgregarActivo();
            }
            switch (idName) {
                case 'eliminar':
                    callDuck(className, 'eliminar');
                    break;
                case 'buscar':
                    callDuck(className, 'buscar');
                case 'agregar':
                    callDuck(className, 'agregar')
                default:
                    break;
            }
            
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
function callDuck(name, nameComponent) {
    limpador();
    let creator = document.querySelector('.title')
    let base = `<${nameComponent}-activo name = ${name}></${nameComponent}-activo>`
    let tdic = document.createElement('div');
    tdic.classList.add('informacion')
    tdic.innerHTML = base;
    creator.appendChild(tdic);
}
function webComponentAgregarActivo() {
    limpador();
    let creator = document.querySelector('.title')
    let base = `<crear-activo></crear-activo>`
    let tdic = document.createElement('div');
    tdic.classList.add('informacion')
    tdic.innerHTML = base;
    creator.appendChild(tdic);
}

