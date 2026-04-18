export function ComingSoonCard({ name, description }) {
  return (
    <article className="coming-soon-card">
      <div className="card-top">
        <span className="card-index">Planned</span>
        <h3 className="card-title">{name}</h3>
        <p className="card-description">{description}</p>
      </div>
      <div className="card-footer">
        <span className="card-status">Coming soon</span>
      </div>
    </article>
  );
}
