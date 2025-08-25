function fetchDoctors(district) {
  const doctorsContainer = document.getElementById("doctorsContainer");
  doctorsContainer.innerHTML = "";

  if (!district) return;

  if (district === "Haveri") {
    const doctors = [
      { name: "Dr. Arjun Rao", expertise: "Cardiologist", exp: 12, hospital: "Apollo Hospitals", img: "https://randomuser.me/api/portraits/men/45.jpg" },
      { name: "Dr. Priya Shetty", expertise: "Dermatologist", exp: 8, hospital: "Fortis Hospital", img: "https://randomuser.me/api/portraits/women/44.jpg" },
      { name: "Dr. Kiran Kumar", expertise: "Orthopedic Surgeon", exp: 15, hospital: "Manipal Hospitals", img: "https://randomuser.me/api/portraits/men/33.jpg" },
      { name: "Dr. Sneha Rao", expertise: "Gynecologist", exp: 10, hospital: "Columbia Asia Hospital", img: "https://randomuser.me/api/portraits/women/36.jpg" },
      { name: "Dr. Ramesh Naik", expertise: "Neurologist", exp: 18, hospital: "Narayana Health", img: "https://randomuser.me/api/portraits/men/22.jpg" }
    ];

    doctors.forEach(doc => {
      const card = document.createElement("div");
      card.classList.add("doctor-card");

      card.innerHTML = `
        <img src="${doc.img}" alt="${doc.name}">
        <h3>${doc.name}</h3>
        <p><b>Expertise:</b> ${doc.expertise}</p>
        <p><b>Experience:</b> ${doc.exp} years</p>
        <p><b>Hospital:</b> ${doc.hospital}</p>
        <button class="appointment-btn" onclick="bookAppointment('${doc.name}', '${doc.expertise}', '${doc.hospital}')">Book Appointment</button>
      `;
      doctorsContainer.appendChild(card);
    });
  } else {
    doctorsContainer.innerHTML = `<p style="color:#006699; font-size:18px;"><b>Doctors currently unavailable in ${district}</b></p>`;
  }
}

// Open new page with doctor details + clickable phone number
function bookAppointment(name, expertise, hospital) {
  const contactNumber = "9380340087";

  const newPage = window.open("", "_blank");
  newPage.document.write(`
    <html>
      <head>
        <title>Book Appointment</title>
        <style>
          body { font-family: Arial, sans-serif; padding: 30px; background: #f9f9f9; color: #333; }
          .container { background: white; padding: 25px; border-radius: 12px; max-width: 500px; margin:auto; box-shadow: 0 4px 10px rgba(0,0,0,0.1); }
          h2 { color: #0066cc; }
          p { font-size: 16px; margin: 8px 0; }
          a.call-btn { display:inline-block; margin-top:20px; padding:12px 20px; background:#0066cc; color:white; text-decoration:none; font-size:18px; border-radius:8px; }
          a.call-btn:hover { background:#004c99; }
        </style>
      </head>
      <body>
        <div class="container">
          <h2>Appointment Booking</h2>
          <p><b>Doctor:</b> ${name}</p>
          <p><b>Specialization:</b> ${expertise}</p>
          <p><b>Hospital:</b> ${hospital}</p>
          <hr>
          <p>📞 To book the appointment, click below:</p>
          <a class="call-btn" href="tel:${contactNumber}">Call ${contactNumber}</a>
        </div>
      </body>
    </html>
  `);
}
