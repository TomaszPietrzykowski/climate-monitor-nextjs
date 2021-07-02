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
      activeTab: `rgba(0, 54, 102, 1)`,
      // activeTab: `rgba(0, 51, 77, 1)`,
    },
    gradient: {
      co2: [
        "rgba(0, 0, 0, 0)",
        "rgba(0, 191, 255, 0.1)",
        "rgba(0, 191, 255, 0.4)",
      ],
      ch4: [
        "rgba(0, 0, 0, 0)",
        "rgba(100, 225, 100, 0.1)",
        "rgba(100, 225, 100, 0.6)",
      ],
      n2o: [
        "rgba(0, 0, 0, 0)",
        "rgba(200, 131, 20, 0.1)",
        "rgba(200, 131, 20, 0.4)",
      ],
      sf6: [
        "rgba(0, 0, 0, 0)",
        "rgba(150, 141, 255, 0.2)",
        "rgba(150, 141, 255, 0.6)",
      ],
      temperatures: [
        "rgba(0, 255, 0, 0)",
        "rgba(0, 191, 255, 0.1)",
        "rgba(0, 191, 255, 0.4)",
      ],
      sealevels: [
        "rgba(0, 0, 0, 0)",
        "rgba(0, 0, 255, 0.1)",
        "rgba(0, 0, 255, 0.4)",
      ],
      glaciers: [
        "rgba(0, 255, 0, 0)",
        "rgba(0, 191, 255, 0.1)",
        "rgba(0, 191, 255, 0.4)",
      ],
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
