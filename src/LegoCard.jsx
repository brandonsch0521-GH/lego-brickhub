
function LegoCard({ lego, isFavorite, onToggleFavorite }) {
  return (
    <div className="lego-card">
      <div className="lego-image">{lego.emoji}</div>

      <h3>{lego.name}</h3>
      <p>{lego.category}</p>
      <p>🧱 {lego.pieces} pieces</p>
      <h4>RM {lego.price}</h4>

      <button onClick={() => onToggleFavorite(lego.id)}>
        {isFavorite ? "❤️ Saved" : "🤍 Add to Collection"}
      </button>
    </div>
  );
}

export default LegoCard;
