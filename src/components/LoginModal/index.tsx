import { Buttons } from "../Buttons";
import { LoginModalContainer } from "./styles";

export function LoginModal() {
  return (
    <LoginModalContainer>
      <h3>Welcome to CodeLeap network!</h3>
      <p>Please enter your username</p>
      <input type="text" name="dasdsad" id="" value="" placeholder="John doe" />
      <div>
        <Buttons.Primary btnName="ENTER" onClick={() => {}} />
      </div>
    </LoginModalContainer>
  );
}
