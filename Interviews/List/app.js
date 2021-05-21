//#region Adding elements to the list
const form = document.getElementById("formAdd");
let list = document.getElementById("items");
form.addEventListener("submit", addToList);
function addToList(e) {
  e.preventDefault();
  let newItem = document.getElementById("item").value;
  let li = document.createElement("li");
  li.className = "list-group-item";
  li.appendChild(document.createTextNode(newItem));
  let checkbox = document.createElement("input");
  checkbox.setAttribute("type", "checkbox");
  checkbox.className = "form-check-input float-right";
  li.appendChild(checkbox);

  list.appendChild(li);
}
//#endregion
