// ponemos en variables los inputs
let login = document.getElementById('loginmail');
let passwordLog = document.getElementById('passwordtext');
let botonLog = document.getElementById('boton-login');
let userDB = JSON.parse(localStorage.getItem('users'));
let form = document.getElementById("formlogin");

botonLog.addEventListener('click', function (event) {
    event.preventDefault();
    deleteErrors();

    let usuarioActual = new Validaciones
    usuarioActual.email = login.value
    usuarioActual.password = passwordLog.value

if(usuarioActual.checkmail()){
    window.location.href='./juego.html'
}else{
    
    let div = document.createElement("div")
    div.innerHTML = ('usuario no existe')
    form.appendChild(div);
}
   

})


//comprobar validaciones email, @, num char en pass
function deleteErrors() {
    let errors = [...document.getElementsByClassName("error")]
    errors ? errors.forEach(error => error.remove()) : null;
}



class Validaciones {
    constructor(email, password) {
        this.email = email;
        this.password = password;

    }
    checkmail() {

        let userInDb = false;

        if (!userDB) {
            userInDb = false;
        }
        else {
            userDB.forEach(user => {
                if (user.mail === this.mail && user.password == this.password) {

                    userInDb = true;
                }

            });

        }
        return userInDb

    }

}