const express = require("express");
const app = express();
const port = 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.set("view engine", "ejs");

app.get("/index", (req, res) => {
  res.render("index", { title: "Contact - Kyuhun Lee" });
});

app.get("/", (req, res) => {
  res.render("home");
});

app.get("/postcard", (req, res) => {
  res.render("postcard");
});

app.post("/", async (req, res) => {
  const { message, name, email } = req.body;

  // Log the message details for now
  console.log("New message received:");
  console.log("From:", name, "(" + email + ")");
  console.log("Message:", message);

  // In a real application, this would send an email
  // For now, we'll just simulate a successful response
  res.json({ success: true });
});

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
