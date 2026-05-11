// Contact Modal
document.getElementById("contactBtn").onclick = () => document.getElementById("contactModal").style.display = "flex";
document.getElementById("closeContact").onclick = () => document.getElementById("contactModal").style.display = "none";
// Login Modal
document.getElementById("loginBtn").onclick = () => document.getElementById("loginModal").style.display = "flex";
document.getElementById("closeLogin").onclick = () => document.getElementById("loginModal").style.display = "none";
// Sign Up
document.getElementById("openSignup").onclick = () => { document.getElementById("loginModal").style.display = "none"; document.getElementById("signupModal").style.display = "flex"; };
document.getElementById("closeSignup").onclick = () => document.getElementById("signupModal").style.display = "none";
document.getElementById("backToLogin").onclick = () => { document.getElementById("signupModal").style.display = "none"; document.getElementById("loginModal").style.display = "flex"; };
// Forgot Password
document.getElementById("forgotPassword").onclick = () => { document.getElementById("loginModal").style.display = "none"; document.getElementById("forgotModal").style.display = "flex"; };
document.getElementById("closeForgot").onclick = () => document.getElementById("forgotModal").style.display = "none";
// Flight Search
document.getElementById("searchForm").addEventListener("submit", function(e){
  e.preventDefault();
  const flightsContainer = document.getElementById("flightsContainer");
  flightsContainer.innerHTML = "";
  const flights = [
    {id:1, airline:"Air India", duration:"2h 30m", takeoff:"8:00 AM", landing:"10:30 AM", price:5000},
    {id:2, airline:"IndiGo", duration:"3h 15m", takeoff:"10:00 AM", landing:"01:15 PM", price:4500},
    {id:3, airline:"SpiceJet", duration:"1h 50m", takeoff:"10:45 AM", landing:"12:35 PM", price:5800},
    {id:4, airline:"IndiGo", duration:"3h 15m", takeoff:"01:30 PM", landing:"04:45 PM", price:4500},
    {id:5, airline:"Air India Express", duration:"1h 50m", takeoff:"05:45 PM", landing:"07:35 PM", price:6000},
    {id:6, airline:"AirAsia india", duration:"1h 50m", takeoff:"09:00 PM", landing:"10:35 PM", price:4800},
  ];
  flights.forEach(f => {
    const card = document.createElement("div");
    card.className = "flight-card";
    card.innerHTML = `
      <h3>${f.airline}</h3>
      <p><strong>Duration:</strong> ${f.duration}</p>
      <p><strong>Takeoff:</strong> ${f.takeoff}</p>
      <p><strong>Landing:</strong> ${f.landing}</p>
      <p><strong>Price:</strong> ₹${f.price}</p>
      <button class="btn-primary" onclick="openPassengerForm(${f.id})">Select</button>
    `;
    flightsContainer.appendChild(card);
  });
});
// Passenger Modal
function openPassengerForm(flightId) {
  document.getElementById("passengerModal").style.display = "flex";
}
document.getElementById("closePassenger").onclick = () => document.getElementById("passengerModal").style.display = "none";
// Generate passenger fields
document.getElementById("numPassengers").addEventListener("input", function(){
  const num = this.value;
  const container = document.getElementById("passengerFields");
  container.innerHTML = "";
  for(let i=1;i<=num;i++){
    container.innerHTML += `
      <h4>Passenger ${i}</h4>
      <label>Name:</label><input type="text" required>
      <label>Age:</label><input type="number" min="1" required>
      <label>Gender:</label>
      <select required><option value="">Select</option><option>Male</option><option>Female</option><option>Other</option></select>
      <label>Seat Type:</label>
      <select required><option value="">Select</option><option>Business Class</option><option>First Class</option><option>Economy Class</option></select>
    `;
  }
});
// Passenger → Payment
document.getElementById("passengerForm").addEventListener("submit", function(e){
  e.preventDefault();
  document.getElementById("passengerModal").style.display = "none";
  document.getElementById("paymentModal").style.display = "flex";
});
// Close Payment
document.getElementById("closePayment").onclick = () => document.getElementById("paymentModal").style.display = "none";
// Payment → Confirmation
document.getElementById("paymentForm").addEventListener("submit", function(e){
  e.preventDefault();
  document.getElementById("paymentModal").style.display = "none";
  document.getElementById("confirmationModal").style.display = "flex";
});
// Close Confirmation
document.getElementById("closeConfirmation").onclick = () => document.getElementById("confirmationModal").style.display = "none";
document.getElementById("numPassengers").addEventListener("input", function(){
  const num = this.value;
  const container = document.getElementById("passengerFields");
  container.innerHTML = "";
  for(let i=1;i<=num;i++){
    const card = document.createElement("div");
    card.className = "passenger-card";
    card.innerHTML = `
      <h4>Passenger ${i}</h4>
      <label>Name:</label><input type="text" placeholder="Full Name" required>
      <label>Age:</label><input type="number" min="1" placeholder="Age" required>
      <label>Gender:</label>
      <select required>
        <option value="">Select</option>
        <option>Male</option>
        <option>Female</option>
        <option>Other</option>
      </select>
      <label>Seat Type:</label>
      <select required>
        <option value="">Select</option>
        <option>Business Class</option>
        <option>First Class</option>
        <option>Economy Class</option>
      </select>
    `;
    container.appendChild(card);
  }
});
