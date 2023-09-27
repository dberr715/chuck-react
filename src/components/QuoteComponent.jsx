import { useState, useEffect } from "react";

export const QuoteComponent = () => {
  const [quote, setQuote] = useState("This will be a quote");

  useEffect(() => {
    const apiUrl = "https://api.chucknorris.io/jokes/random?category=food";
    const getQuote = async () => {
      const response = await fetch(apiUrl);
      const data = await response.json();
      console.log("Do I have a quote:", data);
      setQuote(data.value);
    };
    getQuote();
  }, []);

  return <p>{quote}</p>;
};
