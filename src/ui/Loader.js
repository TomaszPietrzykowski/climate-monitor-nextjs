import React from "react"

import { makeStyles } from "@material-ui/styles"

const useStyles = makeStyles((theme) => ({
  containerStyle: {
    width: "100%",
    height: "30vh",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  spinnerStyle: {
    height: "4rem",
    margin: "2rem",
  },
}))

const Loader = () => {
  const classes = useStyles()

  return (
    <div className={classes.containerStyle}>
      <img
        src="/loader.gif"
        alt="fetching data..."
        className={classes.spinnerStyle}
      />
    </div>
  )
}

export default Loader
