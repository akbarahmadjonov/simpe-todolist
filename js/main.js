let elForm = document.querySelector(".form");
let elInput = document.querySelector(".form-control");
let elBtn = document.querySelector(".btn");
let elList = document.querySelector(".js-list");
let elRecord = document.querySelector(".js-record");
let elSpinner = document.querySelector(".js-spinner");

let voice = new webkitSpeechRecognition();

elRecord.addEventListener("click", () => {
  voice.start();
  elSpinner.classList.remove("d-none");
});
voice.onend = function () {
  elSpinner.classList.add("d-none");
};

voice.onresult = function (e) {
  elInput.value = e.results[0][0].transcript;
  console.log(e);
};

elForm.addEventListener("submit", function (evt) {
  evt.preventDefault();

  // Checks if the input is empty
  if (elInput.value == "") {
    elInput.classList.add("border-danger");
    return;
  } else {
    elInput.classList.remove("border-danger");
  }

  let obj = {
    // id: todos.length,
    text: elInput.value,
  };

  let itemLi = document.createElement("li");
  itemLi.setAttribute("class", "list-group-item mt-2 p-4 fs-3");
  itemLi.textContent = obj.text;
  elList.appendChild(itemLi);
  let btnLi = document.createElement("button");
  btnLi.setAttribute("class", "btn btn-danger mt-2 p-4 fs-3");
  btnLi.textContent = "Remove";
  elList.appendChild(btnLi);

  btnLi.addEventListener("click", function () {
    alert("I Can'\t delete sorry!");
  });

  elInput.value = "";
});
