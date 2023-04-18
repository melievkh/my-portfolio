import styled from "styled-components";

export const Wrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  border-top: 1px solid #aba7a7;
  background-color: #040521;
  padding: 40px 40px;
  gap: 40px;
`;

export const AllLinks = styled.div`
  display: flex;
  justify-content: center;
  gap: 10px;
`;

export const About = styled.div`
  width: 260px;
  display: flex;
  flex-direction: column;
  gap: 10px;

  @media (max-width: 500px) {
    display: none;
  }
`;

export const Links = styled.div`
  width: 340px;
  height: 100%;
  display: flex;
  flex-direction: column;
  gap: 4px;
  padding: 0 30px;

  li {
    display: flex;
    align-items: center;
    gap: 10px;
    color: gray;
    cursor: pointer;
    p {
      display: flex;
      align-items: center;
      gap: 10px;
      margin: 0;
    }

    &:hover {
      color: #d9dadb;
    }
  }

  @media (max-width: 500px) {
    display: none;
  }
`;

export const Contact = styled.div`
  width: 300px;
  display: flex;
  flex-direction: column;
  gap: 10px;

  li {
    display: flex;
    align-items: center;
    gap: 30px;
    list-style-type: none;
    color: gray;

    svg {
      color: gray;
    }
  }
`;

export const Buttons = styled.div`
  display: flex;
  gap: 10px;

  svg {
    color: gray;
    font-size: 30px;

    &:hover {
      color: #d9dadb;
      transition: 0.2s;
    }
  }
`;
