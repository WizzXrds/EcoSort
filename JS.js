// script.js
document.getElementById("residuo-select").addEventListener("change", function () {
    const valor = this.value;
    const resultado = document.getElementById("resultado-clasificacion");

    const clasificaciones = {
        organico: "Residuos como cáscaras de frutas y restos de comida. Usa un compostador.",
        plastico: "Reciclable. Lávalo y deposítalo en el contenedor amarillo.",
        papel: "Reciclable. Deposítalo en el contenedor azul.",
        vidrio: "Reciclable. Deposítalo en el contenedor verde.",
        peligroso: "Desecha en puntos especializados. Ejemplo: pilas, medicamentos vencidos."
    };

    resultado.textContent = clasificaciones[valor] || "Selecciona un residuo válido.";
});

// Opcional: Carga dinámica del mapa (Google Maps o Leaflet.js)