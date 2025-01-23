import React, { useContext, useEffect, useState } from "react";
import styles from "./Home.module.css";
import AccountBalanceIcon from "@mui/icons-material/AccountBalance";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import SettingsPhoneIcon from "@mui/icons-material/SettingsPhone";
import SatelliteAltIcon from "@mui/icons-material/SatelliteAlt";
import FavoriteIcon from "@mui/icons-material/Favorite";
import InfoIcon from "@mui/icons-material/Info";
import axios from "axios";
import { favoriteContext } from "../../context/FavoriteContext";
import Swal from "sweetalert2";
import { IconButton } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet";

export default function Home() {
  let navigate = useNavigate();
  let [search, setSearch] = useState("");
  let { favorites, setFavorites } = useContext(favoriteContext);
  const [data, setData] = useState([]);
  async function getData() {
    try {
      let res = await axios
        .get("http://localhost:3000/product")
        .then((res) => setData(res.data));
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    getData();
  }, []);

  function handleAddFav(id) {
    let findedFav = data.find((item) => item._id == id);
    let isExist = favorites.find((item) => item._id == findedFav._id);
    if (isExist) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Bu Mehsul Sizin Favoritesde Var!!",
        footer: '<a href="#">Why do I have this issue?</a>',
      });
    } else {
      setFavorites([...favorites, findedFav]);
    }
  }

  function handleSort() {
    let sorted = [...data].sort((a, b) => a.price - b.price);
    setData(sorted);
  }

  const filtered = data.filter((data) =>
    data.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div>
      <Helmet>
        <title>Home-Page</title>
      </Helmet>
      <div className={`${styles.hero}`}>
        <p>MEN COLLECTION</p>
        <h1>
          Show Your
          <br />
          Personal Style
        </h1>
        <span>Fowl saw dry which a above together place.</span>
        <button className={`${styles.btn}`}>View Collection</button>
      </div>

      <div className={`${styles.money} container`}>
        <div className={`${styles.moneyCards}`}>
          <div className={`${styles.moneyCard}`}>
            <div className={`${styles.moneyCardImg}`}>
              <AccountBalanceIcon />
            </div>
            <div className={`${styles.moneyCardInfo}`}>
              <h2>Money Back Gurantee</h2>
              <p>Shall open divide a one</p>
            </div>
          </div>
          <div className={`${styles.moneyCard}`}>
            <div className={`${styles.moneyCardImg}`}>
              <LocalShippingIcon />
            </div>
            <div className={`${styles.moneyCardInfo}`}>
              <h2>Free Delivery</h2>
              <p>Shall open divide a one</p>
            </div>
          </div>
          <div className={`${styles.moneyCard}`}>
            <div className={`${styles.moneyCardImg}`}>
              <SettingsPhoneIcon />
            </div>
            <div className={`${styles.moneyCardInfo}`}>
              <h2>Always Support</h2>
              <p>Shall open divide a one</p>
            </div>
          </div>
          <div className={`${styles.moneyCard}`}>
            <div className={`${styles.moneyCardImg}`}>
              <SatelliteAltIcon />
            </div>
            <div className={`${styles.moneyCardInfo}`}>
              <h2>Secure Payment</h2>
              <p>Shall open divide a one</p>
            </div>
          </div>
        </div>
      </div>

      <div className={`${styles.men}`}>
        <p>ALL MEN’S COLLECTION</p>
        <h1>50% OFF</h1>
        <button className={`${styles.btn}`}>View Collection</button>
        <span>Limited Time Offer</span>
      </div>

      <div className={`${styles.productsHead} container`}>
        <h1>INSPIRED PRODUCTS</h1>
        <p>Bring called seed first of third give itself now ment</p>
      </div>
      <div className={`${styles.products} container`}>
        <input
          type="text"
          name=""
          id=""
          className="inp"
          placeholder="Search"
          onChange={(e) => setSearch(e.target.value)}
        />
        <button className="btn" onClick={handleSort}>
          Sort by Price
        </button>
        <div className={`${styles.productsCards}`}>
          {filtered &&
            filtered.map((data) => (
              <div className={`${styles.productsCard}`} key={data._id}>
                <div className={`${styles.productsCardImg}`}>
                  <img src={data.img} alt="" />
                </div>
                <div className={`${styles.productsCardInfo}`}>
                  <h1>{data.name}</h1>
                  <p>${data.price}</p>
                  <IconButton onClick={() => handleAddFav(data._id)}>
                    <FavoriteIcon className={`${styles.icon}`} />
                  </IconButton>
                  <IconButton onClick={() => navigate(`/detail/${data._id}`)}>
                    <InfoIcon className={`${styles.icon}`} />
                  </IconButton>
                </div>
              </div>
            ))}
        </div>
      </div>

      <div className={`${styles.productsHead} container`}>
        <h1>LATEST BLOG</h1>
        <p>Bring called seed first of third give itself now ment</p>
      </div>
      <div className={`${styles.blog} container`}>
        <div className={`${styles.blogCards}`}>
          <div className={`${styles.blogCard}`}>
            <div className={`${styles.blogCardImg}`}>
              <img
                src="https://preview.colorlib.com/theme/eiser/img/b1.jpg.webp"
                alt=""
              />
            </div>
            <div className={`${styles.blogCardInfo}`}>
              <h2>
                Ford Clever bed stops your sleeping partner hogging the whole
              </h2>
              <p>
                Let one fifth i bring fly to divided face for bearing the divide
                unto seed winged divided light Forth.
              </p>
            </div>
          </div>
          <div className={`${styles.blogCard}`}>
            <div className={`${styles.blogCardImg}`}>
              <img
                src="https://preview.colorlib.com/theme/eiser/img/b2.jpg.webp"
                alt=""
              />
            </div>
            <div className={`${styles.blogCardInfo}`}>
              <h2>
                Ford Clever bed stops your sleeping partner hogging the whole
              </h2>
              <p>
                Let one fifth i bring fly to divided face for bearing the divide
                unto seed winged divided light Forth.
              </p>
            </div>
          </div>
          <div className={`${styles.blogCard}`}>
            <div className={`${styles.blogCardImg}`}>
              <img
                src="https://preview.colorlib.com/theme/eiser/img/b3.jpg.webp"
                alt=""
              />
            </div>
            <div className={`${styles.blogCardInfo}`}>
              <h2>
                Ford Clever bed stops your sleeping partner hogging the whole
              </h2>
              <p>
                Let one fifth i bring fly to divided face for bearing the divide
                unto seed winged divided light Forth.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
