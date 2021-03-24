const signInForm = document.getElementById('formLogin');
signInForm.addEventListener('submit',(e)=>{
    e.preventDefault()
    const email= document.getElementById('email');
    const password= document.getElementById('password');
console.log(email, password);
const provider = new firebase.auth.GoogleAuthProvider()
auth.signInWithPopup(provider).then((result) => {
    //codigo si todo sale bien
     })
     .catch(err => {
       //codigo si todo sale mal
         console.log(err)
     })
    })


