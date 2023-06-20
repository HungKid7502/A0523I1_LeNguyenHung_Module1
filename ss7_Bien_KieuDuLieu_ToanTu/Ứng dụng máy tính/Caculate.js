addition() {
    let a = parseFloat(document.getElementById("number1").value);
    let b = parseFloat(document.getElementById("number2").value);
    r = a + b;
    document.getElementById("result").innerHTML = (r);
}

subtraction() {
    let a = parseFloat(document.getElementById("number1").value);
    let b = parseFloat(document.getElementById("number2").value);
    r = a - b;
    document.getElementById("result").innerHTML = (r);
}

multiplication() {
    let a = parseFloat(document.getElementById("number1").value);
    let b = parseFloat(document.getElementById("number2").value);
    r = a * b;
    document.getElementById("result").innerHTML = (r);
}

division() {
    let a = parseFloat(document.getElementById("number1").value);
    let b = parseFloat(document.getElementById("number2").value);
    r = a / b;
    document.getElementById("result").innerHTML = (r);
}