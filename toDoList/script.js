let enter = document.querySelector(".input");
let itemList = document.querySelector("#items");
let emptyMessage = document.querySelector("#empty-message");

itemList.addEventListener("click", delAndEdit);
enter.addEventListener("submit", addItem);

function addItem(f) {
  f.preventDefault();
  let newItem = document.querySelector("#input-text");

  let list = document.createElement("li");
  list.className = "list-group-item";
  list.appendChild(document.createTextNode(newItem.value));

  let editButton = document.createElement("button");
  editButton.id = "edit";
  editButton.className = "pencil";

  let deleteButton = document.createElement("button");
  deleteButton.id = "delete";
  deleteButton.className = "dustbin";

  list.appendChild(editButton);
  list.appendChild(deleteButton);

  itemList.appendChild(list);
  newItem.value = "";
  updateEmptyMessage();
}


function delAndEdit(f) {
  // for delete
  if (f.target.classList.contains("dustbin")) {
    let li = f.target.parentElement;
    itemList.removeChild(li);
  }

  //for edit
  if (f.target.classList.contains("pencil")) {
    f.target.style.backgroundImage = 'url("./assets/printer.png")';
    let li = f.target.parentElement;
    let currentText = li.firstChild.textContent.trim();
    //creating an input field
    let inputField = document.createElement("input");
    inputField.type = "text";
    inputField.value = currentText;
    inputField.className = "input";

    li.replaceChild(inputField, li.firstChild);
    // li.firstChild.replaceWith(inputField);
    inputField.focus();

    inputField.addEventListener("blur", () => saveEdit(inputField, li,f.target));
    inputField.addEventListener("keydown", (e) => {
      if (e.key === "Enter") {
        return saveEdit(inputField, li,f.target);
      }
    });
  }
  updateEmptyMessage();
}

function saveEdit(inputField, li,pencilButton) {
  let newText = inputField.value;

  let textNode = document.createTextNode(newText);
  li.replaceChild(textNode, inputField);
    pencilButton.style.backgroundImage = ' url("./assets/pencil.png")';
}

function updateEmptyMessage() {
  if (itemList.children.length === 0) {
    emptyMessage.style.display = "block";
  } else {
    emptyMessage.style.display = "none";
  }
}
updateEmptyMessage();
