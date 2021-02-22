/* very basic server setup with express, author choosing not to go into a lot of detail. node/express is a deep topic */
const path = require("path");
const express = require("express");
const app = express();
// __dirname is the relative source directory for this file (/server/*)
const publicPath = path.join(__dirname, "..", "public", "dist");
const port = process.env.PORT || 3000;

// middleware:  some code that runs for each request. set it up with app.use();
app.use(express.static(publicPath));

// app.get('*', (req, res) => {
//     res.sendFile(path.join(publicPath, 'index.html'));
// });
let protected = ["favicon.ico"];

app.get("*", (req, res) => {
  if (protected.includes(publicPath)) {
    // Return the actual file
    res.sendFile(path.join(publicPath, "../public"));
  } else {
    // Otherwise, redirect to /public/index.html
    res.sendFile(path.join(publicPath, "index.html"));
  }
});

// start the server locally
app.listen(port, () => {
  console.log(
    "Server is working and up.  If using localhost, view on PORT 3000: http://localhost:3000/"
  );
});
