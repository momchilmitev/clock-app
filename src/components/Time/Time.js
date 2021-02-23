import './Time.scss';
import { useState, useEffect } from 'react';
import sun from '../../assets/icons/icon-sun.svg';
import moon from '../../assets/icons/icon-moon.svg';

const Time = ({ setNight, city, countryCode, timeType }) => {
  const [date, setDate] = useState(new Date());
  const [greeting, setGreeting] = useState('morning');

  const getGreeting = () => {
    if (date.getHours() > 5 && date.getHours() < 12) {
      setGreeting('morning');
    } else if (date.getHours() >= 12 && date.getHours() < 18) {
      setGreeting('afternoon');
    } else {
      setGreeting('evening');
      setNight(true);
    }
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setDate(new Date());
      getGreeting();
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  });

  return (
    <section className="time">
      <p className="time__title">
        <img
          src={date.getHours() > 5 && date.getHours() < 18 ? sun : moon}
          className="time__icon"
          alt="time icon"
        />
        Good {greeting}
        <span className="time__title--second">, it's currently</span>
      </p>
      <h1 className="time__value">
        {date &&
          `${date.getHours() < 10 ? '0' + date.getHours() : date.getHours()}:${
            date.getMinutes() < 10 ? '0' + date.getMinutes() : date.getMinutes()
          }`}
        <span className="time__type">{timeType ? timeType : null}</span>
      </h1>
      <p className="time__location">
        In {city ? `${city}, ${countryCode}` : null}
      </p>
    </section>
  );
};

export default Time;
