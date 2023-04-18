import { Header as MHeader, Menu, Text } from "@mantine/core";
import { Title } from "@mantine/core";
import { Link } from "react-scroll/modules";
import { FaBars } from "react-icons/fa";

import useStyles from "./style";
import headerLists from "mockData/headerList";

const Navbar = () => {
  const { classes } = useStyles();

  return (
    <MHeader height={60} className={classes.header}>
      <Title weight="lighter" className={classes.logo}>
        Portfolio
      </Title>
      <ul className={classes.ul}>
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
              <p>{item.name}</p>
            </Link>
          </li>
        ))}
      </ul>

      <div className={classes.dropdown}>
        <Menu shadow="md" width={200}>
          <Menu.Target>
            <Text size="lg" color="gray">
              <FaBars />
            </Text>
          </Menu.Target>

          <Menu.Dropdown>
            {headerLists.map((item) => (
              <Menu.Item key={item.id}>
                <Link
                  activeClass="active"
                  to={item.id}
                  spy={true}
                  smooth={true}
                  offset={-60}
                  duration={500}
                >
                  {item.name}
                </Link>
              </Menu.Item>
            ))}
          </Menu.Dropdown>
        </Menu>
      </div>
    </MHeader>
  );
};

export default Navbar;
