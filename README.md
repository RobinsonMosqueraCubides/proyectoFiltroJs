#### <u>*Integrantes:*</u>

*Robinson Mosquera Cubides*

*Sara Lucia Lozano Rueda*



### JSON base pal archivo

```JS
{
  "activos": [
    {
      "id": "01",
      "CodTransaccion": "CT001",
      "NroFormulario": "F12345",
      "idMarca": "M001",
      "idCategoria": "C001",
      "idTipo": "T001",
      "valorUnitario": 500,
      "idProveedor": "P001",
      "nroSerial": "SN123456",
      "idEmpresaResponsable": "E001",
      "idEstado": "ES001"
    },
    {
      "id": "2",
      "codTrans": "311",
      "NroFormulario": "142354",
      "nroSerial": "FRE234345",
      "idMarca": "M003",
      "idCategoria": "C001",
      "idProveedor": "P001",
      "valorUnitario": "500000",
      "idEmpresa": "E003",
      "idEstado": "ES002"
    },
    {
      "id": "03",
      "codTrans": "327",
      "NroFormulario": "132412",
      "nroSerial": "SN1345234234",
      "idMarca": "M001",
      "idCategoria": "C001",
      "idProveedor": "P001",
      "valorUnitario": "500000",
      "idEmpresa": "E003",
      "idEstado": "ES002"
    }
  ],
  "proveedor": [
    {
      "id": "P001",
      "nombre": "Proveedor Ejemplo",
      "email": "proveedor@example.com"
    }
  ],
  "marcas": [
    {
      "id": "M001",
      "nombre": "LG"
    },
    {
      "id": "M002",
      "nombre": "Compumax"
    },
    {
      "id": "M003",
      "nombre": "Logitech"
    },
    {
      "id": "M004",
      "nombre": "BENQ"
    },
    {
      "id": "M005",
      "nombre": "ASUS"
    },
    {
      "id": "M006",
      "nombre": "Lenovo"
    },
    {
      "id": "M007",
      "nombre": "HP"
    }
  ],
  "estado": [
    {
      "id": "ES001",
      "nombre": "Asignado"
    },
    {
      "id": "ES002",
      "nombre": "No Asignado"
    },
    {
      "id": "ES003",
      "nombre": "Dado de baja"
    },
    {
      "id": "ES002",
      "nombre": "En reparacion"
    }
  ],
  "asignacion": [
    {
      "id": "AS001",
      "fecha": "2024-03-05",
      "idResponsable": "RP001"
    }
  ],
  "personas": [
    {
      "id": "RP001",
      "nombre": "Responsable Ejemplo",
      "email": "responsable@example.com",
      "idTipoPersona": "TP001"
    }
  ],
  "categorias": [
    {
      "id": "C001",
      "nombre": "Equipo de computo"
    },
    {
      "id": "C002",
      "nombre": "Electrodomestico"
    },
    {
      "id": "C003",
      "nombre": "Juego"
    }
  ],
  "tipoPersona": [
    {
      "id": "TP001",
      "nombre": "Empleado"
    }
  ],
  "tipoMovActivo": [
    {
      "id": "TM001",
      "nombre": "Movimiento de Ejemplo"
    }
  ],
  "historialActivo": [
    {
      "id": "H001",
      "idActivo": "01",
      "fecha": "2024-03-05",
      "idResponsable": "RP001",
      "idEstado": "ES001"
    }
  ],
  "telefonoPersona": [
    {
      "id": "TPH001",
      "nro": "+123456789",
      "ubicacion": "Oficina",
      "idPersona": "RP001"
    }
  ],
  "tipos": [
    {
      "id": "TA001",
      "nombre": "Monitor"
    },
    {
      "id": "TA002",
      "nombre": "CPU"
    },
    {
      "id": "TA003",
      "nombre": "Teclado"
    },
    {
      "id": "TA004",
      "nombre": "Mouse"
    },
    {
      "id": "TA005",
      "nombre": "Aire acondicionado"
    },
    {
      "id": "TA006",
      "nombre": "Portatil"
    },
    {
      "id": "TA007",
      "nombre": "Impresora"
    }
  ],
  "detalleMovimiento": [
    {
      "id": "DM001",
      "fecha": "2024-03-05",
      "idActivo": "01",
      "comentario": "Movimiento de ejemplo",
      "idAsignacion": "AS001"
    }
  ],
  "empresa": [
    {
      "id": "E001",
      "nombre": "Campuslands"
    },
    {
      "id": "E002",
      "nombre": "Grupo bien pensado"
    },
    {
      "id": "E003",
      "nombre": "Contro de mercancias"
    }
  ],
  "codTrans": [
    {
      "id": "324",
      "nombre": "324"
    },
    {
      "id": "311",
      "nombre": "311"
    },
    {
      "id": "111",
      "nombre": "111"
    },
    {
      "id": "327",
      "nombre": "327"
    }
  ]
}
```



## MAIN.JS

```js
import './eliminarActivo.js';
import './crearNuevoActivo.js';
import './buscar.js';
import './agregar.js'
import './editar.js';

```

 Se importan diferentes modulos que contienen funcionalidades de las distintas opciones del menu.

- limpador(): Esta función limpia la pantalla al borrar el contenido de los elementos HTML con los IDs 'principal' y '.title'.

- reconocer(x): Recibe un selector CSS (x) y agrega un evento de clic a todos los elementos que coinciden con ese selector.

  

**callDuck: Crea un nuevo web component**

```js
function callDuck(name, nameComponent) { //crea el web component dependiendo de lo que le envie la funcion reconocer
    limpador();
    let creator = document.querySelector('.title')
    let base = `<${nameComponent}-activo name = ${name}></${nameComponent}-activo>`
    let tdic = document.createElement('div');
    tdic.classList.add('informacion')
    tdic.innerHTML = base;
    creator.appendChild(tdic);
}
```



# ELIMINARACTIVO.JS

```js
  obtenerInformacion(){
    let input = this.querySelector('#inputB');
    this.querySelector('#buscar').addEventListener('click',() => {
        let data = input.value.toLocaleLowerCase();
        this.buscarCoincidencia(data);
    })
}
```



Este método configura un evento de clic en el botón de búsqueda. Cuando  se hace clic, obtiene el valor del campo de entrada de búsqueda y llama  al método `buscarCoincidencia()` para buscar activos coincidentes.

```js
async buscarCoincidencia(activoEliminar){
    try {
        let response = await fetch(`http://localhost:3000/${this.name}`)
        let data = await response.json(); 
        console.log(data);
        data.forEach(data => {
          if (data.nombre.toLocaleLowerCase().includes(activoEliminar)) {
            console.log(data.nombre);
            let divBuscador = this.querySelector('.eliminar');
            let informacion = `<label for="borrar" id="idAvtivo">${data.id}</label><label for="borrar" id="name">${data.nombre}</label><i class='bx bxs-trash' id="borrar"></i>`
                let tdiv = document.createElement('div');
                tdiv.classList.add('listaBuscador')
                tdiv.innerHTML = informacion;
                divBuscador.appendChild(tdiv);
          }}

        )
        this.botonEliminar();
      }
    catch {
        
    }
}
```

Basicamente es pal buscador, donde le perimite al usuario escribir y en base a lo que escribio lo compara y devuelve la coincidencia.

```js
botonEliminar() {
  let btnEliminar = document.querySelectorAll('.listaBuscador');
  btnEliminar.forEach(elem => {
    elem.addEventListener('click', () => {
      let id = elem.querySelector('label').innerText;
      let confirmar = confirm('¿Seguro que desea eliminar?');
      if (confirmar) {
        this.eliminar(id);
      }
    });
  });
}

async eliminar(idActivo) {
  try {
      let response = await fetch(`http://localhost:3000/${this.name}/${idActivo}`,{
          method: 'DELETE',
      });
  } catch {
      
  }
}
```

esto lo que hace es mandarle la solicitud al json para eliminar el dato que buscamos. nos hizo falta el condicional ( 😔 ), para que solo se deje eliminar si el activo es dado de baja.

###### y pos bueno el resto de funcionalidades usa el mismo formato porque las usamos de base para crear las otras funciones.

en cuanto a las estructuras del html lo que se hizo fue una pagina principal el ('index.html') y se cargo la informacion dinamicamente 

```html
<body>
    <nav>
        <ul>
            <li>
                <a href="#" class="icon">
                    <img src="storage/image/logo.png" alt="" class="logo">
                    <h1>Campuslands</h1>
                </a>
            </li>
            <div class="main">
                <p>
                    PRINCIPAL
                </p>
            </div>
            <li class="desplegable">
                <div class="forms">
                    <div class="conIcon">
                        <i class='bx bxs-chart'></i>
                        <h3>Activos</h3>
                    </div>
                    <div class="desForm">
                        <div class="activos" id="agregar">
                            <p>Agregar</p>
                        </div>
                        <div class="activos" id="editar">
                            <p>Editar</p>
                        </div>
                        <div class="activos" id="eliminar">
                            <p>Eliminar</p>
                        </div>
                        <div class="activos" id="buscar">
                            <p>Buscar</p>
                        </div>
                    </div>
                </div>
            </li>
            <li class="desplegable">
                <div class="forms">
                    <div class="conIcon">
                        <i class='bx bxs-window-alt'></i>
                        <h3>Marcas</h3>
                    </div>
                    <div class="desForm">
                        <div class="marcas" id="agregar">
                            <p>Agregar</p>
                        </div>
                        <div class="marcas" id="editar">
                            <p>Editar</p>
                        </div>
                        <div class="marcas" id="eliminar">
                            <p>Eliminar</p>
                        </div>
                        <div class="marcas" id="buscar">
                            <p>Buscar</p>
                        </div>
                    </div>
            </li>
            <li class="desplegable">
                <div class="forms">
                    <div class="conIcon">
                        <i class='bx bx-user'></i>
                        <h3>Persona</h3>
                    </div>
                    <div class="desForm">
                        <div class="personas" id="agregar">
                            <p>Agregar</p>
                        </div>
                        <div class="personas" id="editar">
                            <p>Editar</p>
                        </div>
                        <div class="personas" id="eliminar">
                            <p>Eliminar</p>
                        </div>
                        <div class="personas" id="buscar">
                            <p>Buscar</p>
                        </div>
                    </div>
            </li>
            <li class="desplegable">
                <div class="forms">
                    <div class="conIcon">
                        <i class='bx bx-wrench'></i>
                        <h3>Estado</h3>
                    </div>
                    <div class="desForm">
                        <div class="estado" id="agregar">
                            <p>Agregar</p>
                        </div>
                        <div class="estado" id="editar">
                            <p>Editar</p>
                        </div>
                        <div class="estado" id="eliminar">
                            <p>Eliminar</p>
                        </div>
                        <div class="estado" id="buscar">
                            <p>Buscar</p>
                        </div>
                    </div>
            </li>
            <li class="desplegable">
                <div class="forms">
                    <div class="conIcon">
                        <i class='bx bx-street-view'></i>
                        <h3>tipo Persona</h3>
                    </div>
                    <div class="desForm">
                        <div class="tipoPersona" id="agregar">
                            <p>Agregar</p>
                        </div>
                        <div class="tipoPersona" id="editar">
                            <p>Editar</p>
                        </div>
                        <div class="tipoPersona" id="eliminar">
                            <p>Eliminar</p>
                        </div>
                        <div class="tipoPersona" id="buscar">
                            <p>Buscar</p>
                        </div>
                    </div>
            </li>
            <li class="desplegable">
                <div class="forms">
                    <div class="conIcon">
                        <i class='bx bxs-devices'></i>
                        <h3>tipo MovAct</h3>
                    </div>
                    <div class="desForm">
                        <div class="tipoMovActivo" id="agregar">
                            <p>Agregar</p>
                        </div>
                        <div class="tipoMovActivo" id="editar">
                            <p>Editar</p>
                        </div>
                        <div class="tipoMovActivo" id="eliminar">
                            <p>Eliminar</p>
                        </div>
                        <div class="tipoMovActivo" id="buscar">
                            <p>Buscar</p>
                        </div>
                    </div>
            </li>
            <li class="desplegable">
                <div class="forms">
                    <div class="conIcon">
                        <i class='bx bxl-graphql'></i>
                        <h3>tipo Act</h3>
                    </div>
                    <div class="desForm">
                        <div class="tipos" id="agregar">
                            <p>Agregar</p>
                        </div>
                        <div class="tipos" id="editar">
                            <p>Editar</p>
                        </div>
                        <div class="tipos" id="eliminar">
                            <p>Eliminar</p>
                        </div>
                        <div class="tipos" id="buscar">
                            <p>Buscar</p>
                        </div>
                    </div>
            </li>
            <li class="desplegable">
                <div class="forms">
                    <div class="conIcon">
                        <i class='bx bx-clipboard'></i>
                        <h3>Asignacion</h3>
                    </div>
                    <div class="desForm">
                        <div class="asignacion" id="agregarActivos">
                            <p>Asignar Activos</p>
                        </div>
                        <div class="asignacion" id="editar">
                            <p>Retornar activos</p>
                        </div>
                    </div>
            </li>
        </ul>
    </nav>
    <main>
        <section class="header">
        </section>
        <section class="informacion">
            <div class="title">
                <h2>Bienvenido!</h2>
                <h4>Listo para la aventura de recorrer el inventario Campuslands</h4>
            </div>
            <br><br><br>
            <div class="principal" id="principal">
                <div id="opciones">
                    <i class='bx bx-plus' id="icon"></i>
                    <div>
                        <h3>Crea o agrega items </h3>
                        <br>
                        <button><strong>AGREGAR</strong></button>
                    </div>
                </div>
                <div id="opciones">
                    <i class='bx bx-edit' id="icon"></i>
                    <div>
                        <h3>Editar </h3>
                        <br>
                        <button><strong>AGREGAR</strong></button>
                    </div>
                </div>
                <div id="opciones">
                    <i class='bx bxs-trash' id="icon"></i>
                    <div>
                        <h3>Eliminar </h3>
                        <br>
                        <button><strong>AGREGAR</strong></button>
                    </div>
                </div>
            </div>

        </section>
    </main>
</body>

```



<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="https://unpkg.com/boxicons@latest/css/boxicons.min.css">
    <link rel="stylesheet" href="css/style.css">
    <script type="module" src="js/main.js" defer></script>
    <link rel="shortcut icon" href="storage/image/logo.png" type="image/x-icon">
    <title>Inventario</title>
</head>

y bueno esas son las conexiones con los scripts y el css.