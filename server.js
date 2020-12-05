const express = require("express");
const path = require("path");

const app = express();
const PORT = 8080;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

let reservation = [];
let waitList = [];

app.get("/", (req, res) => res.sendFile(path.join(__dirname, "index.html")));

app.get("/tables", (req, res) =>
  res.sendFile(path.join(__dirname, "tables.html"))
);

app.get("/reserve", (req, res) =>
  res.sendFile(path.join(__dirname, "reserve.html"))
);

app.get("/api/tables", (req, res) => res.json(reservation));

app.get("/api/waitlist", (req, res) => res.json(waitList));

app.post("/reserve", (req, res) => {
    const newReservation = req.body

    console.log(newReservation)

    reservation.push(newReservation)
});

//start server
app.listen(PORT, () => {
  console.log(`Started on PORT ${PORT}`);
});


