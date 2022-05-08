import style from "./style/style.css";
import React, { useState, useEffect } from "react";

const App = () => {
  const [quote, setQuote] = useState("");

  function getRandomQuote() {
    fetch("https://api.quotable.io/random")
      .then(res => res.json())
      .then(data => setQuote(data))
      console.log(quote);
  }

  React.useEffect(() => {
    getRandomQuote();
  }, []);

  return (
    <div className="App">
      <p>{quote.content}</p>
      <p>{quote.author}</p>
      <button onClick={getRandomQuote}>Click</button>
    </div>
  );
}

export default App;
