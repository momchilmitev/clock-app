import './Quote.scss';

const Quote = () => {
  return (
    <section className="quote__container">
      <div className="quote__action">
        <p className="quote__content">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nam,
          adipisci? Consequuntur dignissimos, expedita, et labore numquam totam
          quo officia minima error qui vitae consectetur dolorum. Error nisi
          temporibus suscipit nemo.
        </p>
        <button className="btn--load">load</button>
      </div>
      <p className="quote__author">Momchil Mitev</p>
    </section>
  );
};

export default Quote;
