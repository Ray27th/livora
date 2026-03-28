import { Link } from "react-router-dom";

import { ArrowRightIcon } from "./icons.jsx";

export default function Breadcrumbs({ items }) {
  return (
    <div className="breadcrumbs">
      <div className="breadcrumb">
        {items.map((item, index) => {
          const isLast = index === items.length - 1;

          return (
            <span className="breadcrumb" key={`${item.label}-${index}`}>
              {isLast ? (
                <span className="breadcrumb__current">{item.label}</span>
              ) : (
                <Link to={item.to}>{item.label}</Link>
              )}
              {!isLast ? <ArrowRightIcon size={12} /> : null}
            </span>
          );
        })}
      </div>
    </div>
  );
}
