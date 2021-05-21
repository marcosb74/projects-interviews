let updateId = null;
const form = document.getElementById("add-task-form");
const lista = document.getElementById("lista-tareas");
const updateBtn = document.getElementById("updateBtn");
let newTitulo = "";
form.addEventListener("submit", (e) => {
  e.preventDefault();
  db.collection("tareas").add({
    titulo: form.titulo.value,
  });
  form.titulo.value = "";
});

const renderList = (doc) => {
  let li = document.createElement("li");
  li.className = "collection-item";
  li.setAttribute("data-id", doc.id);

  let div = document.createElement("div");
  let titulo = document.createElement("span");
  titulo.textContent = doc.data().titulo;

  let link = document.createElement("a");
  link.href = "#modal1";
  link.className = "modal-trigger secondary-content";

  let editBtn = document.createElement("i");
  editBtn.className = "material-icons";
  editBtn.innerText = "edit";

  let delBtn = document.createElement("i");
  delBtn.className = "material-icons secondary-content";
  delBtn.innerText = "delete";

  link.appendChild(editBtn);
  div.appendChild(titulo);
  div.appendChild(delBtn);
  div.appendChild(link);
  li.appendChild(div);

  delBtn.addEventListener("click", (e) => {
    let id = e.target.parentElement.parentElement.getAttribute("data-id");
    db.collection("tareas").doc(id).delete();
  });

  editBtn.addEventListener("click", (e) => {
    updateId = e.target.parentElement.parentElement.parentElement.getAttribute(
      "data-id"
    );
  });

  lista.append(li);
};
updateBtn.addEventListener("click", (e) => {
  newTitulo = document.getElementsByName("newTitle")[0].value;
  db.collection("tareas").doc(updateId).update({
    titulo: newTitulo,
  });
  newTitulo = document.getElementsByName("newTitle")[0].value = "";
});
db.collection("tareas")
  .orderBy("titulo")
  .onSnapshot((snapshot) => {
    let cambios = snapshot.docChanges();
    cambios.forEach((cambio) => {
      if (cambio.type == "added") {
        renderList(cambio.doc);
      } else if (cambio.type == "removed") {
        let li = lista.querySelector(`[data-id=${cambio.doc.id}]`);
        lista.removeChild(li);
      } else if (cambio.type == "modified") {
        let li = lista.querySelector(`[data-id=${cambio.doc.id}]`);
        li.getElementsByTagName("span")[0].textContent = newTitulo;
        newTitulo = "";
      }
    });
  });
