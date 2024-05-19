let taskListStorage = localStorage.getItem("taskList");
taskListStorage = JSON.parse(taskListStorage);
console.log(taskListStorage);

let tasksArray = [];

if (localStorage.getItem("taskList")) {
  let storedArray = JSON.parse(localStorage.getItem("taskList"));

  tasksArray = storedArray.slice();
} else {};

function addTask() {
  let taskInput = document.getElementById("taskInput");
  let taskName = taskInput.value.trim().toLowerCase();

  if (taskName !== "") {
    let newTask = {
      name: taskName,
      status: false,
    };
    tasksArray.push(newTask);

    displayTasks();

    taskInput.value = "";

    console.log(tasksArray);
  }
}

function displayTasks(filteredTasks = null) {
  let tableBody = document.querySelector("#tasksTable tbody");
  tableBody.innerHTML = "";

  let tasks = filteredTasks ? filteredTasks : tasksArray;

  tasks.forEach((task, index) => {
    let newRow = tableBody.insertRow();
    newRow.className = "new-row";
    let cellTask = newRow.insertCell();
    function cellTaskClassName() {
      if (tasksArray[index].status) {
        cellTask.className = "striked";
      } else {
        cellTask.className = "cell-task ";
      }
    }
    cellTaskClassName();

    cellTask.textContent = task.name;

    let cellActions = newRow.insertCell();
    cellActions.className = "cell-actions";
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
      async function showMessage() {
        const { value: text } = await Swal.fire({
          input: "textarea",
          inputLabel: "",
          inputPlaceholder: "Type your task here...",
          inputAttributes: {
            "aria-label": "Type your message here",
          },
          showCancelButton: true,
        });

        if (text) {
          await (tasksArray[index].name = text);
          displayTasks(filteredTasks);
        }
      }

      showMessage();

      displayTasks(filteredTasks);
    });
    cellActions.appendChild(editButton);

    let completedButton = document.createElement("button");
    completedButton.textContent = "Completed";

    function completedBtnClassName() {
      if (tasksArray[index].status) {
        completedButton.className = "btn-block";
      } else {
        completedButton.className = "btn btn-success";
      }
    }
    completedBtnClassName();

    completedButton.addEventListener("click", function () {
      Swal.fire({
        position: "top-end",
        icon: "success",
        title: "Completed",
        showConfirmButton: false,
        timer: 1500,
      });

      tasksArray[index].status = !tasksArray[index].status;

      displayTasks(filteredTasks);
    });

    cellActions.appendChild(completedButton);

    localStorage.setItem("taskList", JSON.stringify(tasksArray));
  });

  console.log(tasksArray);
}

displayTasks();

function displayCompletedTasks() {
  let completedTasks = tasksArray.filter((task) => task.status);
  displayTasks(completedTasks);
}

function displayPendingTasks() {
  let pendingTasks = tasksArray.filter((task) => !task.status);
  displayTasks(pendingTasks);
}

function displayAllTasks() {
  displayTasks(tasksArray);
}

const weatherForm = document.querySelector(".weatherForm");
const cityInput = document.querySelector(".cityInput");
const card = document.querySelector(".card");
const card2 = document.querySelector(".card2");
const apiKey = "29e082e102a8d0f35236b2dc261bbd91";

weatherForm.addEventListener("submit", async (event) => {
  event.preventDefault();
  const city = cityInput.value;

  if (city) {
    try {
      const weatherData = await getWeatherData(city);
      displayWeatherInfo(weatherData);
    } catch (error) {
      console.error(error);
      displayError(error);
    }
  } else {
    displayError("please enter a city");
  }
});

async function getWeatherData(city) {
  const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`;

  const response = await fetch(apiUrl);
  console.log(response);

  if (!response.ok) {
    throw new Error("Could not fetch weather data");
  }

  return await response.json();
}

function displayWeatherInfo(data) {
  console.log(data);

  const {
    name: city,
    main: { temp, humidity },
    weather: [{ description, id }],
  } = data;

  card.textContent = "";
  card.style.display = "";
  card2.textContent = "";
  card2.style.display = "";

  const cityDisplay = document.createElement("h2");
  const tempDisplay = document.createElement("p");
  const humidityDisplay = document.createElement("p");
  const descDisplay = document.createElement("p");
  const weatherEmoji = document.createElement("p");

  cityDisplay.textContent = city;
  tempDisplay.textContent = `${(temp - 273.15).toFixed(1)}°C`;
  humidityDisplay.textContent = `Humidity: ${humidity}%`;
  descDisplay.textContent = `${description}`;
  weatherEmoji.textContent = getWeatherEmoji(id);

  cityDisplay.classList.add("cityDisplay");
  tempDisplay.classList.add("tempDisplay");
  humidityDisplay.classList.add("humidityDisplay");
  descDisplay.classList.add("descDisplay");
  weatherEmoji.classList.add("weatherEmoji");

  card.appendChild(cityDisplay);
  card.appendChild(weatherEmoji);
  card2.appendChild(tempDisplay);
  card2.appendChild(humidityDisplay);
  card2.appendChild(descDisplay);
}

function getWeatherEmoji(weatherId) {
  switch (true) {
    case weatherId >= 200 && weatherId < 300:
      return "⛈️";
    case weatherId >= 300 && weatherId < 400:
      return "🌧️";
    case weatherId >= 500 && weatherId < 600:
      return "🌧️";
    case weatherId >= 600 && weatherId < 700:
      return "❄️";
    case weatherId >= 700 && weatherId < 800:
      return "💭";
    case weatherId === 800:
      return "☀️";
    case weatherId >= 801 && weatherId < 810:
      return "☁️";
    default:
      return "🛸";
  }
}

function displayError(message) {
  const errorDisplay = document.createElement("p");
  errorDisplay.textContent = message;
  errorDisplay.classList.add("errorDisplay");

  card.textContent = "";
  card.style.display = "flex";
  card.appendChild(errorDisplay);
}
