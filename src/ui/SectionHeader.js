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
    // position: "relative",
    // "&::before": {
    //   content: "''",
    //   position: "absolute",
    //   top: "1rem",
    //   left: "2rem",
    //   height: "4px",
    //   width: "60px",
    //   background: theme.palette.common.lightestBlue,
    // },
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
