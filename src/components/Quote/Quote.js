import './Quote.scss';
import useQoute from '../../hooks/useQuote';

const Quote = () => {
  const [quote, getQoute] = useQoute();

  return (
    <section className="quote">
      <div className="quote__action">
        <p className="quote__content">{quote ? quote.content : null}</p>
        <span className="btn--load" onClick={getQoute}></span>
      </div>
      <p className="quote__author">{quote ? quote.author : null}</p>
    </section>
  );
};

export default Quote;
