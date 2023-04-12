import styled from "styled-components";

interface IPrimaryButtonStyledProps {
  disabledGrey?: boolean;
}

export const PrimaryButtonContainer = styled.button<IPrimaryButtonStyledProps>`
  /* background: #7695ec; */
  background: ${(props) => (props.disabledGrey ? "grey" : "#7695ec")};
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
  cursor: ${(props) => (props.disabledGrey ? "default" : "pointer")};
`;
