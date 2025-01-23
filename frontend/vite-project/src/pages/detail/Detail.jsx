import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

export default function Detail() {
  let navigate = useNavigate();
  const [data, setData] = useState(null);
  let { id } = useParams();
  async function getData() {
    try {
      let res = await axios
        .get(`http://localhost:3000/product/${id}`)
        .then((res) => setData(res.data));
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    getData();
  }, []);

  return (
    <div className="main">
      {data && (
        <div className="productsCard" key={data._id}>
          <div className="productsCardImg">
            <img src={data.img} alt="" />
          </div>
          <div className="productsCardInfo">
            <h1>{data.name}</h1>
            <p>${data.price}</p>
            <button className="btn" onClick={() => navigate(-1)}>
              Go back
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
