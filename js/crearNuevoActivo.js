export class nuevoActivo extends HTMLElement{
    constructor(){
        super();
        this.render();
        this.nombreSelect();
        this.obtenerInformacion();
    }
    render(){
        this.innerHTML = `<style>
        @import url('../css/nuevoActivo.css');
      </style>
      <link rel="stylesheet" href="https://unpkg.com/boxicons@latest/css/boxicons.min.css">
      <div class="agregar">
                <h4>Activo</h4>
                <div class="formulario">
                    <p>Codigo transaccion</p>
                    <div id = "codTrans">
                    </div>
                    <p>Nro formulario</p>
                    <input class = 'NmrFormulario' type="number" placeholder="966217120">
                    <p>Nro de serial.</p>
                    <input class= 'nroSerial' type="text" placeholder="G191970126091010373">
                    <p>Id marca</p>
                    <div id = "marcas">
                    </div>
                    <p>Id Categoria</p>
                    <div id = "categorias">
                    </div>
                    <p>Id Proveedor</p>
                    <div id = "proveedor">
                    </div>
                    <p>Valor unitario</p>
                    <input class = 'valorUnitario' type="number" placeholder="200">
                    <p>Id empresa responsable</p>
                    <div id = "empresa">
                    </div>
                    <p>Id estado</p>
                    <div id = "estado">
                    </div>
                    <h6>*Recuerda rellenar todo la infomacion para que se registre correctamente</h6>
                    <br>
                    <br>
                    <div id="boton">
                        <button><strong>Crear</strong></button>
                    </div>
                </div>
            </div>`;
    }
    nombreSelect(){
        let arrayNombres = ['categorias','marcas','estado','empresa','proveedor','codTrans'];
        for (let i = 0; i < arrayNombres.length; i++) {
            this.crearSelect(arrayNombres[i]);
        }
    };
    async crearSelect(nombre){
        let response = await fetch(`http://localhost:3000/${nombre}`)
        let data = await response.json();
        let selectElement= document.createElement('select');
        selectElement.classList.add(`sel${nombre}`)
        data.forEach(data=>{
            let tdiv= this.querySelector(`#${nombre}`);
            let opcion = document.createElement('option');
            opcion.value = data.id;
            opcion.text = data.nombre;
            selectElement.appendChild(opcion);
            tdiv.appendChild(selectElement);
        });
    };
    async obtenerInformacion(){
        let response = await fetch('http://localhost:3000/activos')
        let data = await response.json(); 
        this.querySelector('#boton').addEventListener('click', () =>{ 
            let activo ={
                id: `0${data.length+1}`,
                codTrans: this.querySelector('.selcodTrans').value,
                NroFormulario: this.querySelector('.NmrFormulario').value,
                nroSerial: this.querySelector('.nroSerial').value,
                idMarca: this.querySelector('.selmarcas').value,
                idCategoria: this.querySelector('.selcategorias').value,
                idProveedor: this.querySelector('.selproveedor').value,
                valorUnitario: this.querySelector('.valorUnitario').value,
                idEmpresa: this.querySelector('.selempresa').value,
                idEstado: this.querySelector('.selestado').value
            }
            this.guardar(activo);
        });
    };
    async guardar(activo){
        try {
            let response = await fetch('http://localhost:3000/activos',{
            method: 'POST',
            headers:{
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(activo),
            }); 
        } catch {
            
        }
    }

}
customElements.define('crear-activo',nuevoActivo);