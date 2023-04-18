import { Text } from "@mantine/core";

import {
  Bar,
  BarGroup,
  BarSpan,
  ProgressBar,
  STitle,
  Skills,
  Wrapper,
} from "./style";
import HRLine from "../../components/hrline";
import skills from "../../components/mockData/skillsData";

const SkillsPage = () => {
  return (
    <>
      <Wrapper id="skills">
        <STitle color="blue">Skills</STitle>
        <Skills>
          <Text weight={500} size="lg">
            Programming Skills
          </Text>
          <ul>
            <li>
              <b>
                CSS3, HTML5, Javascript, TypeScript, React Query, jQuery, React
                JS, Next.js, Redux
              </b>
            </li>
            <li>
              <b>
                BBootstrap, Tailwind Css, Material UI, Mantine UI, Styled
                Components, LESS/SASS
              </b>
            </li>
            <li>
              Experience in using{" "}
              <b>ReactJS Components, Hooks, Forms, Events, Keys, Router</b> and
              e.g.
            </li>
            <li>
              Worked with Axios, promise based http client for the browser and
              Node JS for hitting Rest endpoints and fetching data into the app
            </li>
            <li>
              Experience in front-end development with back-end system
              integration
            </li>
            <li>
              Experience in working with PostgresSql, MySql for database
              management
            </li>
            <li>Worked with Node.js, Express for back-end development</li>
            <li>
              Node Package Manager <b>(NPM), Yarn</b>
            </li>
            <li>
              Version Control System - <b>Git, GitHub</b>
            </li>
          </ul>
          <Text weight={500} size="lg">
            Experience
          </Text>
          <ul>
            <li>
              2 years of experience as a <b>Front-End Developer</b>
            </li>
            <li>
              1 year of experience as a <b>React JS/TS Developer</b>
            </li>
            <li>
              1 year of experience as a <b>Back-end Developer (Node JS)</b>
            </li>
            <li>
              1 year of experience in development of <b>APIs</b>
            </li>
          </ul>
        </Skills>
        <ProgressBar>
          {skills?.map((item, index) => (
            <BarGroup key={index + 1}>
              <Text>{item.name}</Text>
              <Bar>
                <BarSpan
                  style={{
                    width: item.percentage,
                  }}
                ></BarSpan>
              </Bar>
            </BarGroup>
          ))}
        </ProgressBar>
      </Wrapper>
      <HRLine />
    </>
  );
};

export default SkillsPage;
