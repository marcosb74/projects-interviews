//obtiene la diferencia de anios
export function obtenerDiferenciaYear(year) {
  return new Date().getFullYear() - year;
}
// calcula el  total a pagar segun marca
export function calcularMarca(marca) {
  let incremento;
  switch (marca) {
    case "europeo":
      incremento = 1.3;
      break;
    case "americano":
      incremento = 1.15;
      break;
    case "asiatico":
      incremento = 1.15;
      break;
    default:
      break;
  }
  return incremento;
}

// calcula el tipo de seguro

export function obtenerPlan(plan) {
  return plan === "basico" ? 1.2 : 1.5;
}
// Muestra la primer letra en mayus
export function primerMayuscula(text) {
  return text.charAt(0).toUpperCase() + text.slice(1);
}
