const inputElement = document.getElementById('input');

function btn(valu) {
    inputElement.value += valu
}


function getResult() {
    let equalRe = eval(inputElement.value);
    inputElement.value = equalRe
}




function clearAll() {
    
    inputElement.value = ''
}
function Back() {
    inputElement.value = inputElement.value.slice(0,-1)
    
}
