function Booking() {
  return (
    <div>
      <h1>Movie Booking</h1>

      <label>Select Movie:</label>
      <select>
        <option>Avengers</option>
        <option>Batman</option>
        <option>Interstellar</option>
      </select>

      <br /><br />

      <label>Select Date:</label>
      <input type="date" />

      <br /><br />

      <button>Proceed to Seats</button>
    </div>
  );
}

export default Booking;