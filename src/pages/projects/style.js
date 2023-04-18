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
  width: 300px;
  display: flex;
  flex-direction: column;
  gap: 10px;

  button {
    width: 100%;
  }

  img {
    height: 220px;
    width: 100%;
    object-fit: cover;
  }

  ${mobile} {
    width: 100%;
    height: fit-content;
    padding: 20px 20px;
  }
`;

export const CardBox = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 80px;
  align-items: center;
`;
