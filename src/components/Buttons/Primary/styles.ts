import styled from "styled-components";

export const PrimaryButtonContainer = styled.button`
  background: #7695ec;
  border-radius: 8px;
  width: 111px;
  text-transform: uppercase;
  border: none;
  font-weight: 700;
  font-size: 16px;
  line-height: 19px;
  color: #ffffff;
  padding: 7px 31px;
  cursor: pointer;

  &:hover {
    border: 0.1px solid rgba(221, 221, 221, 1);
    color: #7695ec;
    background-color: #fff;
  }
`;
