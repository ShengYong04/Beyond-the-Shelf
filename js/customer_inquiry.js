let alertSuccess = document.querySelector(".alert-success");
let alertError = document.querySelector(".alert-error");
let successMsg = "Message Sent! Thank you for your precious message and opinion.";
let errorMsg = "Something went wrong! Please try again.";
const requiredInput = document.querySelectorAll(".input");
let send = document.querySelector(".send");


send.addEventListener("click", validationCheck);


function validationCheck(){
    for (const input of requiredInput){
        if (input.value.trim() === ''){
            document.getElementById("errorMsg").innerHTML = errorMsg;
            alertSuccess.style.display = "none";
            alertError.style.zIndex = "1";
            alertError.style.transform = "translate(0px,0px)";
            return false;
        }else{
            document.getElementById("successMsg").innerHTML = successMsg;
            alertError.style.display = "none";
            alertSuccess.style.zIndex = "1";
            alertSuccess.style.display = "block";
            return true;
        }
    }
}
