const Card = ({ d, cardCounts }) => {
  const count = cardCounts[d.key];
  return (
    <div
      id={d.id}
      className="card"
      style={{ borderLeft: `3px solid ${d.color}` }}
    >
      <h2 className="card_name">{d.name}</h2>
      <h3 className="card_count" style={{ color: `${d.color}` }}>
        {count}
      </h3>
    </div>
  );
};

export default Card;
