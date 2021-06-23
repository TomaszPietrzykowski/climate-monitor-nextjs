import { createMuiTheme } from "@material-ui/core/styles"

const blue = "rgba(0, 170, 255, 1)"
const darkBlue = "rgba(0, 118, 178, 1)"
const orange = "#ffba60"
const whitish = "rgba(215, 215, 220, 1)"
const green = "	rgba(71, 199, 27, 1)"

export default createMuiTheme({
  palette: {
    common: {
      blue: `${blue}`,
      orange: `${orange}`,
      green: `${green}`,
      footer: `${whitish}`,
      darkBlue: `${darkBlue}`,
      activeTab: `rgba(0, 41, 67, 1)`,
    },
    gradient: {
      grad01: "rgba(0, 255, 0, 0)",
      grad02: "rgba(0, 191, 255, 0.1)",
      grad03: "rgba(0, 191, 255, 0.4)",
    },
    primary: {
      main: `${blue}`,
    },
    secondary: {
      main: `#ffffff`,
    },
  },
  typography: {
    pop: {
      fontFamily: "Poppins, sans",
    },
  },
  utils: {
    tab: {
      textTransform: "none",
      minWidth: 30,
      fontWeight: 600,
      fontSize: "1rem",
      marginLeft: "25px",
    },
  },
  breakpoints: {
    keys: ["xxs", "xs", "sm", "md", "lg", "xl"],
    values: {
      xxs: 0,
      xs: 360,
      sm: 410,
      md: 600,
      lg: 980,
      xl: 1200,
    },
  },
})
