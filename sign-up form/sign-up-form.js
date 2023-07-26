let pass = document.querySelector("#pass");
let confirmPass = document.querySelector("#confirmPass");


confirmPass.addEventListener('input',matchPassword);
pass.addEventListener('input',matchPassword);

function matchPassword(){
    let originalPass = document.querySelector("#pass");
    let confirmationPass = document.querySelector("#confirmPass");

    if (confirmationPass.value != originalPass.value){
        if (!confirmationPass.hasAttribute("style")) {
            confirmPass.setCustomValidity("Password do not match");
            confirmPass.setAttribute("style","outline: 2px solid #ea1f18");
        }
    }
    else if (confirmationPass.value == originalPass.value) {
        confirmPass.setCustomValidity("");
        confirmPass.removeAttribute("style");
    }
}