let userName;
let lastName;

userName = prompt("Bienvenido, ingrese su Nombre: ");
lastName = prompt("Apellido:");

let greetingUser = new User(userName, lastName);

greetingUser.greeting();

let option;

const tManager = new TaskManager ();

do {
  option = prompt(
    "Seleccionar: \n1 - Ingresar tarea \n2 - Ver listado de tareas \n3 - Editar \n4 - Eliminar \n5 - Salir"
  );

  switch (option) {
    case "1":
      tManager.addTask()
      break;
    case "2":
      tManager.list()
      break;
    case "3":
      tManager.editTask();
      break;
    case "4":
      tManager.deleteTask();
      break;
    case "5":
      false;
      break;
    default:
      alert("Ingrese una opcion valida");
  }
} while (option != 5);
