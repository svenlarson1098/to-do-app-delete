//delete assignment

function onReady() {
  const addToDoForm = document.getElementById('addToDoForm');
  const newToDoText = document.getElementById('newToDoText');
  const toDoList = document.getElementById('toDoList');

  addToDoForm.addEventListener('submit', event => {
    event.preventDefault();

    //get the text
    let title = newToDoText.value;

    //create a new li
    let newLi = document.createElement('li');

    //create a new input
    let checkbox = document.createElement('input');

    //set the input's type to checkbox
    checkbox.type = "checkbox";

    //set the title
    newLi.textContent = title;

    //attach the checkbox to the li
    newLi.appendChild(checkbox);

    //attach the new li to the ul
    toDoList.appendChild(newLi);

    // empty the input
    newToDoText.value = '';

    let deletebutton = document.createElement('button');

    deletebutton.innerHTML = "<b>delete</b>";
    newLi.appendChild(deletebutton);
    deletebutton.addEventListener("click", () => {
      toDoList.removeChild(newLi);
    });
  });
}
window.onload = function() {
  onReady();
};
