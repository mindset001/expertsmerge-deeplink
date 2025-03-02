const express = require("express");
const app = express();
const path = require("path");

app.use(express.static("public"));

// Serve Android's assetlinks.json
app.get("/.well-known/assetlinks.json", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "assetlinks.json"));
});

// Serve iOS's apple-app-site-association
app.get("/.well-known/apple-app-site-association", (req, res) => {
  res.set("Content-Type", "application/json"); // Required for iOS
  res.sendFile(path.join(__dirname, "public", "apple-app-site-association"));
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
