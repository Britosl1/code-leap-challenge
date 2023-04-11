import styled from "styled-components";

export const LoginModalContainer = styled.form`
  width: 500px;
  background: #ffffff;
  border: 1px solid #cccccc;
  border-radius: 16px;
  padding: 24px;
  display: flex;
  flex-direction: column;

  h3 {
    font-weight: 700;
    font-size: 22px;
    line-height: 26px;
    color: #000000;
    margin: 0px 0px 24px 0px;
  }

  p {
    font-weight: 400;
    font-size: 16px;
    line-height: 19px;
    color: #000000;
    margin: 0px 0px 9px 0px;
  }

  input {
    background: #ffffff;
    border: 1px solid #777777;
    border-radius: 8px;
    padding: 8px 11px;
    margin-bottom: 16px;
  }

  input::placeholder {
    font-weight: 400;
    font-size: 14px;
    line-height: 16px;
    color: #cccccc;
  }

  div {
    display: flex;
    justify-content: flex-end;
  }
`;
