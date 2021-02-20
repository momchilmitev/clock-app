import { useState, useEffect } from 'react';

const useQoute = () => {
  const [quote, setQuote] = useState(null);

  const getQuote = async () => {
    const res = await fetch('http://api.quotable.io/random');
    const data = await res.json();
    setQuote({ ...data });
  };

  useEffect(() => {
    getQuote();
  }, []);

  return [quote, getQuote];
};

export default useQoute;
