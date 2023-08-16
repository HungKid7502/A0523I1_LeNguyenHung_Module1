function addition() {
    let a = parseFloat(document.getElementById("number1").value);
    let b = parseFloat(document.getElementById("number2").value);
    r = a + b;
    document.getElementById("result").innerHTML = r;
}

function subtraction() {
    let a = parseFloat(document.getElementById("number1").value);
    let b = parseFloat(document.getElementById("number2").value);
    r = a - b;
    document.getElementById("result").innerHTML = r;
}

function multiplication() {
    let a = parseFloat(document.getElementById("number1").value);
    let b = parseFloat(document.getElementById("number2").value);
    r = a * b;
    document.getElementById("result").innerHTML = r;
}

function division() {
    let a = parseFloat(document.getElementById("number1").value);
    let b = parseFloat(document.getElementById("number2").value);
    r = a / b;
    document.getElementById("result").innerHTML = r;
}