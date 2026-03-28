export default function SectionHeading({ eyebrow, title, body, action }) {
  return (
    <div className="section-heading">
      <div className="section-heading__copy">
        {eyebrow ? <span className="eyebrow">{eyebrow}</span> : null}
        <h2 className="section-title">{title}</h2>
        {body ? <p className="body-copy">{body}</p> : null}
      </div>
      {action}
    </div>
  );
}
