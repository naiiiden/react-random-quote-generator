import style from "./style/style.css";
import React, { useState, useEffect } from "react";

const App = () => {
  const [quote, setQuote] = useState("");

  function getRandomQuote() {
    fetch("https://api.quotable.io/random")
      .then(res => res.json())
      .then(data => setQuote(data))
  }

  useEffect(() => {
    getRandomQuote();
  }, []);

  return (
    <figure className="App">
      <blockquote>{quote.content}</blockquote>
      <figcaption>&mdash; {quote.author}</figcaption>
      <button onClick={getRandomQuote}>Click</button>
    </figure>
  );
}

export default App;
