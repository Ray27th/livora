export default function EmptyState({ action, body, title }) {
  return (
    <div className="empty-state surface">
      <span className="eyebrow">Nothing here yet</span>
      <h2 className="section-title">{title}</h2>
      <p className="body-copy">{body}</p>
      {action}
    </div>
  );
}
