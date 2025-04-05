import React, { useEffect, useState } from "react";
import { db } from "../firebase";
import { collection, getDocs } from "firebase/firestore";

const Portfolio = () => {
  const [stocks, setStocks] = useState([]);

  useEffect(() => {
    const fetchStocks = async () => {
      const querySnapshot = await getDocs(collection(db, "portfolio"));
      const stockList = [];
      querySnapshot.forEach((doc) => {
        stockList.push({ id: doc.id, ...doc.data() });
      });
      setStocks(stockList);
    };

    fetchStocks();
  }, []);

  return (
    <div>
      <h2>Your Portfolio</h2>
      {stocks.length > 0 ? (
        <ul>
          {stocks.map((stock) => (
            <li key={stock.id}>
              {stock.symbol} | {stock.quantity} shares at ${stock.buyPrice}
            </li>
          ))}
        </ul>
      ) : (
        <p>No stocks in portfolio yet.</p>
      )}
    </div>
  );
};

export default Portfolio;
