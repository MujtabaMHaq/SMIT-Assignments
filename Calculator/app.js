function inputData(addInput){
    inputField.value += addInput;
}

function result(){
    var formulaInput = document.getElementById("inputField");
    // inputField.value = eval(formulaInput);
    // inputField.value = eval(formulaInput);
    inputField.value = eval(formulaInput.value);
}

function allclear(){
    inputField.value = "";
}

function deleteOne(){
    var inputText = document.getElementById("inputField");

    var deletedvalue = inputText.value.slice(0 ,-1);

    inputField.value = deletedvalue;
}