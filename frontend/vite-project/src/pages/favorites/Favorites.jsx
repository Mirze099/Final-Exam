import React, { useContext } from "react";
import { favoriteContext } from "../../context/FavoriteContext";
import { IconButton } from "@mui/material";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { Helmet } from "react-helmet";

export default function Favorites() {
  let { favorites, setFavorites } = useContext(favoriteContext);
  function handleDelFav(id) {
    let filtered = favorites.filter((item) => item._id !== id);
    setFavorites(filtered);
  }
  return (
    <div className="main">
      <Helmet>
        <title>Favorites-Page</title>
      </Helmet>
      {favorites.length == 0 ? (
        <h1>Sizin Favoritiniz Bosdur</h1>
      ) : (
        <div className="productsCards">
          {favorites &&
            favorites.map((data) => (
              <div className="productsCard" key={data._id}>
                <div className="productsCardImg">
                  <img src={data.img} alt="" />
                </div>
                <div className="productsCardInfo">
                  <h1>{data.name}</h1>
                  <p>${data.price}</p>
                  <IconButton onClick={() => handleDelFav(data._id)}>
                    <FavoriteIcon />
                  </IconButton>
                </div>
              </div>
            ))}
        </div>
      )}
    </div>
  );
}
