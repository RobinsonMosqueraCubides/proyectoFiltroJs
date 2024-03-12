export class editar extends HTMLElement{
    constructor(){
        super();
        this.name;
        this.render();
    }
    render(){ // estructura inicial
        this.innerHTML=`
        <style>
          @import url('../css/styleEliminar.css');
        </style>
        <link rel="stylesheet" href="https://unpkg.com/boxicons@latest/css/boxicons.min.css">
        <div class="agregar">
                    <h4>Editar</h4>
                    <div class="formulario">
                        <div class="buscador">
                            <input type="text" placeholder="Buscar" id="inputB">
                            <button id="buscar"><i class='bx bxs-search' id="lupa"></i></button>
                        </div>
                        <div class="eliminar">
                        </div>
                        <h6>*Pulsa el lapiz para editar</h6>
                        <br>
                    </div>
                </div>`;
    }
    static get observedAttributes(){ //revisa que exita el parametro name en el web component
        return ['name'];
    }
  
    attributeChangedCallback(nameAttr, oldValue, newValue){ //tomar el nombre y lo guarda
        switch(nameAttr){
            case "name":
                this.name = newValue;
            break;
        }
    }
  
    async connectedCallback(){ //imprime lo que hay en el json server
      try {
        let response = await fetch(`http://localhost:3000/${this.name}`)
        let data = await response.json();
        data.forEach(data => {
            let divBuscador = this.querySelector('.eliminar');
            let informacion = `<label for="borrar" id="idAvtivo">${data.id}</label><label for="borrar" id="name">${data.nombre}</label><i class='bx bx-edit-alt'></i>`
                let tdiv = document.createElement('div');
                tdiv.classList.add('listaBuscador')
                tdiv.innerHTML = informacion;
                divBuscador.appendChild(tdiv);
            
        });
        this.botonBuscar()
      } catch{
        
      }
    }
    botonBuscar(){ //leer el input y envia el dato
        let input = this.querySelector('#inputB');
        this.querySelector('#buscar').addEventListener('click',() => {
            let divBuscar = this.querySelector('.eliminar')
            divBuscar.innerHTML='';
            let data = input.value.toLocaleLowerCase();
            this.buscarCoincidencia(data);
        });
    }
    async buscarCoincidencia(activoBuscar){ //resive el dato y limpia escribe lo que encontro
        try {
            let response = await fetch(`http://localhost:3000/${this.name}`)
            let data = await response.json(); 
            console.log(data);
            data.forEach(data => {
              if (data.nombre.toLocaleLowerCase().includes(activoBuscar)) {
                console.log(data.nombre);
                let divBuscador = this.querySelector('.eliminar');
                let informacion = `<label for="borrar" id="idAvtivo">${data.id}</label><label for="borrar" id="name">${data.nombre}</label><i class='bx bx-edit-alt'>`
                    let tdiv = document.createElement('div');
                    tdiv.classList.add('listaBuscador')
                    tdiv.innerHTML = informacion;
                    divBuscador.appendChild(tdiv);
              }}
    
            )
          }
        catch {
            
        }
    }

}
customElements.define('editar-activo',editar);