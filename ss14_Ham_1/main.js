function square(number) {
    return  number * number;
}

function caculate() {
    var input = document.getElementById("number").value;
    var result = square(input);
    document.getElementById("result").innerHTML = result;
}