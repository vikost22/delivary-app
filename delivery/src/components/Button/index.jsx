import PropTypes from "prop-types";

export default function Button(props) {
  return (
    <button className={`btn`} onClick={props.onButtonClick}>
      {props.text}
    </button>
  );
}

Button.propTypes = {
  text: PropTypes.string,
  onButtonClick: PropTypes.func,
};
