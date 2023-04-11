import styled from "styled-components";

export const SecondaryButtonContainer = styled.button`
  border-radius: 8px;
  width: 111px;
  text-transform: uppercase;
  background: #ffffff;
  border: 1px solid #999999;
  font-weight: 700;
  font-size: 16px;
  line-height: 19px;
  color: #000;
  padding: 7px 31px;
  display: flex;
  justify-content: center;
  cursor: pointer;

  &:hover {
    border: 0.1px solid rgba(221, 221, 221, 1);
    color: #7695ec;
    background-color: #fff;
  }
`;
