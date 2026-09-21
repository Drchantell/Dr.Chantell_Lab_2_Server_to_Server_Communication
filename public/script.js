const factText = document.getElementById("fact");
const factButton = document.getElementById("factButton");

if (!factText || !factButton) {
  console.error("Fun fact UI elements were not found.");
} else {
  factButton.addEventListener("click", getFunFact);
}

function setLoadingState(isLoading) {
  if (!factButton) return;

  factButton.disabled = isLoading;
  factButton.textContent = isLoading ? "Loading..." : "Get Fun Fact";
}

async function getFunFact() {
  if (!factText || !factButton) return;

  setLoadingState(true);
  factText.textContent = "Getting a fun fact...";

  try {
    // My browser asks my Express server for a fact.
    const response = await fetch("/api/fun-fact");
    const data = await response.json();

    if (!response.ok || !data?.fact) {
      throw new Error(data?.error || "Could not load fun fact");
    }

    factText.textContent = data.fact;
  } catch (error) {
    console.error("Error loading fun fact:", error.message);
    factText.textContent = "Sorry, I could not load a fun fact.";
  } finally {
    setLoadingState(false);
  }
}
