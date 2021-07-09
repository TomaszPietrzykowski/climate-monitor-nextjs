import React from "react"
import { makeStyles } from "@material-ui/styles"

const useStyles = makeStyles((theme) => ({
  titleBar: {
    width: "100%",
    zIndex: theme.zIndex.drawer + 1,
    background: `linear-gradient(120deg, ${theme.palette.primary.dark}, ${theme.palette.primary.main})`,
  },
  sectionHeader: {
    fontFamily: "Poppins",
    fontWeight: 400,
    color: "white",
    fontSize: "1.8rem",
    maxWidth: 1400,
    margin: "auto",
    padding: "1rem 2rem",
    [theme.breakpoints.down("md")]: {
      marginLeft: 20,
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
