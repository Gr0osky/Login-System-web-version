UsernameField = document.getElementById("UserIn");
PasswordField = document.getElementById("PassIn");
UsernameDisturbance = document.getElementById("UsernameDistrubance");
Terms = document.getElementById("check");
UsernameSpace = document.getElementById("li1");
UsernameMin = document.getElementById("li2");
UsernameMax = document.getElementById("li3");

// Will work tommorow :(

function checkForUsrField(){
    if(" " in UsernameField.value){
        UsernameSpace.style.color = "red";
    }
}
UsernameField.addEventListener('input', checkForUsrField);
