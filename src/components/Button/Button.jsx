import "./styles.css";

const VALID_BUTTON_TYPE = {
  submit: true,
  reset: true,
  button: true,
};

const isValidButton = (aType) => aType in VALID_BUTTON_TYPE;

function Button({ btnInfo }) {
  const { name, type } = btnInfo;

  if (!isValidButton(type)) throw `Invalid button type: ${type}, name: ${name}`;

  return (
    <button className="button-component" type={type}>
      {name}
    </button>
  );
}

export default Button;
