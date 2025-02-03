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
let info = document.getElementById("info")
let BackBtn = document.getElementById("BackBtn")
let Form = document.getElementById("Form")
const SmolAlphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
const Bigalphabet = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
const Numbers = [0,1,2,3,4,5,6,7,8,9];


function redirectUser(){
     window.location.href = '../Home_page/index.html'
}




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
    let count = 0;
    for(let i=0; i < UniversalList.length; i++){
        if(UniversalList[i].style.color == "green"){
            count += 1;
        }
    }
    console.log(count)
    return count === UniversalList.length;
}
UsernameField.addEventListener('input', checkForUsrField);
PasswordField.addEventListener('input', checkForPassField);

SubmitBtn.onclick = function Redirection(){
    let Valid = checkAll()
    if(Valid && Terms.checked){
        // Rediricting to HOme page
        info.style.color = "#404040";
        info.textContent = "Account created succesfully";
        setTimeout(redirectUser, 3000);
    }
    else{
        info.style.color = "#E24848";
        info.textContent = "Missing information, please go through all the fields again.";
    }
}

BackBtn.onclick = function Wait_nd_Redirect(){
    setTimeout(redirectUser, 1000)
}

Form.addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent form from actually submitting

    let name = UsernameField.value;
    let password = PasswordField.value;

    fetch('/save_data', { // URL of your server-side script
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ name: name, password: password })
    })
    .then(response => {
        if (!response.ok) { // Check for HTTP errors (400, 500, etc.)
            throw new Error('Network response was not ok');
        }
        return response.json(); 
    })
    .then(data => {
        console.log('Data saved:', data);
        info.style.color = "#404040";
        info.textContent = "Account created successfully";
        setTimeout(redirectUser, 3000);
    })
    .catch(error => {
        console.error('Error saving data:', error);
        info.style.color = "#E24848";
        info.textContent = "An error occurred. Please try again later.";
    });
});

