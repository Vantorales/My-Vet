function infoPaciente(){
     console.log("entro");

     const sendData = async()=>{
        const url = "http://localhost:8080/api/getPacientes";
    
    //     const myInit = {
    //       method: 'POST',
    //       body: JSON.stringify(data),
    //       headers:{'Content-Type': 'application/json'}
    //   }
    
        try {
          const response = await fetch(url);
          console.log(response);
          const responseJSON = await response.json();
          console.log("respuesta: ",responseJSON);
    
          return responseJSON;
    
          
            
          } catch (error) {
            console.log(error);
          }
        }
   

    const armadoDePaciente = async() =>{
        
        let containerPacientes = document.querySelector("#listaPacientes");
        containerPacientes.innerHTML = "";
        const { pacientes } = await sendData();

        for(let i=0; pacientes.length>i;i++){
            containerPacientes.innerHTML+=`<div class="mdl-list__item mdl-list__item--two-line">
            <span class="mdl-list__item-primary-content">
                <i class="zmdi zmdi-account mdl-list__item-avatar"></i>
                <span>${i+1}. ${pacientes[i].nameDueño }</span>
                <span class="mdl-list__item-sub-title">${pacientes[i].nombreMascota }</span>
            </span>
            <a style="margin-right: 10px;" class="mdl-list__item-secondary-action" href="#!"><i class="zmdi zmdi-delete"></i></a>
            <a class="mdl-list__item-secondary-action" id="open" onclick="openModal()"><i class="zmdi zmdi-eye" ></i></a>
            
            
            <div id="modal_container" class="modal-container">
            <div class="modal">
                  <form>
        <div class="mdl-grid">
            <div class="mdl-cell mdl-cell--12-col">
                <legend class="text-condensedLight"><i class="zmdi zmdi-border-color"></i> &nbsp; DATA PACIENTE</legend><br>
            </div>
            <div class="mdl-cell mdl-cell--12-col">
                <div class="mdl-textfield mdl-js-textfield mdl-textfield--floating-label">
                    <input class="mdl-textfield__input" type="number" pattern="-?[0-9]*(\.[0-9]+)?" id="DNIdueño" value=${pacientes[i].DNIdueño }>
                    <label class="mdl-textfield__label" for="DNIClient">DNI(dueño)</label>
                    <span class="mdl-textfield__error">Invalid number</span>
                </div>
            </div>
            <div class="mdl-cell mdl-cell--6-col mdl-cell--8-col-tablet">
                <div class="mdl-textfield mdl-js-textfield mdl-textfield--floating-label">
                    <input class="mdl-textfield__input" type="text" pattern="-?[A-Za-záéíóúÁÉÍÓÚ ]*(\.[0-9]+)?" id="NameDueño">
                    <label class="mdl-textfield__label" for="NameClient">NOMBRE COMPLETO (dueño)</label>
                    <span class="mdl-textfield__error">Nombre inválido</span>
                </div>
            </div>
            <div class="mdl-cell mdl-cell--6-col mdl-cell--8-col-tablet">
                <div class="mdl-textfield mdl-js-textfield mdl-textfield--floating-label">
                    <input class="mdl-textfield__input" type="text" pattern="-?[A-Za-záéíóúÁÉÍÓÚ ]*(\.[0-9]+)?" id="nombreMascota">
                    <label class="mdl-textfield__label" for="LastNameClient">Nombre de MASCOTA</label>
                    <span class="mdl-textfield__error">Invalid</span>
                </div>
            </div>
            <div class="mdl-cell mdl-cell--6-col mdl-cell--8-col-tablet">
                <div class="mdl-textfield mdl-js-textfield mdl-textfield--floating-label">
                    <input class="mdl-textfield__input" type="text" id="direccion">
                    <label class="mdl-textfield__label" for="addressClient1">Dirección</label>
                    <span class="mdl-textfield__error">Inválido</span>
                </div>
            </div>
            <div class="mdl-cell mdl-cell--6-col mdl-cell--8-col-tablet">
                <div class="mdl-textfield mdl-js-textfield mdl-textfield--floating-label">
                    <input class="mdl-textfield__input" type="text" id="infoMascota">
                    <label class="mdl-textfield__label" for="addressClient2">Información de MASCOTA</label>
                    <span class="mdl-textfield__error">Inválido</span>
                </div>
            </div>
            <div class="mdl-cell mdl-cell--6-col mdl-cell--8-col-tablet">
                <div class="mdl-textfield mdl-js-textfield mdl-textfield--floating-label">
                    <input class="mdl-textfield__input" type="tel" pattern="-?[0-9+()- ]*(\.[0-9]+)?" id="telefono">
                    <label class="mdl-textfield__label" for="phoneClient">Teléfono</label>
                    <span class="mdl-textfield__error">Número inválido</span>
                </div>
            </div>
            <div class="mdl-cell mdl-cell--6-col mdl-cell--8-col-tablet">
                <div class="mdl-textfield mdl-js-textfield mdl-textfield--floating-label">
                    <input class="mdl-textfield__input" type="email" id="email">
                    <label class="mdl-textfield__label" for="emailClient">E-mail</label>
                    <span class="mdl-textfield__error"> E-mail inválido</span>
                </div>
            </div>
        </div>
    </form>
                  <button type="button" onclick="closeModal()" id="close">Cerrar</button>
                </div>
              </div>
        </div>`
        }
    }
    armadoDePaciente();

    
    
    const modal_container = document.querySelector("#modal_container");
    const close = document.querySelector("#close");

    console.log(open, modal_container, close);

}

function openModal(){
        const open = document.querySelector("#open");
        const modal_container = document.querySelector("#modal_container");
        modal_container.classList.add('show'); 

}

function closeModal(){
    const close = document.querySelector("#close");
    const modal_container = document.querySelector("#modal_container");
    modal_container.classList.remove('show');
}
  
  