class TaskManager {
  constructor() {
    this.taskList = [];
  }

  addTask = () => {
    let title = prompt("Ingresar tarea");
    this.taskList.push({
      title,
      id: Date.now(),
      completed: false,
    });
    console.log(this.taskList);
  };

  list = () => {
    if ( this.taskList.length === 0) {
      alert ('Nada por hacer')
    }else {
    let sumTask = "Listado de Tareas: \n";

    this.taskList.forEach((task, idx) => {
    sumTask = `${sumTask} \n ${idx + 1} - ${task.title}  `;
    });
    alert(sumTask);
  };
  };

  editTask = () => {
    const n = prompt("Numero de tarea a editar?");

    if (n <= this.taskList.length) {
    const titleEditTask = prompt("Ingrese la nueva tarea: ");
    const idxToEdit = (this.taskList[n - 1].title = titleEditTask);
    }else{
      alert('ingrese un numero valido');
    }
  };

  deleteTask = () => {
    const n = prompt("Numero de tarea a eliminar?");

    if (n <= this.taskList.length) {
      const idxToDelete = this.taskList.splice(n - 1, 1);
    } else {
      alert("ingrese un numero valido");
      tManager.list()
    }
  };
}

/*
let list = () => {
  if (taskList.length === 0) {
    alert("Nada por hacer.");
  } else {
    taskList.forEach((task, idx) => alert(`${idx + 1} - ${task.title}`));
  }
};
*/
