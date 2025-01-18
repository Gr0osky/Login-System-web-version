let UsernameField = document.getElementById("UserIn");
let PasswordField = document.getElementById("PassIn");
let UsernameDisturbance = document.getElementById("UsernameDistrubance");
let Terms = document.getElementById("check");
let UsernameSpace = document.getElementById("li1");
let UsernameMin = document.getElementById("li2");
let UsernameMax = document.getElementById("li3");
let PassSpace = document.getElementById("pli1");
let PassMin = document.getElementById("pli2");
let PassMax = document.getElementById("pli3");
let PassSpec = document.getElementById("pli4");
let PassCase = document.getElementById("pli5");
let PassNum = document.getElementById("pli6");
let UniversalList = [UsernameSpace, UsernameMax, UsernameMin, PassSpace, PassMin, PassMax, PassSpec, PassCase, PassNum]
let SubmitBtn = document.getElementById("SubmitBtn")
const SmolAlphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
const Bigalphabet = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
const Numbers = [0,1,2,3,4,5,6,7,8,9];
count = 0


function checkForPassField(){
    if(PasswordField.value.includes(" ")){
        PassSpace.style.color = "red";
    }
    else{
        PassSpace.style.color = "green";
    }
    if(PasswordField.value.length < 5){
        PassMin.style.color = "red";
    }
    else{
        PassMin.style.color = "green";
    }
    if(PasswordField.value.length > 15){
        PassMax.style.color = "red";
    }
    else{
        PassMax.style.color = "green";
    }
    if(!(PasswordField.value.includes("$") || PasswordField.value.includes("#"))){
        PassSpec.style.color = "red";
    }
    else{
        PassSpec.style.color = "green";
    }
    if(!SmolAlphabet.some(letter => PasswordField.value.includes(letter)) || !Bigalphabet.some(letter => PasswordField.value.includes(letter))){
        PassCase.style.color = "red";
    }
    else{
        PassCase.style.color = "green";
    }

    if(!(Numbers.some(num => PasswordField.value.includes(String(num))))){
        PassNum.style.color = "red";
    }
    else{
        PassNum.style.color = "green";
    }
    
}

function checkForUsrField(){
    if(UsernameField.value.includes(" ")){
        UsernameSpace.style.color = "red";
    }
    else{
        UsernameSpace.style.color = "green";
    }

    if(UsernameField.value.length < 5){
        UsernameMin.style.color = "red";
    }
    else{
        UsernameMin.style.color = "green";
    }

    if(UsernameField.value.length > 15){
        UsernameMax.style.color = "red";
    }
    else{
        UsernameMax.style.color = "green";
    }
}

function checkAll(){
    for(letters in UniversalList){
        if(letters.style.color == "green"){
            count += 1;
        }
    }
    if(count == 9){
        return true
    }
    else{
        return false
    }
}
UsernameField.addEventListener('input', checkForUsrField);
PasswordField.addEventListener('input', checkForPassField);

SubmitBtn.onclick = function Redirection(){
    checkAll()
    if(checkAll == true){
        // Rediricting to HOme page
        
    }
}

