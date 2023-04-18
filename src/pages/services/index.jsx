import { Text, Title } from "@mantine/core";

import { Card, CardBox, Wrapper } from "./style";
import HRLine from "components/hrline";
import services from "mockData/services";

const ServicesPage = () => {
  return (
    <>
      <Wrapper id="services">
        <Title weight={600} color="blue">
          Services
        </Title>
        <Text color="gray">
          Far far away, behind the word mountains, far from the countries
          Vokalia and Consonantia
        </Text>
        <CardBox>
          {services.map(({ name, Icon }, index) => (
            <Card key={index + 1}>
              <Text color="blue" size={44}>
                {Icon}
              </Text>
              <Text weight={400} size={20}>
                {name}
              </Text>
              <Text weight={200} size={18} align="center">
                A small river named Duden flows by their place and supplies it
                with the necessary regelialia.
              </Text>
            </Card>
          ))}
        </CardBox>
      </Wrapper>
      <HRLine />
    </>
  );
};

export default ServicesPage;
