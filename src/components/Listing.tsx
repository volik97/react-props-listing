/* eslint-disable @typescript-eslint/no-non-null-assertion */

import data from "../data/etsy.json";
import ItemImage from "./ItemImage";
import ItemDetails from "./ItemDetails";
import '../App.css'

export default function Listing() {
  return (
  <div className="item-list">
    {data.map(({ listing_id, url, MainImage, title, currency_code, price, quantity }) => (
        <div className="item" key={listing_id}>
            <ItemImage url={url!} MainImage={MainImage!}/>
            <ItemDetails title={title!}
              currency_code={currency_code!}
              price={price!}
              quantity={quantity!}/>
        </div>
    ))}
  </div>
  );
}
