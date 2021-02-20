import './App.scss';
import { useState } from 'react';
import Quote from '../Quote/Quote';
import Time from '../Time/Time';
import Button from '../Button/Button';

function App() {
  const [open, setOpen] = useState(false);
  const [night, setNight] = useState(false);

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
          <Time night={night} />
          <Button toggleInfo={toggleInfo} />
        </section>
      </section>
      <section className="info">
        <section className="info__section--left">
          <article className="info__detail">
            <p className="info__title">current timezone</p>
            <p className="info__value">Europe/London</p>
          </article>
          <article className="info__detail">
            <p className="info__title">Day of the year</p>
            <p className="info__value">295</p>
          </article>
        </section>
        <section className="info__section--right">
          <article className="info__detail">
            <p className="info__title">Day of the week</p>
            <p className="info__value">5</p>
          </article>
          <article className="info__detail">
            <p className="info__title">Week number</p>
            <p className="info__value">42</p>
          </article>
        </section>
      </section>
    </div>
  );
}

export default App;
