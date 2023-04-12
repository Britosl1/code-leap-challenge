import styled from "styled-components";

export const SuccessButtonContainer = styled.button`
  background: rgba(71, 185, 96, 1);
  border-radius: 8px;
  width: 111px;
  text-transform: uppercase;
  border: none;
  font-weight: 700;
  font-size: 16px;
  line-height: 19px;
  color: #ffffff;
  padding: 7px 31px;
  display: flex;
  justify-content: center;
  cursor: pointer;

  &:hover {
    border: 0.1px solid rgba(221, 221, 221, 1);
    color: rgba(71, 185, 96, 1);
    background-color: #fff;
  }
`;
