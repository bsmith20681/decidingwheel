function addEntry() {
  const entryInput = document.getElementById("entryInput"),
    entryValue = entryInput.value,
    entryList = document.getElementById("entries");

  if (entryValue === "") {
    alert("You must enter something into the input field");
  } else {
    entryList.insertAdjacentHTML(
      "beforeend",
      `<div class="entry-item"><i class="fas fa-bars"></i><p class="item">${entryValue}</p><i onclick="deleteEntry(this)" class="fas fa-trash"></i></div>`
    );

    entryInput.value = "";
  }
}

window.addEventListener("keydown", function (e) {
  if (e.keyCode === 13) {
    e.preventDefault();
    addEntry();
  }
});

function deleteEntry(e) {
  e.parentElement.remove();
}
