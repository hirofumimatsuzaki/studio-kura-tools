export function ToolCard({ index, name, description, href }) {
  return (
    <article className="tool-card">
      <div className="card-top">
        <span className="card-index">Tool {index + 1}</span>
        <h3 className="card-title">{name}</h3>
        <p className="card-description">{description}</p>
      </div>
      <div className="card-footer">
        <span className="card-status">Ready to use</span>
        <a className="button-link" href={href} target="_blank" rel="noreferrer">
          Open
        </a>
      </div>
    </article>
  );
}
