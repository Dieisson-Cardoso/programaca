function soma() {
    var valor1 = document.getElementById("Valor1").value;
    var valor2 = document.getElementById("Valor2").value;

var soma = +valor1 + +valor2;

var resultado = document.getElementById("resultado");
resultado.value = soma;
    }