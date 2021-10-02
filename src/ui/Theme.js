import { createMuiTheme } from "@material-ui/core/styles"

const blue = "rgba(0, 170, 255, 1)"
const darkBlue = "rgba(0, 118, 178, 1)"
const orange = "#ffba60"
const whitish = "rgba(215, 215, 220, 1)"
const green = "rgba(71, 199, 27, 1)"

export default createMuiTheme({
  palette: {
    common: {
      blue: `${blue}`,
      lightBlue: `#9bf3f0`,
      orange: `${orange}`,
      green: `#98ce00`,
      darkGreen: `#006000`,
      footer: `${whitish}`,
      darkBlue: `${darkBlue}`,
      activeTab: `rgba(0, 54, 102, 1)`,
      background: "rgba(225, 225, 225, 1)",
      starCommandBlue: `#0076B2`,
      prussianBlue: `#003666`,
      lightestBlue: `#d7f9f1`,
      neonBlue: "rgba(20, 238, 255, 1)",
      shade: "#fcfcfc",
    },
    gradient: {
      co2: [
        "rgba(0, 191, 255, 0)",
        "rgba(0, 191, 255, 0)",
        "rgba(0, 191, 255, 0.1)",
        "rgba(0, 191, 255, 0.2)",
        "rgba(0, 191, 255, 1)",
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
      main: `#003666`,
    },
    secondary: {
      main: "#0076B2",
    },
  },
  typography: {
    pop: {
      fontFamily: "Poppins, sans",
    },
  },
  flex: {
    col: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
    },
    colStart: {
      display: "flex",
      flexDirection: "column",
      alignItems: "flex-start",
      justifyContent: "flex-start",
    },
    row: {
      display: "flex",
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "center",
    },
    rowStart: {
      display: "flex",
      flexDirection: "row",
      alignItems: "flex-start",
      justifyContent: "flex-start",
    },
  },
  utils: {
    container: {
      margin: "auto",
      width: "100%",
      maxWidth: 1400,
    },
    p: {
      lineHeight: 1.7,
      maxWidth: 800,
      letterSpacing: 0.4,
      padding: "2rem 0 0",
      fontWeight: 300,
    },
    tab: {
      textTransform: "none",
      minWidth: 30,
      fontWeight: 400,
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
