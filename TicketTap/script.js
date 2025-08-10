const movieSelect = document.getElementById("movie");
const seats = document.querySelectorAll(".row .seat:not(.occupied)");
const count = document.getElementById("count");
const total = document.getElementById("total");
const bookBtn = document.getElementById("bookBtn");
const confirmation = document.getElementById("confirmation");

let ticketPrice = +movieSelect.value;

// Update total and count
function updateSelectedCount() {
  const selectedSeats = document.querySelectorAll(".row .seat.selected");
  const selectedCount = selectedSeats.length;
  count.innerText = selectedCount;
  total.innerText = selectedCount * ticketPrice;
}

// Movie select event
movieSelect.addEventListener("change", e => {
  ticketPrice = +e.target.value;
  updateSelectedCount();
});

// Seat click event
seats.forEach(seat => {
  seat.addEventListener("click", () => {
    if (!seat.classList.contains("occupied")) {
      seat.classList.toggle("selected");
      updateSelectedCount();
    }
  });
});

// Book button click
bookBtn.addEventListener("click", () => {
  const selectedSeats = document.querySelectorAll(".row .seat.selected");
  if (selectedSeats.length > 0) {
    selectedSeats.forEach(seat => {
      seat.classList.remove("selected");
      seat.classList.add("occupied");
    });
    confirmation.textContent = "🎟️ Seats successfully booked!";
    updateSelectedCount();
  } else {
    confirmation.textContent = "⚠️ Please select at least one seat.";
    confirmation.style.color = "#e74c3c";
  }
});
