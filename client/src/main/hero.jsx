import React, { useState, useEffect, useLayoutEffect } from 'react';
import './hero.css';

let Hero = () => {
  const [quote, setQuote] = useState('');
  const [author, setAuthor] = useState('');

  const url = 'http://localhost:5000/api/quotes/random';

  let quoteFunc = () => {
    fetch(url)
      .then(response => response.json())
      .then(json => {
        setQuote(json.quote.description);
        setAuthor(json.quote.author);
        console.log(json);
      })
      .catch(err => console.error(err));
  };

  useEffect(() => {
    quoteFunc();
  }, []);

  useLayoutEffect(() => {
    setQuote('Loading........., Please Wait !!!');
    setAuthor('Loading');
  }, []);

  return (
    <div className="main">
      <div className="quote">
        <div className="Aquote">
          <h3>{quote}</h3>
        </div>
        <div className="author">
          <h3>- {author}</h3>
        </div>
      </div>
      <button
        onClick={() => {
          quoteFunc();
        }}
      >
        Generate Random
      </button>
    </div>
  );
};

export default Hero;
