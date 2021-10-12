import React from "react"
import { makeStyles } from "@material-ui/styles"
const useStyles = makeStyles((theme) => ({
  container: {
    padding: "0 4rem 8rem",
    [theme.breakpoints.down("md")]: {
      padding: "0 2rem",
    },
    [theme.breakpoints.down("xs")]: {
      padding: "0 1.5rem",
    },
  },
  para: {
    ...theme.utils.p,
    color: theme.palette.text.secondary,
    maxWidth: "auto",
    padding: "0 4rem 0 0",
    marginBottom: "2rem",
    [theme.breakpoints.down("md")]: {
      padding: 0,
    },
    [theme.breakpoints.down("sm")]: {
      fontSize: "1rem",
      lineHeight: 1.5,
      fontWeight: 200,
      marginBlock: "1.5rem",
    },
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
