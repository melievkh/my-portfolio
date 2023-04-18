import { Button } from "@mantine/core";
import Typewriter from "typewriter-effect";
import { Link } from "react-scroll/modules";
import { RiTelegramFill } from "react-icons/ri";

import { Buttons, InfoPart, SImage, SText, Wrapper } from "./style";
import HRLine from "../../components/hrline";

const Home = () => {
  return (
    <>
      <Wrapper id="home">
        <InfoPart>
          <h2>Hi,</h2>
          <div>
            <h1>
              I am Khushnud <br /> Meliev <br />
            </h1>
            <h1>
              <Typewriter
                options={{
                  strings: ["Full stack Developer", "ReactJs/Ts Developer"],
                  autoStart: true,
                  loop: true,
                }}
              />
            </h1>
          </div>
          <SText>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa vero
            deserunt cumque officiis est! Consectetur voluptas nesciunt,
            distinctio quisquam ipsum odit nulla! Alias voluptate voluptatem
            repudiandae quidem, voluptas explicabo quia.
          </SText>
          <Buttons>
            <Link
              activeClass="active"
              to="contact"
              spy={true}
              smooth={true}
              offset={-60}
              duration={500}
            >
              <Button
                variant="outline"
                color="gray"
                rightIcon={<RiTelegramFill size={20} />}
              >
                Hire me
              </Button>
            </Link>
          </Buttons>
        </InfoPart>

        <SImage
          width={350}
          height={350}
          radius={20}
          src="https://media.istockphoto.com/id/973481674/photo/stylish-man-posing-on-grey-background.jpg?s=612x612&w=0&k=20&c=zn4YXiU1RX4-DHz8XNSSB3PoEKBxpfeFtRTESWX6OWQ="
        />
      </Wrapper>
      <HRLine />
    </>
  );
};

export default Home;
