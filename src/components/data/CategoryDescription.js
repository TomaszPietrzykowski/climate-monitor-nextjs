import React from "react"
import { makeStyles } from "@material-ui/styles"
const useStyles = makeStyles((theme) => ({
  container: {
    padding: "0 4rem 8rem",
    fontFamily: "Poppins",
    fontWeight: 300,
  },
  para: {
    color: theme.palette.text.secondary,
    ...theme.utils.p,
    maxWidth: "auto",
    padding: "0 4rem 0 0",
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
