let userName;
let lastName;

userName = prompt("Bienvenido, ingrese su Nombre: ");
lastName = prompt("Apellido:");

let greetingUser = new User(userName, lastName);

greetingUser.greeting();

let option;
/*
let addTask = (title) => {
  title = prompt("Ingresar tarea");

  taskList.push({ title, id: Date.now(), completed: false });
};
console.log(taskList);
*/

let list = () =>  
  this.taskList.forEach((task, idx) => {
    console.log(`${idx + 1} - ${task.title}`)
  });  


const tManager = new TaskManager ();



do {
  option = prompt(
    "Seleccionar: \n1 - Ingresar tarea \n2 - Ver listado de tareas \n3 - Editar \n4 - Salir"
  );

  switch (option) {
    case "1":
      tManager.addTask()
      break;
    case "2":
      tManager.list()
      break;
    case "3":
      list();
      break;
    case "4":
      false;
      break;
    default:
      alert("Ingrese una opcion valida");
  }
} while (option != 4);
