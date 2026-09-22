const express = require("express");
const axios = require("axios");

const app = express();
const PORT = 3000;

// This lets Express show the files inside my public folder.
app.use(express.static("public"));

// This route gets a random fun fact from another server.
app.get("/api/fun-fact", async (req, res) => {
  try {
    // I use Axios to make a GET request to the Useless Facts API.
    const response = await axios.get(
      "https://uselessfacts.jsph.pl/api/v2/facts/random"
    );

    // I only send the fact text back to the client.
    res.json({
      fact: response.data.text,
    });
  } catch (error) {
    // If something goes wrong, I send a simple error message.
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
