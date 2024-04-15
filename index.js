// poner un strikethrogh en el task que esta completado
// Poner filtro en estado completed, una vez que este completed que el boton no funcione mas.
// usar sweetalert para el edit, me dice algo de asincoronia???

let taskListStorage = localStorage.getItem("taskList");
taskListStorage = JSON.parse(taskListStorage); // Restore as an array with objects
console.log(taskListStorage);

// Array to store tasks //
let tasksArray = [];

// If storage has content push to array tasklist//
if (localStorage.getItem("taskList")) {
  // Retrieve the array from local storage
  var storedArray = JSON.parse(localStorage.getItem("taskList"));

  // Copy the content from the stored array to the new array
  tasksArray = storedArray.slice();
} else {
}
console.log(tasksArray);

// Function to add a new task
function addTask() {
  let taskInput = document.getElementById("taskInput");
  let taskName = taskInput.value.trim();

  if (taskName !== "") {
    // Create a task object and add it to the tasksArray
    let newTask = {
      name: taskName,
      status: false,
    };
    tasksArray.push(newTask);
    // Add the task to the table
    displayTasks();

    // Clear the input field after adding the task
    taskInput.value = "";

    console.log(tasksArray);
  }
}

function displayTasks(filteredTasks = null) {
  let tableBody = document.querySelector("#tasksTable tbody");
  tableBody.innerHTML = ""; // Clear the table before re-populating

  let tasks = filteredTasks ? filteredTasks : tasksArray;

  tasks.forEach((task, index) => {
    let newRow = tableBody.insertRow();
    newRow.className = "new-row";
    let cellTask = newRow.insertCell();
    cellTask.className = "cell-task ";
    cellTask.textContent = task.name;

    let cellActions = newRow.insertCell();
    let deleteButton = document.createElement("button");
    deleteButton.textContent = "Delete";
    deleteButton.className = "btn btn-danger";
    deleteButton.addEventListener("click", function () {
      function deleteAlert() {
        const swalWithBootstrapButtons = Swal.mixin({
          customClass: {
            confirmButton: "btn btn-success",
            cancelButton: "btn btn-danger",
          },
          buttonsStyling: false,
        });
        swalWithBootstrapButtons
          .fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonText: "Yes, delete it!",
            cancelButtonText: "No, cancel!",
            reverseButtons: true,
          })
          .then((result) => {
            if (result.isConfirmed) {
              swalWithBootstrapButtons.fire({
                title: "Deleted!",
                text: "Your task has been deleted.",
                icon: "success",
              });
              tasksArray.splice(index, 1);
              displayTasks(filteredTasks);
            } else if (result.dismiss === Swal.DismissReason.cancel) {
              swalWithBootstrapButtons.fire({
                title: "Cancelled",
                text: "Your task has not been deleted",
                icon: "error",
              });
              displayTasks();
            }
          });
      }
      deleteAlert();
    });
    cellActions.appendChild(deleteButton);

    let editButton = document.createElement("button");
    editButton.textContent = "Edit";
    editButton.className = "btn btn-warning";
    editButton.addEventListener("click", function editPrompt() {
      let editedTask = prompt(
        "Editing: " + ' " ' + task.name + ' " ' + ". Type task:"
      );
      tasksArray[index].name = editedTask;
      displayTasks(filteredTasks);
    });
    cellActions.appendChild(editButton);


    let completedButton = document.createElement("button");
    completedButton.textContent = "Completed";
    completedButton.className = "btn btn-success";
    completedButton.addEventListener("click", function () {
      Swal.fire({
        position: "top-end",
        icon: "success",
        title: "Completed",
        showConfirmButton: false,
        timer: 1500,
      });
      // Toggle the status of the task
      tasksArray[index].status = !tasksArray[index].status;


      // Add strikethrough and re-render row

      /*

      if (tasksArray[index].status) {

        tasksArray.splice(index, 1);
        displayTasks(filteredTasks);
              
        let newRow = tableBody.insertRow();
        newRow.className = "new-row";
        let cellTask = newRow.insertCell();
        cellTask.className = "striked";
        cellTask.textContent = task.name;

        console.log(cellTask.textContent)

        let completedTask = {
            name: task.name,
            status: true,
          };

        tasksArray.push(completedTask);





        let cellActions = newRow.insertCell();
        let deleteButton = document.createElement("button");
        deleteButton.textContent = "Delete";
        deleteButton.className = "btn btn-danger";
        deleteButton.addEventListener("click", function () {
        function deleteAlert() {
        const swalWithBootstrapButtons = Swal.mixin({
          customClass: {
            confirmButton: "btn btn-success",
            cancelButton: "btn btn-danger",
          },
          buttonsStyling: false,
        });
        swalWithBootstrapButtons
          .fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonText: "Yes, delete it!",
            cancelButtonText: "No, cancel!",
            reverseButtons: true,
          })
          .then((result) => {
            if (result.isConfirmed) {
              swalWithBootstrapButtons.fire({
                title: "Deleted!",
                text: "Your task has been deleted.",
                icon: "success",
              });
              tasksArray.splice(index, 1);
              displayTasks(filteredTasks);
            } else if (result.dismiss === Swal.DismissReason.cancel) {
              swalWithBootstrapButtons.fire({
                title: "Cancelled",
                text: "Your task has not been deleted",
                icon: "error",
              });
              displayTasks(filteredTasks);
            }
          });
      }
      deleteAlert();
    });
    cellActions.appendChild(deleteButton);
        }; */
    });
    cellActions.appendChild(completedButton);

    localStorage.setItem("taskList", JSON.stringify(tasksArray));
  });
  console.log(tasksArray);
}
// displayTasks initially to populate the table with existing tasks
displayTasks();






/*------EVENT LISTENERS------------------------------------------------------------------------------*/

// Event listener to show completed tasks
document
  .getElementById("showCompleted")
  .addEventListener("click", function (event) {
    event.preventDefault(); // Prevent default behavior of link
    displayCompletedTasks();
  });

// Event listener to show pending tasks
document
  .getElementById("showPending")
  .addEventListener("click", function (event) {
    event.preventDefault(); // Prevent default behavior of link
    displayPendingTasks();
  });

// Event listener to show all tasks
document.getElementById("showAll").addEventListener("click", function (event) {
  event.preventDefault(); // Prevent default behavior of link
  displayAllTasks();
});

// Event listener to clear the list
/*
    document.getElementById("clear").addEventListener("click", function() {
        tasksArray = []; // Empty the tasks array
        displayTasks(); // Update the display
    });
    */

/*------DISPLAY FUNCTIONS----------------------------------------------------------------------------*/

// Function to display completed tasks
function displayCompletedTasks() {
  let completedTasks = tasksArray.filter((task) => task.status);
  displayTasks(completedTasks);
}

// Function to display pending tasks
function displayPendingTasks() {
  let pendingTasks = tasksArray.filter((task) => !task.status);
  displayTasks(pendingTasks);
}

// Function to display all tasks
function displayAllTasks() {
  displayTasks(tasksArray);
}

/*-----ALERTS FUNCTIONS ----------------------------------------------------------------------------*/
