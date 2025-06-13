import { useEffect, useState } from "react";
import emptyHeart from "../loader/emptyHeart.svg";
import filledHeart from "../loader/filledHeart.svg";
import "./style.scss";

const FavoriteButton = ({ cardId }) => {
  const [isFavorited, setIsFavorited] = useState(false);

  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem("favorites")) || [];
    setIsFavorited(saved.includes(cardId));
  }, []);

  const toggleFavouriteHandler = (event) => {
    const saved = JSON.parse(localStorage.getItem("favorites")) || [];
    let updated;

    if (saved.includes(cardId)) {
      updated = saved.filter((id) => id !== cardId);
    } else {
      updated = [...saved, cardId];
    }

    localStorage.setItem("favorites", JSON.stringify(updated));

    setIsFavorited(!isFavorited);
    event.preventDefault();
  };

  return (
    <button
      className="favorite-button"
      onClick={(event) => toggleFavouriteHandler(event)}
      aria-label="Toggle Favorite"
    >
      {isFavorited ? (
        <img src={filledHeart} alt="Loading..." width={50} height={50} />
      ) : (
        <img src={emptyHeart} alt="Loading..." width={50} height={50} />
      )}
    </button>
  );
};

export default FavoriteButton;
