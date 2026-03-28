import { MinusIcon, PlusIcon } from "./icons.jsx";

export default function QuantityStepper({ onDecrease, onIncrease, value }) {
  return (
    <div className="stepper">
      <button aria-label="Decrease quantity" className="icon-btn" onClick={onDecrease} type="button">
        <MinusIcon />
      </button>
      <span className="stepper__value">{value}</span>
      <button aria-label="Increase quantity" className="icon-btn" onClick={onIncrease} type="button">
        <PlusIcon />
      </button>
    </div>
  );
}
