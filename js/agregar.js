export class agregar extends HTMLElement{
    constructor(){
        super();
        this.name;
        this.render();
    }
    render(){
        this.innerHTML=`<section class="informacion">
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
        return ['name'];
    }
  
    attributeChangedCallback(nameAttr, oldValue, newValue){
        switch(nameAttr){
            case "name":
                this.name = newValue;
            break;
        }
    }
  
    async connectedCallback(){
      try {
        let response = await fetch(`http://localhost:3000/${this.name}`)
        let data = await response.json();
        this.btnGuardar(data,this.name);
      } catch{
        
      }
    }
    btnGuardar(data,keyPoint){
        this.querySelector('#boton').addEventListener('click', ()=>{
            let dic ={
                id: `${keyPoint}0${data.length+1}`,
                nombre: this.querySelector('.nombreInput')
            }
            this.guardar(dic, keyPoint);
        });
    }
    async guardar(activo, llave){
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