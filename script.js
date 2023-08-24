function addTask() {
          const taskInput = document.getElementById("task1");
          const endDate = document.getElementById("finishdate");
          const taskList = document.getElementById("tasklist");
      
          if (taskInput.value.trim() === "") {
              alert("Please enter a task description.");
              return;
          }
      
          const taskItem = document.createElement("li");
          taskItem.className = "task";
      
          const taskText = document.createElement("span");
          taskText.innerText = taskInput.value;
      
          const taskStartDate = new Date();
          const taskStartDateText = document.createElement("span");
          taskStartDateText.innerText = "Started: " + taskStartDate.toLocaleString();
      
          const taskfinishdate = new Date(endDate.value);
          const taskEndDateText = document.createElement("span");
          taskEndDateText.innerText = "End Date: " + taskfinishdate.toLocaleDateString();
      
          const editButton = document.createElement("button");
          editButton.className = "edit-button";
          editButton.innerText = "Edit";
          editButton.onclick = () => editTask(taskItem);
      
          const deleteButton = document.createElement("button");
          deleteButton.innerText = "Delete";
          deleteButton.onclick = () => deleteTask(taskItem);
      
          taskItem.appendChild(taskText);
          taskItem.appendChild(taskStartDateText);
          taskItem.appendChild(taskEndDateText);
          taskItem.appendChild(editButton);
          taskItem.appendChild(deleteButton);
      
          taskList.appendChild(taskItem);
      
          taskInput.value = "";
          endDate.value = "";
      }
      
      function editTask(taskItem) {
          const newTaskDescription = prompt("Edit task description:");
          if (newTaskDescription !== null) {
              const taskText = taskItem.querySelector("span");
              taskText.innerText = newTaskDescription;
      
              const editDate = new Date();
              const editDateText = document.createElement("span");
              editDateText.className = "edit-date";
              editDateText.innerText = "Edited: " + editDate.toLocaleString();
      
              const existingEditDate = taskItem.querySelector(".edit-date");
              if (existingEditDate) {
                  taskItem.replaceChild(editDateText, existingEditDate);
              } else {
                  taskItem.insertBefore(editDateText, taskItem.querySelector(".edit-button"));
              }
          }
      }
      
      function deleteTask(taskItem) {
          if (confirm("Are you sure you want to delete this task?")) {
              taskItem.remove();
          }
      }
      