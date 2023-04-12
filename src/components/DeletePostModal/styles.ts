import styled from "styled-components";

export const DeletePostModalBackground = styled.div`
  background-color: rgba(0, 0, 0, 0.5);
  /* opacity: 0.6; */
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  z-index: 1;
  inset: 0px;
  height: 100%;
`;

export const DeletePostModalContainer = styled.div`
  background: #ffffff;
  border: 1px solid #999999;
  border-radius: 16px;
  padding: 24px;
  z-index: 999;
  opacity: 1;

  h3 {
    font-weight: 700;
    font-size: 22px;
    line-height: 26px;
    color: #000000;
    margin: 0px 0px 40px 0px;
  }

  div {
    display: flex;
    justify-content: flex-end;
    gap: 16px;
  }
`;
