const sendInfoPaciente =()=>{

        const DNIdueño = document.getElementById("DNIdueño").value;
        const nameDueño = document.querySelector("#NameDueño").value
        const nombreMascota = document.querySelector("#nombreMascota").value;
        const direccion = document.querySelector("#direccion").value;
        const infoMascota = document.querySelector("#infoMascota").value;
        const telefono = document.querySelector("#telefono").value;
        const email = document.querySelector("#email").value;

        const data = {
            DNIdueño,
            nameDueño,
            nombreMascota,
            direccion,
            infoMascota,
            telefono,
            email
        };
        console.log(data);

        const sendData = async(data)=>{
            const url = "http://localhost:8080/api/addPaciente";
        
            const myInit = {
              method: 'POST',
              body: JSON.stringify(data),
              headers:{'Content-Type': 'application/json'}
          }
        
            try {
              const response = await fetch(url, myInit);
              console.log(response);
              const responseJSON = await response.json();
              console.log(responseJSON);
              return responseJSON;
        
                
              } catch (error) {
                console.log(error);
              }
            }
        sendData(data);
}

