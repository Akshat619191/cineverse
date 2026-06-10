function SeatAllocation() {
  const seats = [
    "A1", "A2", "A3", "A4",
    "B1", "B2", "B3", "B4",
    "C1", "C2", "C3", "C4"
  ];

  return (
    <div>
      <h1>Seat Allocation</h1>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(4, 80px)",
          gap: "10px"
        }}
      >
        {seats.map((seat) => (
          <button key={seat}>{seat}</button>
        ))}
      </div>
    </div>
  );
}

export default SeatAllocation;