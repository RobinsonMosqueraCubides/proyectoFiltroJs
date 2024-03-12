export class agregar extends HTMLElement{
    constructor(){
        super();
        this.name;
        this.render();
    }
    render(){//se crea la estructura inicial del web component
        this.innerHTML=`<style>
        @import url('../css/agregar.css');
      </style>
      <link rel="stylesheet" href="https://unpkg.com/boxicons@latest/css/boxicons.min.css"><section class="informacion">
        <div class="agregar">
            <div class="formulario">
                <p>Nombre</p>
                <input class = 'nombreInput' type="text" placeholder="Ingrese nombre">
                <br>
<h6>*Cuando termines recuerda oprimir el boton guardar para asegurar los cambios</h6>
                <div id="boton">
                    <button><strong>Guardar</strong></button>
                </div>
            </div>
        </div>
    </section> `
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
  
    async connectedCallback(){
      try {
        let response = await fetch(`http://localhost:3000/${this.name}`)
        let data = await response.json();
        this.btnGuardar(data,this.name);//lee el json server y toma el nombre de la keypoint
      } catch{
        
      }
    }
    btnGuardar(data,keyPoint){//recibe el objeto para saber cuantos hay y crea el nuevo objeto para agregarlo
        this.querySelector('#boton').addEventListener('click', ()=>{
            let dic ={
                id: `${keyPoint}0${data.length+1}`,
                nombre: this.querySelector('.nombreInput')
            }
            this.guardar(dic, keyPoint);
        });
    }
    async guardar(activo, llave){//metodo para guardar al json server
        try {
            let response = await fetch(`http://localhost:3000/${llave}`,{
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
customElements.define('agregar-activo', agregar);