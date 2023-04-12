import styled from "styled-components";

export const EditPostModalContainer = styled.form`
  background: #ffffff;
  border: 1px solid #999999;
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

  label {
    font-weight: 400;
    font-size: 16px;
    line-height: 19px;
    color: #000000;
    margin-bottom: 8px;
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

  textarea {
    background: #ffffff;
    border: 1px solid #777777;
    border-radius: 8px;
    padding: 8px 11px;
    margin-bottom: 24px;
  }

  textarea::placeholder {
    font-weight: 400;
    font-size: 14px;
    line-height: 16px;
    color: #cccccc;
  }

  div {
    display: flex;
    justify-content: flex-end;
    gap: 16px;
  }
`;
