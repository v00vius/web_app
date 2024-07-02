import "./styles.css";
import Input from "../Input/Input";
import Button from "../Button/Button";

const inpEmail = {
  name: "e-mail",
  type: "text",
  placeholder: "user.name@example.com",
  label: "Email",
};

const inpPassword = {
  name: "password",
  type: "password",
  placeholder: "",
  label: "Password",
};

const btnSubmit = {
  name: "Login",
  type: "submit",
};

function LoginForm() {
  return (
    <form class="user-form">
      <p class="user-form-title">Login form</p>
      <Input inputInfo={inpEmail} />
      <Input inputInfo={inpPassword} />
      <Button btnInfo={btnSubmit} />
    </form>
  );
}

export default LoginForm;
