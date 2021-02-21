import './App.scss';
import { useState } from 'react';
import Quote from '../Quote/Quote';
import Time from '../Time/Time';
import Button from '../Button/Button';
import useData from '../../hooks/useData';

function App() {
  const daysOfTheWeek = [7, 1, 2, 3, 4, 5, 6];
  const [open, setOpen] = useState(false);
  const [night, setNight] = useState(false);
  const data = useData(
    `https://api.ipdata.co/?api-key=${process.env.REACT_APP_IP_DATA_API_KEY}`
  );

  if (!data) {
    return <div>Loading ...</div>;
  }

  const openClass = open ? 'app app--open' : 'app';
  const nightClass = night ? 'app--night' : '';

  const toggleInfo = () => {
    setOpen(!open);
  };

  return (
    <div className={`${openClass} ${nightClass}`}>
      <section className="clock">
        <Quote />
        <section className="clock__action">
          <Time
            setNight={setNight}
            city={data.city}
            countryCode={data.country_code}
            timeType={data.time_zone.abbr}
          />
          <Button toggleInfo={toggleInfo} />
        </section>
      </section>
      <section className="info">
        <section className="info__section--left">
          <article className="info__detail">
            <p className="info__title">current timezone</p>
            <p className="info__value">{data.timezone}</p>
          </article>
          <article className="info__detail">
            <p className="info__title">Day of the year</p>
            <p className="info__value">{data.day_of_year}</p>
          </article>
        </section>
        <section className="info__section--right">
          <article className="info__detail">
            <p className="info__title">Day of the week</p>
            <p className="info__value">{daysOfTheWeek[data.day_of_week]}</p>
          </article>
          <article className="info__detail">
            <p className="info__title">Week number</p>
            <p className="info__value">{data.week_number}</p>
          </article>
        </section>
      </section>
    </div>
  );
}

export default App;
