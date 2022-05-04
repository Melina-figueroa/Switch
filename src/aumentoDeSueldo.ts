let sueldoActual: number = Number(prompt("Sueldo actual")); //valor ingresado por teclado
let aumento: number = 0;
let total: number = sueldoActual + aumento;

if (sueldoActual >= 0 && sueldoActual <= 15000) {
  //sueldo actual 0-15.000(20%)
  aumento = 1.2 * sueldoActual;
  total = sueldoActual + aumento;
  console.log("Sueldo con aumento:", total, "(Su aumento es del 20%)");
} else if (sueldoActual >= 15001 && sueldoActual <= 20000) {
  //sueldo actual 15.001- 20.000(10%)
  aumento = 1.0 * sueldoActual;
  total = sueldoActual + aumento;
  console.log("Sueldo con aumento:", total, "(Su aumento es del 10%)");
} else if (sueldoActual >= 20001 && sueldoActual <= 25000) {
  //sueldo actual 20.001-25.000(5%)
  aumento = 1.05 * sueldoActual;
  total = sueldoActual + aumento;
  console.log("Sueldo con aumento:", total, "(Su aumento es del 5%)");
} else {
  aumento = sueldoActual; //mas de 25.000 (no hay aumento)
  console.log("No corresponde aumento");
}
