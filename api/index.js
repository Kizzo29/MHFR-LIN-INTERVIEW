const express = require('express');
import homeRoute from "./routes/facilities"
import newRoute from "./routes/new"

const app = express();

app.use(express.json());

app.get ('/', (req, res) => {
   res.send ("Hi")
})

app.use("/api/home", homeRoutes);
app.use("/api/new", newRoutes);


app.listen(8800, () => {
    console.log("Connected!");
  });