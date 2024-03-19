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
    console.log(this.taskList)
  };

  list = () => {

    let sumTask = ('Listado de Tareas: \n')

    this.taskList.forEach((task, idx) => {
    sumTask = (`${sumTask} \n ${idx + 1} - ${task.title}  `);
    });
    alert(sumTask)
}
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