import { createStyles } from "@mantine/core";

const useStyles = createStyles((theme) => ({
  header: {
    width: "100%",
    height: "60px",
    background: "inherit",
    backdropFilter: "blur(10px)",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "0 40px",
  },

  logo: {
    "@media (max-width: 850px)": {
      fontSize: "20px",
    },
  },

  ul: {
    display: "flex",
    listStyleType: "none",
    gap: "40px",
    padding: 0,

    "@media (max-width: 850px)": {
      display: "none",
    },

    li: {
      cursor: "pointer",
      marginBottom: "10px",
    },

    p: {
      display: "inline-block",
      textDecoration: "none",
      fontSize: "18px",
      fontWeight: 300,
      fontFamily: "serif",
      margin: 0,

      "&:hover": {
        color: "blue",
        transition: "width .3s",
      },

      "&::after": {
        content: "''",
        display: "block",
        width: 0,
        height: "1px",
        background: "blue",
        transition: "width .3s",
      },

      "&:hover::after": {
        width: "100%",
      },
    },
  },

  dropdown: {
    display: "none",

    "@media (max-width: 850px)": {
      display: "block",
    },
  },
}));

export default useStyles;
