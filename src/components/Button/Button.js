import './Button.scss';

const Button = ({ toggleInfo, open }) => {
  return (
    <button onClick={toggleInfo} className="btn--primary">
      {open ? 'less' : 'more'} <span></span>
    </button>
  );
};

export default Button;
