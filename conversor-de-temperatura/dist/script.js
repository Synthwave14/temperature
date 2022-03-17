function Converter() {
  var inserirFah = document.getElementById("grau");
  var grau = inserirFah.value;
  var grauCalculo = (grau * 1.8) + 32;
  var grauRedondo = grauCalculo.toFixed(0);
  var grauAtualConvertido = document.getElementById("grauConvertido");
  var grauConvertido = "O resultado da conversão é "+grauRedondo +"°F";
  grauAtualConvertido.innerHTML = grauConvertido;
}