const express = require("express");
const cors = require("cors");
const data = require("./doctorsData");

const app = express();
app.use(cors());

const PORT = 3000;

// Get all districts
app.get("/districts", (req, res) => {
  res.json(data.districts);
});

// Get doctors by district
app.get("/doctors", (req, res) => {
  const district = req.query.district;
  if (!district) {
    return res.status(400).json({ error: "Please provide a district query parameter" });
  }
  const doctorsList = data.doctors.filter(
    doc => doc.district.toLowerCase() === district.toLowerCase()
  );
  res.json(doctorsList);
});

app.listen(PORT, () => {
  console.log(Server running on port ${PORT});
});