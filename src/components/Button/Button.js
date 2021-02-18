import './Button.scss';

const Button = ({ toggleInfo }) => {
  return (
    <button onClick={toggleInfo} className="btn--primary">
      More <span></span>
    </button>
  );
};

export default Button;
