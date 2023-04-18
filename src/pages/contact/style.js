import styled from "styled-components";
import { mobile } from "../../media";

export const Wrapper = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 40px;
`;

export const SImage = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;

  ${mobile} {
    display: none;
  }
`;

export const ContactBox = styled.form`
  width: 520px;
  height: 520px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 12px;
  padding: 0 30px;
  border-radius: 4px;
  border: 1px solid #ddd;

  ${mobile} {
    width: 90%;
    height: fit-content;
    padding: 20px 20px;
  }
`;
