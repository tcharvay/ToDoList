class TaskManager {
  constructor() {
    this.taskList = [];
  }

  addTask = () => {
    let title = prompt("Ingresar tarea");
    this.taskList.push({ title, id: Date.now(), completed: false });
    console.log(this.taskList)
  };

  list = () => {
    this.taskList.forEach((task, idx) => {
    console.log(`${idx + 1} - ${task.title}`);
    });
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