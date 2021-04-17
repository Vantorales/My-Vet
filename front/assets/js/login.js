document.addEventListener('DOMContentLoaded', ()=> {

  let userInit = { //inicializamos datos de logueo del usuario
    logout: false,
    nombre: ""
  }

  userInit = JSON.stringify(userInit); //lo pasamos JSON

  localStorage.setItem("UserInit", userInit); //lo cargamos al localstorage
});

// ENVIO DE INFO

const ingreso = ()=>{

  const correo = document.querySelector("#correo").value;
  const password = document.querySelector("#password").value;

  // armado de JSON
  const data = {
    correo,
    password,
  };
  
  const sendData = async(data)=>{
    const url = "http://localhost:8080/api/login-user";

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


  const redirectHome = async(data) =>{

    const {usuarioverificado, msg, nombre} = await sendData(data); //trae la info de la petición
    console.log(usuarioverificado);



    if(usuarioverificado === true){ //verificamos que el usuario se encuentre registrado
        
      let userInit = {
        logout: usuarioverificado,
        nombre: nombre,
      };

      localStorage.setItem("UserInit",JSON.stringify(userInit));
      location.href = 'pacientes.html';
      

    }else{
      console.log("login fail");
    }
    
    }

    redirectHome(data);
    console.log(correo);
    console.log(password);
  }
 
  
//verificar que el usuario se haya logueado











// EFECTO DE MOVIMIENTO DE LOGIN
document.getElementById("btn__iniciar-sesion").addEventListener("click", iniciarSesion);
document.getElementById("btn__registrarse").addEventListener("click", register);
window.addEventListener("resize", anchoPagina);



//declaración de variables
var contenedor_login_register= document.querySelector(".contenedor__login-register");
var formulario_login = document.querySelector(".formulario__login");
var formulario_register = document.querySelector(".formulario__register");
var caja_trasera_login = document.querySelector(".caja__trasera-login");
var caja_trasera_register = document.querySelector(".caja__trasera-register");

function anchoPagina(){
  if(window.innerWidth > 850){
    caja_trasera_login.style.display= "block";
    caja_trasera_register.style.display= "block";
  }else{
    caja_trasera_register.style.display="block";
    caja_trasera_register.style.opacity = "1";
    caja_trasera_login.style.display="none";
    formulario_login.style.display="block";
    formulario_register.style.display="none";
    contenedor_login_register.style.left="0px";
  }
}


function iniciarSesion(){

    if(window.innerWidth > 850){
    formulario_register.style.display = "none";
    contenedor_login_register.style.left = "10px";
    formulario_login.style.display= "block";
    caja_trasera_register.style.opacity= "1";
    caja_trasera_login.style.opacity = "0";
  }else{
    formulario_register.style.display = "none";
    contenedor_login_register.style.left = "0px";
    formulario_login.style.display= "block";
    caja_trasera_register.style.display= "block";
    caja_trasera_login.style.display = "none";
  }
}

function register(){
  
    if(window.innerWidth > 850){
    formulario_register.style.display = "block";
    contenedor_login_register.style.left = "410px";
    formulario_login.style.display= "none";
    caja_trasera_register.style.opacity= "0";
    caja_trasera_login.style.opacity = "1";
  }else{
      formulario_register.style.display = "block";
    contenedor_login_register.style.left = "0px";
    formulario_login.style.display= "none";
    caja_trasera_register.style.display= "none";
    caja_trasera_login.style.display = "block";
    caja_trasera_login.style.opacity="1";
  }
}
