import "./styles.css";

function Input({ inputInfo }) {
  const { name, type, placeholder, label } = inputInfo;

  return (
    <div class="input-container">
      <label for={name}>{label}</label>
      <input
        class="user-form-input"
        type={type}
        id={name}
        name={name}
        placeholder={placeholder}
      />
    </div>
  );
}

export default Input;

