
import { IItemDetails } from "../models/cardModel";
import "../App.css";
export default function ItemDetails({
  title,
  price,
  quantity,
  currency_code,
}: IItemDetails) {
  const symbolCurrencyCode =
    currency_code === "USD" || currency_code === "EUR"
      ? currency_code === "USD"
        ? "$"
        : "€"
      : currency_code;
  const slicedTitle = title.length > 50 ? title.slice(0, 50) : title;
  const levelQuantity =
    quantity <= 10
      ? "level-low"
      : quantity <= 20
      ? "level-medium"
      : "level-high";

  return (
    <div className="item-details">
      <p className="item-title">{slicedTitle}</p>
      <p className="item-price">
        {symbolCurrencyCode}
        {price}
      </p>
      <p className={`item-quantity ${levelQuantity}`}>{quantity}</p>
    </div>
  );
}
