import React from "react"
import { makeStyles } from "@material-ui/styles"
const useStyles = makeStyles((theme) => ({
  container: {
    padding: "4rem",
    fontFamily: "Poppins",
    fontWeight: 300,
  },
  para: {
    color: theme.palette.text.secondary,
    lineHeight: 1.8,
    letterSpacing: 0.3,
    padding: "1rem 2rem 0 0",
    maxWidth: "800px",
    marginBottom: "2rem",
  },
}))
const CategoryDescription = ({ desc, link }) => {
  const classes = useStyles()
  return (
    <div className={classes.container}>
      {desc &&
        desc.map((string, i) => <p className={classes.para}>{string}</p>)}
      <p className={classes.source}>
        <a href={link} target="_blank">
          Read more
        </a>
      </p>
    </div>
  )
}

export default CategoryDescription
