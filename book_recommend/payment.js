let PhoneNumber = document.getElementById("phone");
let clear = document.querySelectorAll("input");
let reset = document.getElementById("reset");
let submit = document.getElementById("submit");
let text1 = document.getElementById("text1");
let text2 = document.getElementById("text2");
let text3 = document.getElementById("text3");
let text4 = document.getElementById("text4");
const requiredInput = document.querySelectorAll(".text-box");

PhoneNumber.addEventListener("click", phoneCheck);
reset.addEventListener("click", clean);
submit.addEventListener("click", validateForm);

PhoneNumber.addEventListener("mouseover", ()=>{
    PhoneNumber.setAttribute("value", "010");
});

PhoneNumber.addEventListener("mouseout", ()=>{
    PhoneNumber.setAttribute("value", "");
});

function phoneCheck(){
    PhoneNumber.setAttribute("value", "010");
}

function clean(){
    for (var i = 0; i < clear; i++) {
        clear[i].value = "";
    }
}

function validateForm(){
    for (const input of requiredInput){
        if (input.value.trim() === ''){
            alert("Your info isn't complete!");
            return false;
        }else{
            alert("Your order has been received!");
            alert("Your opinion has been received. Thank You!");
            return true
        }
    }
}

text1 = "The Name of The Book";
text2 = "RM 49.00";
text3 = "The book illustrates how emotion and mindset potentially influence a person, meanwhile aids you efficiently in getting over your deepd-down monsters that you don't even know they do exist.";
text4 = "Lisa Anellebella";

let i = 0, m = 0, n = 0, k = 0;
let speed1 = 50, speed2 = 100, speed3 = 25, speed4 = 50;

function typeWriter1(){
    if (i < text1.length){
        document.getElementById("text1").innerHTML += text1.charAt(i);
        i++;
        setTimeout(typeWriter1,speed1);
    }
}

function typeWriter2(){
    if (m < text2.length){
        document.getElementById("text2").innerHTML += text2.charAt(m);
        m++;
        setTimeout(typeWriter2,speed2);
    }
}

function typeWriter3(){
    if (n < text3.length){
        document.getElementById("text3").innerHTML += text3.charAt(n);
        n++;
        setTimeout(typeWriter3,speed3);
    }
}

function typeWriter4(){
    if (k < text3.length){
        document.getElementById("text4").innerHTML += text4.charAt(k);
        k++;
        setTimeout(typeWriter4,speed4);
    }
}


typeWriter1();
typeWriter2();
typeWriter3();
typeWriter4();