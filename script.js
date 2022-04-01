function converter() {

    let array = []
    let numeroBaseDecimal = parseInt(document.getElementById("numeroBaseDecimal").value);
    let baseEscolhida = parseInt(document.getElementById("baseEscolhida").value);
    let numeroConvertido = "";
    var resultado = document.getElementById("resultado");

    while (numeroBaseDecimal >= baseEscolhida) {
        array.push(numeroBaseDecimal % baseEscolhida);
        numeroBaseDecimal = Math.floor(numeroBaseDecimal / baseEscolhida);
    }
    array.push(numeroBaseDecimal % baseEscolhida);

    for (let i = array.length - 1; i > -1; i--) {
        numeroConvertido += array[i];
    }
    resultado.innerHTML = numeroConvertido
}