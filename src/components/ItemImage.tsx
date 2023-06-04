
import { IItemImage } from "../models/cardModel";
import '../App.css'

export default function ItemImage({ url, MainImage }: IItemImage) {
  return (
    <div className="item-image">
      <a href={url}>
        <img src={MainImage?.url_570xN} alt="photo" />
      </a>
    </div>
  );
}
