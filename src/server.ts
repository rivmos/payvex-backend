import app from "./app.js";
import connectDb from "./config/database.js";

const PORT = process.env.PORT || 3000;

connectDb();

app.listen(PORT, () => {
  console.log("Server is running on port " + PORT);
});

app.get("/", (req, res) => {
  res.send("Welcome to the Billing software");
});
