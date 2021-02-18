import './Quote.scss';

const Quote = () => {
  return (
    <section className="quote">
      <div className="quote__action">
        <p className="quote__content">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nam,
          adipisci? Consequuntur dignissimos, expedita, et labore numquam totam
          quo officia minima error qui vitae consectetur dolorum. Error nisi
          temporibus suscipit nemo.
        </p>
        <span className="btn--load"></span>
      </div>
      <p className="quote__author">Momchil Mitev</p>
    </section>
  );
};

export default Quote;
