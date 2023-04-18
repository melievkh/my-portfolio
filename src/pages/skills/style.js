import styled from "styled-components";
import { mobile } from "../../media";
import { Title } from "@mantine/core";

export const Wrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 40px;
  padding: 40px 80px;

  ${mobile} {
    width: auto;
    padding: 20px 20px;
  }
`;

export const STitle = styled(Title)`
  text-align: center;
`;

export const Skills = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  flex-direction: column;

  li {
    color: gray;
  }
`;

export const ProgressBar = styled.div`
  width: 80%;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 40px;

  ${mobile} {
    width: auto;
    gap: 20px;
  }
`;

export const Bar = styled.div`
  width: 380px;
  height: 8px;
  border-radius: 4px;
  background-color: #ededeb;

  ${mobile} {
    width: 340px;
  }
`;

export const BarSpan = styled.div`
  height: 100%;
  background-color: blue;
`;

export const BarGroup = styled.div`
  display: flex;
  flex-direction: column;
`;
