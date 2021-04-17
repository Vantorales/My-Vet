export {router} from "./router"; //exportamos las rutas




document.addEventListener('DOMContentLoaded', ()=> {

    let userInit = { //inicializamos datos de logueo del usuario
      logout: false,
      nombre: ""
    }
  
    userInit = JSON.stringify(userInit); //lo pasamos JSON
  
    localStorage.setItem("UserInit", userInit); //lo cargamos al localstorage
  });
  