import './eliminarActivo.js';
import './crearNuevoActivo.js';
import './buscar.js';
import './agregar.js'
import './editar.js';

function limpador() {//limpia la pantalla para agregar el web component
    let main = document.getElementById('principal')
    let titulo = document.querySelector('.title')
    titulo.innerHTML='';
    main.innerHTML='';
}
function reconocer(x) {//obtiene el nombre de la clase y del id de donde se le da click
    let Elements = document.querySelectorAll(x);
    Elements.forEach(function(event){
        event.addEventListener('click', function(){
            let className = event.className;
            let idName =event.id
            if (className == 'activos' && idName =='agregar') {
                callDuck(className,'crear');
            }else{
            switch (idName) {//dependiendo del id se crea llama la funcion para crear el web component
                case 'eliminar':
                    callDuck(className, 'eliminar');
                    break;
                case 'buscar':
                    callDuck(className, 'buscar');
                    break;
                case 'agregar':
                    callDuck(className, 'agregar');
                    break;
                case 'editar':
                    callDuck(className, 'editar');
                    break;
                default:
                    break;
            }
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
function callDuck(name, nameComponent) { //crea el web component dependiendo de lo que le envie la funcion reconocer
    limpador();
    let creator = document.querySelector('.title')
    let base = `<${nameComponent}-activo name = ${name}></${nameComponent}-activo>`
    let tdic = document.createElement('div');
    tdic.classList.add('informacion')
    tdic.innerHTML = base;
    creator.appendChild(tdic);
}


