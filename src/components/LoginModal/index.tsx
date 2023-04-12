import { useEffect, useState } from "react";
import { Buttons } from "../Buttons";
import { LoginModalContainer } from "./styles";

export function LoginModal() {
  const [isButtonDisabled, setIsButtonDisabled] = useState<boolean>(true);
  const [userName, setUserName] = useState<string>("");

  const userLogin = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    localStorage.setItem("userName", userName);
  };

  useEffect(() => {
    if (userName.length >= 3) setIsButtonDisabled(false);
    if (userName.length < 3) setIsButtonDisabled(true);
  }, [userName.length, userName]);

  return (
    <LoginModalContainer
      onSubmit={(e: React.FormEvent<HTMLFormElement>) => userLogin(e)}
    >
      <h3>Welcome to CodeLeap network!</h3>
      <p>Please enter your username</p>
      <input
        type="text"
        value={userName}
        placeholder="John doe"
        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
          setUserName(e.currentTarget.value)
        }
      />
      <div>
        <Buttons.Primary
          btnName="ENTER"
          onClick={() => {}}
          isDisabled={isButtonDisabled}
        />
      </div>
    </LoginModalContainer>
  );
}
