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

  let entryArray = Array.from(document.querySelectorAll(".item")).map((x) => {
    return {
      text: x.innerHTML,
    };
  });
  console.log(entryArray);

  createWheel(entryArray);
}

window.addEventListener("keydown", function (e) {
  if (e.keyCode === 13) {
    e.preventDefault();
    addEntry();
  }
});

function deleteEntry(e) {
  e.parentElement.remove();
  let entryArray = Array.from(document.querySelectorAll(".item")).map((x) => {
    return {
      text: x.innerHTML,
    };
  });
  console.log(entryArray);

  createWheel(entryArray);
}

function createWheel(arr) {
  theWheel = new Winwheel({
    canvasId: "wheel",
    numSegments: arr.length,
    outerRadius: 120,
    textFontSize: 20,
    fillStyle: "#e7706f",

    segments: arr,

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
