import { createMuiTheme } from "@material-ui/core/styles"

export default createMuiTheme({
  palette: {
    common: {
      // blue: `rgba(0, 170, 255, 1)`,
      darkBlue: `rgba(0, 118, 178, 1)`,
      lightBlue: `#9bf3f0`,
      lightestBlue: `#d7f9f1`,
      neonBlue: "rgba(20, 238, 255, 1)",
      green: `#98ce00`,
      orange: `#ffba60`,
      footer: `rgba(215, 215, 220, 1)`,
      activeTab: `rgba(0, 54, 102, 1)`,
      background: "rgba(225, 225, 225, 1)",
      shade: "#fcfcfc",
    },
    gradient: {
      co2: [
        "rgba(0, 191, 255, 0)",
        "rgba(0, 191, 255, 0)",
        "rgba(0, 191, 255, 0.05)",
        "rgba(0, 191, 255, 0.1)",
        "rgba(0, 191, 255, 1)",
      ],
      ch4: [
        "rgba(0, 0, 0, 0)",
        "rgba(110, 220, 0, 0)",
        "rgba(110, 220, 0, 0.05)",
        "rgba(110, 220, 0, 0.08)",
        "rgba(110, 220, 0, 1)",
      ],
      n2o: [
        "rgba(0, 0, 0, 0)",
        "rgba(0, 240, 180, 0)",
        "rgba(0, 240, 180, 0.04)",
        "rgba(0, 240, 180, 0.1)",
        "rgba(0, 240, 180, 1)",
      ],
      sf6: [
        "rgba(0, 0, 0, 0)",
        "rgba(158, 0, 119, 0)",
        "rgba(158, 0, 119, 0.04)",
        "rgba(158, 0, 119, 0.06)",
        "rgba(158, 0, 119, 1)",
      ],
      temperatures: [
        "rgba(0, 255, 0, 0)",
        "rgba(255, 145, 0, 0)",
        "rgba(255, 145, 0, 0.1)",
        "rgba(255, 145, 0, 0.2)",
        "rgba(255, 145, 0, 1)",
      ],
      sealevels: [
        "rgba(0, 255, 0, 0)",
        "rgba(0, 255, 0, 0)",
        "rgba(0, 210, 200, 0.08)",
        "rgba(0, 191, 255, 0.08)",
        "rgba(0, 191, 255, 1)",
      ],
      glaciers: [
        "rgba(0, 255, 0, 0)",
        "rgba(0, 255, 0, 0)",
        "rgba(0, 134, 158, 0.1)",
        "rgba(0, 134, 158, 0.15)",
        "rgba(0, 134, 158, 1)",
      ],
    },
    primary: {
      main: `#003666`, // prussian blue
    },
    secondary: {
      main: "#0076B2", // star command blue
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
    btn: {
      borderRadius: "50px",
      color: "white",
      fontFamily: "Poppins, sans",
      fontWeight: 500,
      letterSpacing: 3,
      border: "3px solid",
      textTransform: "uppercase",
      fontSize: "1.3rem",
    },
    tab: {
      fontFamily: "Poppins, sans",
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
      md: 700,
      lg: 1000,
      xl: 1440,
    },
  },
})
