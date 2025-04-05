import React, { useState } from "react";
import { db } from "../firebase";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";

const AddStock = () => {
  const [symbol, setSymbol] = useState("");
  const [quantity, setQuantity] = useState("");
  const [buyPrice, setBuyPrice] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await addDoc(collection(db, "portfolio"), {
        symbol: symbol.toUpperCase(),
        quantity: Number(quantity),
        buyPrice: Number(buyPrice),
        createdAt: serverTimestamp(),
      });

      setSymbol("");
      setQuantity("");
      setBuyPrice("");
      alert("Stock saved to Firebase! 🔥");
    } catch (error) {
      console.error("Error saving stock:", error);
      alert("Error saving stock.");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Add Stock to Portfolio</h2>
      <input
        type="text"
        placeholder="Symbol (e.g. AAPL)"
        value={symbol}
        onChange={(e) => setSymbol(e.target.value)}
        required
      />
      <input
        type="number"
        placeholder="Quantity"
        value={quantity}
        onChange={(e) => setQuantity(e.target.value)}
        required
      />
      <input
        type="number"
        step="0.01"
        placeholder="Buy Price"
        value={buyPrice}
        onChange={(e) => setBuyPrice(e.target.value)}
        required
      />
      <button type="submit">Save</button>
    </form>
  );
};

export default AddStock;
