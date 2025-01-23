import React from "react";
import styles from "./Footer.module.css";

export default function Footer() {
  return (
    <div>
      <div className={`${styles.footer}`}>
        <div className={`${styles.footerCards}`}>
          <div className={`${styles.footerCard}`}>
            <h3>Top Products</h3>
            <ul>
              <li>Managed Website</li>
              <li>Manage Reputation</li>
              <li>Power Tools</li>
              <li>Marketing Service</li>
            </ul>
          </div>
          <div className={`${styles.footerCard}`}>
            <h3>Quick Links</h3>
            <ul>
              <li>Managed Website</li>
              <li>Manage Reputation</li>
              <li>Power Tools</li>
              <li>Marketing Service</li>
            </ul>
          </div>
          <div className={`${styles.footerCard}`}>
            <h3>Features</h3>
            <ul>
              <li>Managed Website</li>
              <li>Manage Reputation</li>
              <li>Power Tools</li>
              <li>Marketing Service</li>
            </ul>
          </div>
          <div className={`${styles.footerCard}`}>
            <h3>Resources</h3>
            <ul>
              <li>Managed Website</li>
              <li>Manage Reputation</li>
              <li>Power Tools</li>
              <li>Marketing Service</li>
            </ul>
          </div>
        </div>
        <div className={`${styles.footerBot}`}>
          <h1>
            Copyright ©2025 All rights reserved | This template is made with by
            Colorlib
          </h1>
        </div>
      </div>
    </div>
  );
}
