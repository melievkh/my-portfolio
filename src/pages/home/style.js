import styled from "styled-components";
import { Image } from "@mantine/core";
import { mobile } from "../../media";

export const Wrapper = styled.div`
  height: 90vh;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 0;
  gap: 10px;

  ${mobile} {
    height: auto;
    width: auto;
    padding: 30px 30px;
  }
`;

export const InfoPart = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  gap: 10px;

  h1 {
    margin: 0;
    font-size: 36px;
    font-weight: 600;
    color: gray;

    ${mobile} {
      font-size: 24px;
    }
  }

  h2 {
    font-size: 22px;
    font-weight: 500;
    color: gray;
    margin: 0;
  }

  ${mobile} {
    width: 100%;
  }
`;

export const Buttons = styled.div`
  display: flex;
  gap: 20px;
`;

export const SText = styled.div`
  font-weight: 400;
  color: gray;

  ${mobile} {
    font-size: 14px;
  }
`;

export const SImage = styled(Image)`
  ${mobile} {
    display: none;
  }
`;
