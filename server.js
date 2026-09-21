const express = require("express");
const axios = require("axios");

const app = express();
const PORT = 3000;

// This lets Express show the files inside my public folder.
app.use(express.static("public"));

// This route gets a random fun fact from another server.
app.get("/api/fun-fact", async (req, res) => {
  try {
    const response = await axios.get(
      "https://uselessfacts.jsph.pl/api/v2/facts/random",
      { timeout: 10000 }
    );

    const factText = response?.data?.text || response?.data?.fact;

    if (!factText) {
      return res.status(502).json({
        error: "Unexpected response from the upstream API",
      });
    }

    // I only send the fact text that my client needs.
    res.json({
      fact: factText,
    });
  } catch (error) {
    console.error("Error getting fun fact:", error.message);

    res.status(500).json({
      error: "Could not fetch fun fact",
    });
  }
});

// This starts my server.
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
