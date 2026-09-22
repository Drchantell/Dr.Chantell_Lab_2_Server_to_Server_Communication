const factText = document.getElementById("fact");
const factButton = document.getElementById("factButton");

// When I click the button, this runs my getFunFact function.
factButton.addEventListener("click", getFunFact);

async function getFunFact() {
  factText.textContent = "Getting a fun fact...";

  try {
    // My browser asks my Express server for a fun fact.
    const response = await fetch("/api/fun-fact");
    const data = await response.json();

    // I display the fact on the page.
    factText.textContent = data.fact;
  } catch (error) {
    factText.textContent = "Sorry, I could not load a fun fact.";
  }
}
