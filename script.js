function calcularECTS() {
    const horas = document.getElementById("horas").value;
    const etcts = Math.floor(horas / 25);
    const resto = horas % 25;

    let resultadoFinal = etcts;

    if (resto >= 3) {
        resultadoFinal++;
    }

    document.getElementById("resultado").textContent = `${horas} horas = ${resultadoFinal} ECTS`;
}
