let elForm = document.querySelector(".form");
let elInput = document.querySelector(".form-control");
let elBtn = document.querySelector(".btn");
let elList = document.querySelector(".js-list");

let todos = [];
elForm.addEventListener("submit", function (evt) {
  evt.preventDefault();

  todos.push(elInput.value);

  for (let item of todos) {
    let itemLi = document.createElement("li");
    itemLi.setAttribute("class", "list-group-item mt-2 p-4 fs-3");
    itemLi.textContent = elInput.value;
    elList.appendChild(itemLi);

    let btnLi = document.createElement("button");
    btnLi.setAttribute("class", "btn btn-danger mt-2 p-4 fs-3");
    btnLi.textContent = "Remove";
    elList.appendChild(btnLi);

    btnLi.addEventListener("click", function () {
      alert("I Can'\t delete sorry!");
    });
  }
  elInput.value = "";
});
