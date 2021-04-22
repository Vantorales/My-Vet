function infoPaciente(){
     console.log("entro");

     const sendData = async()=>{
        const url = "http://localhost:8080/api/getPaciente";
    
    //     const myInit = {
    //       method: 'POST',
    //       body: JSON.stringify(data),
    //       headers:{'Content-Type': 'application/json'}
    //   }
    
        try {
          const response = await fetch(url);
          console.log(response);
          const responseJSON = await response.json();
          console.log(responseJSON);
    
          return responseJSON;
    
          
            
          } catch (error) {
            console.log(error);
          }
        }
   

    const armadoDePaciente = async() =>{
        
        let containerPacientes = document.querySelector("#listaPacientes");
        containerPacientes.innerHTML = "";
        const { Pacientes } = await sendData();

        for(let i=0; Pacientes.length>i;i++){
            containerPacientes.innerHTML+=`<div class="mdl-list__item mdl-list__item--two-line">
            <span class="mdl-list__item-primary-content">
                <i class="zmdi zmdi-account mdl-list__item-avatar"></i>
                <span>${i+1}. ${Pacientes[i].nameDueño }</span>
                <span class="mdl-list__item-sub-title">${Pacientes[i].nombreMascota }</span>
            </span>
            <a class="mdl-list__item-secondary-action" href="#!"><i class="zmdi zmdi-more"></i></a>
        </div>`
        }
    }
    armadoDePaciente();
}
   
  
  