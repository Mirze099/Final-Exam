import React from "react";
import styles from "./Navbar.module.css";
import { NavLink } from "react-router-dom";

export default function Navbar() {
  return (
    <div>
      <div className={`${styles.nav}`}>
        <div className={`${styles.navLeft}`}>
          <img
            src="https://preview.colorlib.com/theme/eiser/img/logo.png.webp"
            alt=""
          />
        </div>
        <div className={`${styles.navRight}`}>
          <ul>
            <li>
              <NavLink to={""} className={`${styles.navNav}`}>
                Home
              </NavLink>
            </li>
            <li>
              <NavLink to={"favorites"} className={`${styles.navNav}`}>
                Favorites
              </NavLink>
            </li>
            <li>
              <NavLink to={"addproduct"} className={`${styles.navNav}`}>
                Add Product
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
