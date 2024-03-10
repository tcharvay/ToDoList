
let userName;
let lastName;

userName = prompt('Bienvenido, ingrese su Nombre: ')
lastName = prompt ('Apellido?')

let greetingUser = new User (userName, lastName)

alert('hola ' +  greetingUser.userName + " " + greetingUser.userLastName) 

// Quiero reemplazar el alert por el metodo greeting en userName.js //

console.log(greetingUser)


let option;
let taskList = [];

function addTask() {
  taskList.push(prompt("ingresar tarea"));
}

function list() {
  if (taskList.length === 0) {
    alert("Nada por hacer.");
  } else alert(`Listado de tareas: ${taskList}`);
}

do {
  option = prompt(
    "Seleccionar: \n1 - Ingresar tarea \n2 - Ver listado de tareas \n3 - salir"
  );

  switch (option) {
    case "1":
      addTask();
      break;
    case "2":
      list();
      break;
    case "3":
      false;
      break;
    default:
      alert("Ingrese una opcion valida");
  }
} while (option != 3);
