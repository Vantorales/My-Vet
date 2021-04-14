const registro = () =>{

    const nombre = document.querySelector("#name").value;
    const correo = document.querySelector("#emailRegistro").value;
    const especialidad = document.querySelector("#especialidad").value;
    const contraseña = document.querySelector("#passRegistro").value; 

    // Armado de JSON
    const data = {
        nombre,
        correo, 
        especialidad,
        password: contraseña
      };


    // Registrando al usuario en la BD
    const sendData = async(data)=>{
        const url = "http://localhost:8080/api/nuevo-usuario";
    
        const myInit = {
          method: 'POST',
          body: JSON.stringify(data),
          headers:{'Content-Type': 'application/json'}
      }
    
        try {
          const response = await fetch(url, myInit);
          const responseJSON = await response.json();
          console.log(responseJSON);
            
          } catch (error) {
            console.log(error);
          }}

    // Condicionales para campos completos
    if(nombre !== ""){
        
        if(correo !== ""){

            if(especialidad !=="Seleccionar especialidad"){

                if(contraseña !=="" && contraseña.length > 6){
                    sendData(data);

                }else{
                    console.log(contraseña ==="" ?"Ingresar contraseña": "debe ser mayor a 6 carácteres"); 
                 
                }
            }else{

                console.log('Seleccionar especialidad');
            }
        }else{
            console.log('Ingresar correo');
           
        }
    }else{
        console.log('Ingresar nombre');
    }
    

}