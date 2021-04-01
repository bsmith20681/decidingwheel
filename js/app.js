function addEntry() {
  const entryInput = document.getElementById("entryInput"),
    entryValue = entryInput.value,
    entryList = document.getElementById("entries");

  if (entryValue === "") {
    alert("You must enter something into the input field");
  } else {
    entryList.insertAdjacentHTML(
      "beforeend",
      `<div><div class="entry-item"><div class="entry-item-text"><i class="fas fa-bars fa-lg"></i><p class="item">${entryValue}</p></div><a onclick="deleteEntry(this)" class="btn btn-red">Delete</a></div><div class="entry-item-bottom-border"></div></div>`
    );

    entryInput.value = "";
  }

  createWheel();
}

window.addEventListener("keydown", function (e) {
  if (e.keyCode === 13) {
    e.preventDefault();
    addEntry();
  }
});

function deleteEntry(e) {
  e.parentElement.parentElement.remove();
  let entryArray = Array.from(document.querySelectorAll(".item")).map((x) => {
    return {
      text: x.innerHTML,
    };
  });
  console.log(entryArray);

  createWheel();
}

function createWheel() {
  let entryArray = Array.from(document.querySelectorAll(".item")).map((x) => {
    return {
      text: x.innerHTML,
    };
  });
  theWheel = new Winwheel({
    canvasId: "wheel",
    numSegments: entryArray.length,
    outerRadius: 120,
    textFontSize: 20,
    fillStyle: "#e7706f",

    segments: entryArray,

    animation: {
      type: "spinToStop",
      duration: 5,
      spins: 8,
      callbackFinished: alertPrize,
    },
  });

  function alertPrize(indicatedSegment) {
    alert("You have won " + indicatedSegment.text);
  }
}
