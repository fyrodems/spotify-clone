import "./css/login.css";
import { loginUrl } from "./spotify";

const Login = () => {
  return (
    <div className="login">
      <img
        alt="logo"
        src="https://getheavy.com/wp-content/uploads/2019/12/spotify2019-830x350.jpg"
      />
      <a href={loginUrl}>zaloguj się</a>
    </div>
  );
};

export default Login;
