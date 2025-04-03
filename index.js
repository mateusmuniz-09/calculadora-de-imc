const btnCalcular = document.getElementById("btn-calcular");
let resultadoFinal = "";
const resultado = document.getElementById("resultado");
const spanImc = document.getElementById("imc");
const valorAltura = document.getElementById("altura");
const valor = document.getElementById("peso");
const btnLimpar = document.getElementById("btn-limpar");

btnCalcular.addEventListener("click", function () {
  const peso = parseFloat(valor.value);
  if (isNaN(peso) || peso === "") {
    alert("Peso inválido, digite apenas numeros!");
    valor.value = "";
    return;
  }

  const altura = parseFloat(valorAltura.value);
  if (isNaN(altura) || altura === "") {
    alert("Altura inválida, digite apenas numeros!");
    valorAltura.value = "";
    return;
  }
  let alturaConvertida = altura / 100;
  let imc = parseFloat(peso / (alturaConvertida * alturaConvertida));
  if (imc < 18.5) {
    resultadoFinal = "Você está abaixo do peso.";
    resultado.textContent = resultadoFinal;
    spanImc.textContent = imc.toFixed(1);
    spanImc.style.color = "#333";
    spanImc.style.backgroundColor = "#FFD700";
    resultado.style.color = "#333";
    resultado.style.backgroundColor = "#FFD700";
    return;
  } else if (imc === 18.5 || imc <= 24.9) {
    resultadoFinal = "Seu peso está normal.";
    resultado.textContent = resultadoFinal;
    spanImc.textContent = imc.toFixed(1);
    spanImc.style.color = "#fff";
    spanImc.style.backgroundColor = "#32CD32";
    resultado.style.color = "#fff";
    resultado.style.backgroundColor = "#32CD32";
    return;
  } else if (imc === 25.0 || imc <= 29.9) {
    resultadoFinal = "⚠️Atenção, você está com sobrepeso";
    resultado.textContent = resultadoFinal;
    spanImc.textContent = imc.toFixed(1);
    spanImc.style.color = "#fff";
    spanImc.style.backgroundColor = "#FFA500";
    resultado.style.color = "#fff";
    resultado.style.backgroundColor = "#FFA500";
    return;
  } else if (imc === 30.0 || imc <= 34.9) {
    resultadoFinal = "⚠️Atenção, obesidade grau I";
    resultado.textContent = resultadoFinal;
    spanImc.textContent = imc.toFixed(1);
    spanImc.style.color = "#fff";
    spanImc.style.backgroundColor = "#FF4500";
    resultado.style.color = "#fff";
    resultado.style.backgroundColor = "#FF4500";
    return;
  } else if (imc === 35.0 || imc <= 39.9) {
    resultadoFinal = "⚠️Atenção, obesidade grau II";
    resultado.textContent = resultadoFinal;
    spanImc.textContent = imc.toFixed(1);
    spanImc.style.color = "#fff";
    spanImc.style.backgroundColor = "##FF4500";
    resultado.style.color = "#fff";
    resultado.style.backgroundColor = "##FF4500";
    return;
  } else if (imc > 40) {
    resultadoFinal = "⚠️Atenção, obesidade grau III (Mórbida)";
    resultado.textContent = resultadoFinal;
    spanImc.textContent = imc.toFixed(1);
    spanImc.style.color = "#fff";
    spanImc.style.backgroundColor = "#8B0000";
    resultado.style.color = "#fff";
    resultado.style.backgroundColor = "#8B0000";
    return;
  }
});

btnLimpar.addEventListener("click", () => {
  valor.value = "";
  valorAltura.value = "";
  spanImc.textContent = "";
  spanImc.style.background = "#fff";
  resultado.textContent = "";
  resultado.style.background = "#fff";
});
