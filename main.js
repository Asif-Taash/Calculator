let input = document.getElementById('inputBox');


function getValues(value){
    input.value += value;
}
function calculateResult(){
    try{
        input.value = eval(input.value);
    }
    catch{
        input.value ="ERROR!";
    } 
    
}
function clearResult(){
    input.value = '';
}
function reverseResult(){
    input.value = +input.value * -1;
}
function deleteLast(){
    input.value = input.value.slice(0,-1);
}
function addBrackets(){
    let openBrackets = (input.value.match(/\(/g) || []).length;
    let closeBrackets = (input.value.match(/\)/g) || []).length;

    if(openBrackets > closeBrackets){
        inputBox.value += ")";
    } else {
        inputBox.value += "(";
    }
}