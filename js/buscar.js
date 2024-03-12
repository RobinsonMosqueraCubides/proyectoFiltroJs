export class buscar extends HTMLElement{
    constructor(){
        super();
        this.name;
        this.render();
    }
    render(){ //estructura inicial del webcomponent
        this.innerHTML=`
        <style>
          @import url('../css/styleEliminar.css');
        </style>
        <link rel="stylesheet" href="https://unpkg.com/boxicons@latest/css/boxicons.min.css">
        <div class="agregar">
                    <h4>Buscar</h4>
                    <div class="formulario">
                        <div class="buscador">
                            <input type="text" placeholder="Buscar" id="inputB">
                            <button id="buscar"><i class='bx bxs-search' id="lupa"></i></button>
                        </div>
                        <div class="eliminar">
                        </div>
                        <h6>*Pulsa el ojo para observar detalles del activo</h6>
                        <br>
                    </div>
                </div>`;
    }
    static get observedAttributes(){
        return ['name'];//observa que haya el parametro name en el web componen
    }
  
    attributeChangedCallback(nameAttr, oldValue, newValue){
        switch(nameAttr){
            case "name":
                this.name = newValue;//obtiene el nombre del parametro
            break;
        }
    }
  
    async connectedCallback(){//obtiene los datos del json server y escribre la lista de los objetos
      try {
        let response = await fetch(`http://localhost:3000/${this.name}`)
        let data = await response.json();
        data.forEach(data => {
            let divBuscador = this.querySelector('.eliminar');
            let informacion = `<label for="borrar" id="idAvtivo">${data.id}</label><label for="borrar" id="name">${data.nombre}</label><i class='bx bxs-show' id="ver" ></i>`
                let tdiv = document.createElement('div');
                tdiv.classList.add('listaBuscador')
                tdiv.innerHTML = informacion;
                divBuscador.appendChild(tdiv);
            
        });
        this.botonBuscar()
      } catch{
        
      }
    }
    botonBuscar(){ //con el evento click toma lo que hay en el input
        let input = this.querySelector('#inputB');
        this.querySelector('#buscar').addEventListener('click',() => {
            let divBuscar = this.querySelector('.eliminar')
            divBuscar.innerHTML='';
            let data = input.value.toLocaleLowerCase();
            this.buscarCoincidencia(data);
        });
    }
    async buscarCoincidencia(activoBuscar){//busca coincidencias denetro del json server e imprime lo que encontro
        try {
            let response = await fetch(`http://localhost:3000/${this.name}`)
            let data = await response.json(); 
            console.log(data);
            data.forEach(data => {
              if (data.nombre.toLocaleLowerCase().includes(activoBuscar)) {
                console.log(data.nombre);
                let divBuscador = this.querySelector('.eliminar');
                let informacion = `<label for="borrar" id="idAvtivo">${data.id}</label><label for="borrar" id="name">${data.nombre}</label><i class='bx bxs-show' id="ver" >`
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
customElements.define('buscar-activo',buscar);