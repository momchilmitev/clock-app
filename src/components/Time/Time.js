import './Time.scss';
import sun from '../../assets/icons/icon-sun.svg';
import moon from '../../assets/icons/icon-moon.svg';

const Time = () => {
  return (
    <section className="time">
      <p className="time__title">
        <img src={sun} className="time__icon" alt="time icon" />
        Good morning
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
