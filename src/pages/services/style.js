import styled from "styled-components";
import { mobile } from "../../media";

export const Wrapper = styled.div`
  width: 100%;
  padding: 40px 80px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 20px;

  ${mobile} {
    width: auto;
    height: auto;
    padding: 20px 20px;
  }
`;

export const Card = styled.div`
  width: 360px;
  height: 320px;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 10px 12px;
  gap: 20px;
  border-radius: 4px;

  &:hover {
    background-color: #6999fa;
    margin-top: -10px;
    transition: 0.5s;

    svg {
      color: white;
    }
  }
`;

export const CardBox = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  gap: 40px;
  justify-content: center;
`;
