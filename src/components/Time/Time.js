import './Time.scss';

const Time = () => {
  return (
    <section className="time__container">
      <p className="time__title">
        <span className="time__icon">icon</span>Good morning
        <span className="time__title--second">, it's currently</span>
      </p>
      <h1 className="time__value">
        11:37<span className="time__type">bst</span>
      </h1>
      <p className="time__location">In London, UK</p>
    </section>
  );
};

export default Time;
