$("#calcular").click(function() {
    var valor1 = parseFloat($("#txtvalor1").val());
    var valor2 = parseFloat($("#txtvalor2").val());
    var valor3 = parseFloat($("#txtvalor3").val());

    if(isNaN(valor1) || isNaN(valor2)) {
        alert("Por favor, insira números válidos nos dois campos.");
        return;
    }

    var resultado = parseFloat(valor1 + valor2 + valor3);
    var resultado1 = parseFloat(resultado / 3)

    $("#txtresultado")
    .text("Valor de Resultado: " + resultado1)
    .css({'font-weight': 'bold', 'color': 'black', 'font-size': '18pt' });
});
