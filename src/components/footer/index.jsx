import { Text, Title } from "@mantine/core";
import { BsArrowRight } from "react-icons/bs";
import { ImPhone } from "react-icons/im";
import { MdOutlineLocationOn } from "react-icons/md";
import { HiOutlineMail } from "react-icons/hi";
import { AiOutlineTwitter, AiFillLinkedin } from "react-icons/ai";
import { FaFacebookF } from "react-icons/fa";
import { Link } from "react-scroll/modules";

import { About, AllLinks, Buttons, Contact, Links, Wrapper } from "./style";
import services from "mockData/services";
import headerLists from "mockData/headerList";

const Footer = () => {
  return (
    <Wrapper>
      <AllLinks>
        <About>
          <Title weight={300} size={26} color="white">
            About
          </Title>
          <Text color="gray">
            Far far away, behind the word mountains, far from the countries
            Vokalia and Consonantia, there live the blind texts.
          </Text>
        </About>
        <Links>
          <Title weight={300} size={26} color="white">
            Links
          </Title>
          {headerLists.map((item) => (
            <li key={item.id}>
              <Link
                activeClass="active"
                to={item.id}
                spy={true}
                smooth={true}
                offset={-60}
                duration={500}
              >
                <p>
                  <BsArrowRight /> {item.name}
                </p>
              </Link>
            </li>
          ))}
        </Links>
        <Links>
          <Title weight={300} size={26} color="white">
            Services
          </Title>
          {services.map((item, index) => (
            <li key={index + 1}>
              <Link
                activeClass="active"
                to="services"
                spy={true}
                smooth={true}
                offset={-60}
                duration={500}
              >
                <p>
                  <BsArrowRight /> {item.name}
                </p>
              </Link>
            </li>
          ))}
        </Links>
        <Contact>
          <Title weight={300} size={26} color="white">
            Have any questions?
          </Title>
          <li>
            <MdOutlineLocationOn />
            Tashkent, Uzbekistan
          </li>
          <li>
            <ImPhone /> +998 91 555 25 99
          </li>
          <li>
            <HiOutlineMail />
            khushnudmeliev@gmail.com
          </li>
        </Contact>
      </AllLinks>
      <Buttons>
        <a href="https://twitter.com/melievkh">
          <AiOutlineTwitter />
        </a>
        <a href="https://www.facebook.com/khushnud.meliev/">
          <FaFacebookF />
        </a>
        <a href="https://www.linkedin.com/in/khushnud-meliev/">
          <AiFillLinkedin />
        </a>
      </Buttons>
      <Text color="gray" align="center">
        Copyright ©2022 All rights reserved | This portfolio is made with by
        melievkh
      </Text>
    </Wrapper>
  );
};

export default Footer;
