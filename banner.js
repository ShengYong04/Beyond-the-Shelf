var counter = 2;
var radioButtons = document.querySelectorAll('input[type="radio"]');
document.getElementById('radio1').checked = true;

function handleClick(event) {
    var clickedRadioID = event.target.id;
    var clickedCounter = parseInt(clickedRadioID.slice(-1));
    counter = clickedCounter;
}

radioButtons.forEach(function(radioButton) {
radioButton.addEventListener('click', handleClick);
});

setInterval(function(){
    document.getElementById('radio' + counter).checked = true;
    counter++;
    if(counter > 4){
        counter = 1;
    }
},10000);