let notas = [];
let nota;

do {
  nota = parseFloat(prompt("Ingresa una nota (0 para terminar):"));
  if (nota !== 0) {
    notas.push(nota);
  }
} while (nota !== 0);

let suma = notas.reduce((acc, val) => acc + val, 0);
let promedio = notas.length > 0 ? suma / notas.length : 0;

let mensaje = "";
if (promedio > 7) {
  mensaje = "PROMOCIONADO";
} else if (promedio >= 4 && promedio <= 7) {
  mensaje = "REGULAR";
} else if (promedio > 0 && promedio < 4) {
  mensaje = "REPROBADO";
} else {
  mensaje = "ERROR EN PROMEDIO";
}

let mayoresA7 = notas.filter(n => n > 7).length;
let entre4y7 = notas.filter(n => n >= 4 && n <= 7).length;
let menoresA4 = notas.filter(n => n < 4).length;

document.getElementById("resultado").innerHTML = `
  <p>Promedio: ${promedio.toFixed(2)}</p>
  <p>Mensaje: ${mensaje}</p>
  <h3>Resumen de notas:</h3>
  <ul>
    <li>CUANTAS NOTAS SON MAYORES A 7: ${mayoresA7}</li>
    <li>CUANTAS NOTAS SON MAYORES O IGUALES A 4 Y MENORES A 7: ${entre4y7}</li>
    <li>CUANTAS NOTAS SON MENORES A 4: ${menoresA4}</li>
  </ul>
`;