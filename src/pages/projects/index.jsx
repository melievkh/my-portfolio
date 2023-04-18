import { Button, Text, Title } from "@mantine/core";
import { BsArrowRight } from "react-icons/bs";

import { Card, CardBox, Wrapper } from "./style";
import projects from "mockData/projectsData";
import HRLine from "components/hrline";

const ProjectsPage = () => {
  return (
    <>
      <Wrapper id="projects">
        <Title weight={600} color="blue">
          Projects
        </Title>
        <Text color="gray">
          Far far away, behind the word mountains, far from the countries
          Vokalia and Consonantia
        </Text>
        <CardBox>
          {projects.map((item) => (
            <Card key={item.id}>
              <img src={item.img} alt="loading..." />
              <Text size={24}>{item.name}</Text>
              <Text color="gray">{item.description}</Text>
              <a href={item.link}>
                <Button variant="outline" rightIcon={<BsArrowRight />}>
                  View code
                </Button>
              </a>
            </Card>
          ))}
        </CardBox>
      </Wrapper>
      <HRLine />
    </>
  );
};

export default ProjectsPage;
