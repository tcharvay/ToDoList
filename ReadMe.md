Projecto para curso de JS de Coderhouse

Descripcion

Es un to do list al que se le pueden agregar, editar o eliminar tareas.

Se puede filtrar todas las tareas, las pendientes y las completadas.

Lenguajes utilizados: HTML - CSS - JS

Librerias: SweetAlert2 





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