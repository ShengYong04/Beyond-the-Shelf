function toggleClass1() {
    // Select all elements with the class 'div1'
    reset();
    const divElements = document.querySelectorAll('.div1');
    divElements.forEach(element => {
        element.classList.remove('hidden');
    });
}
function toggleClass2() {
    // Select all elements with the class 'div1'
    reset();
    const divElements = document.querySelectorAll('.div2');

    // Loop through each element and toggle the 'hidden' class
    divElements.forEach(element => {
        element.classList.remove('hidden');
    });
}
function toggleClass3() {
    // Select all elements with the class 'div1'
    reset();
    const divElements = document.querySelectorAll('.div3');

    // Loop through each element and toggle the 'hidden' class
    divElements.forEach(element => {
        element.classList.remove('hidden');
    });
}
function toggleClass4() {
    reset();
    // Select all elements with the class 'div1'
    const divElements = document.querySelectorAll('.div4');

    // Loop through each element and toggle the 'hidden' class
    divElements.forEach(element => {
        element.classList.remove('hidden');
    });
}
function toggleClass5() {
    reset();
    // Select all elements with the class 'div1'
    const divElements = document.querySelectorAll('.div5');

    // Loop through each element and toggle the 'hidden' class
    divElements.forEach(element => {
        element.classList.remove('hidden');
    });
}
function toggleClass6() {
    reset();
    // Select all elements with the class 'div1'
    const divElements = document.querySelectorAll('.div6');

    // Loop through each element and toggle the 'hidden' class
    divElements.forEach(element => {
        element.classList.remove('hidden');
    });
}
function reset(){
    const divElements1 = document.querySelectorAll('.div1');
    const divElements2 = document.querySelectorAll('.div2');
    const divElements3 = document.querySelectorAll('.div3');
    const divElements4 = document.querySelectorAll('.div4');
    const divElements5 = document.querySelectorAll('.div5');
    const divElements6 = document.querySelectorAll('.div6');
    divElements1.forEach(element => {
        element.classList.add('hidden');
    });
    divElements2.forEach(element => {
        element.classList.add('hidden');
    });
    divElements3.forEach(element => {
        element.classList.add('hidden');
    });
    divElements4.forEach(element => {
        element.classList.add('hidden');
    });
    divElements5.forEach(element => {
        element.classList.add('hidden');
    });
    divElements6.forEach(element => {
        element.classList.add('hidden');
    });
}
function clearFilter(){
    const divElements1 = document.querySelectorAll('.div1');
    const divElements2 = document.querySelectorAll('.div2');
    const divElements3 = document.querySelectorAll('.div3');
    const divElements4 = document.querySelectorAll('.div4');
    const divElements5 = document.querySelectorAll('.div5');
    const divElements6 = document.querySelectorAll('.div6');
    divElements1.forEach(element => {
        element.classList.remove('hidden');
    });
    divElements2.forEach(element => {
        element.classList.remove('hidden');
    });
    divElements3.forEach(element => {
        element.classList.remove('hidden');
    });
    divElements4.forEach(element => {
        element.classList.remove('hidden');
    });
    divElements5.forEach(element => {
        element.classList.remove('hidden');
    });
    divElements6.forEach(element => {
        element.classList.remove('hidden');
    });
}