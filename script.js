
var popupOverlay = document.querySelector(".popup-overlay");
var popupBox = document.querySelector(".popup-box");
var addpopup = document.getElementById("popup-button");

addpopup.addEventListener("click", function () {
  popupOverlay.style.display = "block";
  popupBox.style.display = "block";
});

var cancelTaskButton = document.getElementById("cancel-task-button");

cancelTaskButton.addEventListener("click", function (event) {
  event.preventDefault();
  popupOverlay.style.display = "none";
  popupBox.style.display = "none";
});

/*container,add-task-button,task-date-input,task-name-input,task-duration-input,task-details-input*/
var container = document.querySelector(".container");
var addTaskButton = document.getElementById("add-task-button");
var taskDateInput = document.getElementById("task-date-input");
var taskNameInput = document.getElementById("task-name-input");
var taskDurationInput = document.getElementById("task-duration-input");
var taskDetailsInput = document.getElementById("task-details-input");

addTaskButton.addEventListener("click", function (event) {
  event.preventDefault();

  var div = document.createElement("div");
  div.setAttribute("class", "task-container");
  div.innerHTML = `<h2>${taskDateInput.value}</h2>
        <h2>${taskNameInput.value}</h2>
        <h4>${taskDurationInput.value}</h4>
        <p>${taskDetailsInput.value}</p>
        <button class="task-button" onclick="deleteButton(event)">
          Task Completed <i class="fa-solid fa-check"></i>
        </button>`;
  container.append(div);
  popupOverlay.style.display = "none";
  popupBox.style.display = "none";
});

function deleteButton(event) {
  event.target.parentElement.remove();
}
