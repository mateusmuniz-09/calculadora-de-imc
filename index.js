const btnCalcular = document.getElementById("btn-calcular");
let resultadoFinal = "";
const resultado = document.getElementById("resultado");
const spanImc = document.getElementById("imc");
const valorAltura = document.getElementById("altura");
const valor = document.getElementById("peso");
const btnLimpar = document.getElementById("btn-limpar");

btnCalcular.addEventListener("click", function () {
  const peso = parseFloat(valor.value);
  if (isNaN(peso) || valor.value.trim() === "") {
    alert("Peso inválido! Digite apenas números.");
    valor.value = "";
    return;
  }

  const altura = parseFloat(valorAltura.value);
  if (isNaN(altura) || valorAltura.value.trim() === "") {
    alert("Altura inválida! Digite apenas números.");
    valorAltura.value = "";
    return;
  }

  let alturaConvertida = altura / 100;
  let imc = peso / (alturaConvertida * alturaConvertida);

  if (imc < 18.5) {
    resultadoFinal = "Você está abaixo do peso.";
    spanImc.style.backgroundColor = "#FFD700";
    resultado.style.backgroundColor = "#FFD700";
  } else if (imc >= 18.5 && imc <= 24.9) {
    resultadoFinal = "Seu peso está normal.";
    spanImc.style.backgroundColor = "#32CD32";
    resultado.style.backgroundColor = "#32CD32";
  } else if (imc >= 25.0 && imc <= 29.9) {
    resultadoFinal = "⚠️ Atenção, você está com sobrepeso.";
    spanImc.style.backgroundColor = "#FFA500";
    resultado.style.backgroundColor = "#FFA500";
  } else if (imc >= 30.0 && imc <= 34.9) {
    resultadoFinal = "⚠️ Atenção, obesidade grau I.";
    spanImc.style.backgroundColor = "#FF4500";
    resultado.style.backgroundColor = "#FF4500";
  } else if (imc >= 35.0 && imc <= 39.9) {
    resultadoFinal = "⚠️ Atenção, obesidade grau II.";
    spanImc.style.backgroundColor = "#FF4500";
    resultado.style.backgroundColor = "#FF4500";
  } else if (imc >= 40) {
    resultadoFinal = "⚠️ Atenção, obesidade grau III (Mórbida).";
    spanImc.style.backgroundColor = "#8B0000";
    resultado.style.backgroundColor = "#8B0000";
  }

  resultado.textContent = resultadoFinal;
  spanImc.textContent = imc.toFixed(1);
  spanImc.style.color = "#fff";
  resultado.style.color = "#fff";
});

btnLimpar.addEventListener("click", () => {
  valor.value = "";
  valorAltura.value = "";
  spanImc.textContent = "";
  spanImc.style.background = "#fff";
  resultado.textContent = "";
  resultado.style.background = "#fff";
});
