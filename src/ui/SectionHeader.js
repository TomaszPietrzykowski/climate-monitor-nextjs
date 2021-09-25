import React from "react"
import { makeStyles } from "@material-ui/styles"

const useStyles = makeStyles((theme) => ({
  titleBar: {
    width: "100%",
    zIndex: theme.zIndex.drawer + 1,
    background: `white`,
    // background: `linear-gradient(120deg, ${theme.palette.secondary.dark}, ${theme.palette.secondary.main})`,
  },
  sectionHeader: {
    fontFamily: "Poppins",
    fontWeight: 400,
    color: theme.palette.secondary.main,
    fontSize: "3rem",
    maxWidth: 1400,
    margin: "auto",
    marginTop: "3rem",
    padding: "1rem 2rem",
    // borderBottom: `2px solid ${theme.palette.common.lightestBlue}`,
    [theme.breakpoints.down("md")]: {
      marginLeft: 20,
    },
    position: "relative",
    "&::before": {
      content: "'Content'",
      position: "absolute",
      bottom: -50,
      left: -50,
      fontSize: "10rem",
      opacity: 0.05,
      color: theme.palette.secondary.light,
    },
  },
}))

const SectionHeader = (props) => {
  const classes = useStyles()

  return (
    <div className={classes.titleBar}>
      <h1 className={classes.sectionHeader}>{props.children}</h1>
    </div>
  )
}

export default SectionHeader
