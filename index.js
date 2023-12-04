let stepsLunes = parseInt(prompt("¿Cuántos pasos caminaste el lunes?"));
let stepsMartes = parseInt(prompt("¿Cuántos pasos caminaste el martes?"));
let stepsMiercoles = parseInt(prompt("¿Cuántos pasos caminaste el miércoles?"));
let stepsJueves = parseInt(prompt("¿Cuántos pasos caminaste el jueves?"));
let stepsViernes = parseInt(prompt("¿Cuántos pasos caminaste el viernes?"));
let stepsSabado = parseInt(prompt("¿Cuántos pasos caminaste el sabado?"));
let stepsDomingo = parseInt(prompt("¿Cuántos pasos caminaste el domingo?"))


const getActualSteps = () =>
  stepsLunes +
  stepsMartes +
  stepsMiercoles +
  stepsJueves +
  stepsViernes +
  stepsSabado +
  stepsDomingo;

console.log(getActualSteps()+" pasos en total.");

const getIdealSteps = () => {
  let idealSteps = 10000;
  return idealSteps *7;
};

const calculateSteps = () => {
  const actualSteps = getActualSteps();
  const idealSteps = getIdealSteps();

  if(actualSteps === idealSteps) {
    console.log("¡Caminaste la cantidad perfecta para mantenerte sano!");
  }
  else if(actualSteps > idealSteps) {
    console.log("Caminaste " + (actualSteps -idealSteps) + " pasos extras, sigue así.");
  }
  else if(actualSteps < idealSteps) {
    console.log("Deberías caminar un poco más, caminaste " + (idealSteps - actualSteps) + " pasos menos de los que deberías.");
  }
  else {
    console.log("¡Hubo un Error! Revisar el código.");
  }
};

calculateSteps();
let peso = parseInt(prompt("Ingrese su peso en kilogramos"))
let minutes = parseInt(prompt("Ingrese la cantidad de minutos que camina por día"))
switch (true) {
    case minutes == 60:
        console.log("Quemas " + (0.029 * (peso * 2.2) * minutes) + " calorías al día. Caminas el tiempo suficiente para mantenerte sano.")
        break;
    case minutes < 60:
        console.log("Quemas " + (0.029 * (peso * 2.2) * minutes) + " calorías al día. Te recomendamos caminar por lo menos 1 hora al día.")
        break;
    case minutes > 60:
        console.log("Quemas " + (0.029 * (peso * 2.2) * minutes) + " calorías al día. Felicidades, eres un deportista.")
        break;
    default:
        console.log("Error")
        break;
};