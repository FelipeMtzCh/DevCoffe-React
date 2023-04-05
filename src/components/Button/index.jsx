import "./style.scss";

const Button = ({ label, click, size }) => {
  return (
    <div>
      <button className={`btn ${size}`} type="button" onClick={click}>
        {label}
      </button>
    </div>
  );
};

export default Button;
