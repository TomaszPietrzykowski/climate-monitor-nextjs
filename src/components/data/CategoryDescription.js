import React from "react"
import { makeStyles } from "@material-ui/styles"
const useStyles = makeStyles((theme) => ({
  container: {
    padding: "4rem",
  },
  para: {
    color: "green",
  },
}))
const CategoryDescription = ({ desc }) => {
  const classes = useStyles()
  return (
    <div className={classes.container}>
      {desc &&
        desc.map((string, i) => <p className={classes.para}>{string}</p>)}
    </div>
  )
}

export default CategoryDescription
