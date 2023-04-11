import styled from "styled-components";

export const ShowPostModalContainer = styled.div`
  background: #ffffff;
  border: 1px solid #999999;
  border-radius: 16px;
`;

export const ShowPostModalTopContainer = styled.div`
  background: #7695ec;
  height: 70px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0px 24px;
  font-weight: 700;
  font-size: 22px;
  line-height: 26px;
  color: #ffffff;
  border-radius: 16px 16px 0px 0px;
  div {
    display: flex;
    gap: 34px;
  }
`;

export const ShowPostModalBottomContainer = styled.div`
  padding: 24px;

  span {
    font-weight: 700;
    font-size: 18px;
    line-height: 21px;
    color: #777777;
    margin: 0;
  }

  p {
    font-weight: 400;
    font-size: 18px;
    line-height: 21px;
    color: #000000;
    margin: 0;
  }

  div {
    display: flex;
    justify-content: space-between;
    margin-bottom: 16px;
  }
`;
