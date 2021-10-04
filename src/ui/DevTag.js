import React from "react"
import { makeStyles } from "@material-ui/styles"

const useStyles = makeStyles((theme) => ({
  container: {
    width: "100%",
    display: "flex",
    justifyContent: "center",
    backgroundColor: theme.palette.text.secondary,
    zIndex: 1500,
  },
  tag: {
    padding: "0.2rem 2rem",
    textDecoration: "none",
    fontSize: "0.6rem",
    letterSpacing: 0.5,
    color: theme.palette.secondary.light,
    cursor: "pointer",
    transition: "color .2s ease",
    "&:hover": {
      color: "white",
    },
  },
}))

const DevTag = () => {
  const classes = useStyles()
  return (
    <div className={classes.container}>
      <a
        className={classes.tag}
        href="https://github.com/TomaszPietrzykowski"
        rel="noopener noreferrer"
        target="_blank"
      >
        climatemonitor &copy; {new Date().getFullYear()}
      </a>
    </div>
  )
}

export default DevTag
