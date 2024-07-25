let passwordBox = document.getElementById('password')
let subMenu = document.getElementById('sub-menu')


const length = 8

const uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
const lowercase = "abcdefghijklmnopqrstuvwxyz"
const number = "0123456789"
const symbol = "@#$&*"

const randomPassword = () => {
    let password = ""

    const combine = uppercase+lowercase+number+symbol

    while(length > password.length){
        password += combine[Math.floor(Math.random()*combine.length)];
    }

    console.log(password.length)

    passwordBox.value = password
}

const numeric = () => {
    let password = ""

    while(length>password.length){
        password += number[Math.floor(Math.random()*number.length)];
    }
    passwordBox.value = password
}

const alphabetic = () => {
    let password = ""

    const alphabets = uppercase+lowercase

    while(length>password.length){
        password += alphabets[Math.floor(Math.random()*alphabets.length)];
    }
    passwordBox.value = password
}

const alpha_numeric = () => {
    let password = ""
    const alphabets = uppercase+lowercase
    password += alphabets[Math.floor(Math.random()*alphabets.length)];
    password += number[Math.floor(Math.random()*number.length)];

    const alpha_numeric = uppercase+number+lowercase

    while(length>password.length){
        password += alpha_numeric[Math.floor(Math.random()*alpha_numeric.length)];
    }
    passwordBox.value = password
}

const copyPassword = () => {
    passwordBox.select();
    document.execCommand("copy");
    if(passwordBox.value){
        swal("Password Copied!", passwordBox.value, "success");
    }
    else{
        swal("No Password Generated yet!", "Nothing to copy", "warning");
    }
    passwordBox.value = ""
}

const symbolic = () => {
    let password = ""

    while(length>password.length){
        password += symbol[Math.floor(Math.random()*symbol.length)];
    }
    passwordBox.value = password
}

function toggleMenu(){
    subMenu.classList.toggle("open-menu");
}

const init = () => {
    const pageType = document.body.getAttribute('data-page-type');

    switch (pageType) {
        case 'alphabetic':
            document.getElementById('generate').addEventListener("click", alphabetic);
            break;
        case 'numeric':
            document.getElementById('generate').addEventListener("click", numeric);
            break;
        case 'symbolic':
            document.getElementById('generate').addEventListener("click", symbolic);
            break;
        case 'alpha_numeric':
            document.getElementById('generate').addEventListener("click", alpha_numeric);
            break;
        default:
            document.getElementById('generate').addEventListener("click", randomPassword);
            break;
    }
}

document.addEventListener('DOMContentLoaded', init);

document.getElementById('example').addEventListener("click", toggleMenu)
document.getElementById('copy').addEventListener("click", copyPassword)
// document.getElementById('generate').addEventListener("click", randomPassword)
// document.getElementById('number').addEventListener("click", numeric)
// document.getElementById('symbolic').addEventListener("click", symbolic)
// document.getElementById('alpha-num').addEventListener("click", alpha_numeric)
// document.getElementById('alphabet').addEventListener("click", alphabetic)