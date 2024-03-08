export class elminarActivo extends HTMLElement{
    constructor(){
        super();
        this.render();
        this.obtenerInformacion();
    }
    render(){
        this.innerHTML=`
        <style>
          @import url('../css/styleEliminar.css');
        </style>
        <link rel="stylesheet" href="https://unpkg.com/boxicons@latest/css/boxicons.min.css">
        <div class="agregar">
                    <h4>Eliminar Activo</h4>
                    <div class="formulario">
                        <div class="buscador">
                            <input type="text" placeholder="Buscar" id="inputB">
                            <button id="buscar"><i class='bx bxs-search' id="lupa"></i></button>
                        </div>
                        <div class="eliminar">
                        </div>
                        <h6>*Una vez realizada la eliminacion no hay vuelta atras</h6>
                        <br>
                    </div>
                </div>`;
    }

    obtenerInformacion(){
        let input = this.querySelector('#inputB');
        this.querySelector('#buscar').addEventListener('click',() => {
            let data = input.value.toLocaleLowerCase();
            this.buscarCoincidencia(data);
        })
    }
    async buscarCoincidencia(activoEliminar){
        try {
            let response = await fetch('http://localhost:3000/activos')
            let data = await response.json(); 
            console.log(data);
            data.forEach(data => {
              if (data.nroSerial.toLocaleLowerCase().includes(activoEliminar)) {
                let divBuscador = this.querySelector('.eliminar')
                let informacion = `<label for="borrar" id="idAvtivo">${data.id}</label><label for="borrar" id="nroSerial"> Serial: ${data.nroSerial}  </label><label for="borrar" id="name">   </label><i class='bx bxs-trash' id="borrar"></i>`
                let tdiv = document.createElement('div');
                tdiv.classList.add('listaBuscador')
                tdiv.innerHTML = informacion;
                divBuscador.appendChild(tdiv);
                this.botonEliminar();
              }
              else{
                alert('No hay concidencias')
              }
            });  
        } catch {
            
        }
    }
    botonEliminar(){
      let btnEliminar = this.querySelector('.listaBuscador');
      btnEliminar.addEventListener('click',(e)=>{
        if (e.target.closest('.listaBuscador')) {
          let idElement = e.target.closest('.listaBuscador')
          let id = idElement.querySelector('label').textContent;
          let confirmar = confirm('Seguro que desea eliminar?');
          if (confirmar) {
            this.eliminar(id);
          }
        }
      });
    }
    async eliminar(idActivo) {
      try {
          let response = await fetch(`http://localhost:3000/activos/${idActivo}`,{
              method: 'DELETE',
          });
      } catch {
          
      }
  }

 
}
customElements.define('eliminar-activo',elminarActivo);

