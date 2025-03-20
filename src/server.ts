import app from "./app.js";

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log("Server is running on port 3000");
});

app.get("/", (req, res) => {
  res.send("Welcome to the Billing software");
});
