import React from "react"
import { makeStyles } from "@material-ui/core/styles"

const useStyles = makeStyles((theme) => ({
  tab: {
    height: 278,
    width: 266,
    margin: "2.5rem",
    display: "flex",
    flexDirection: "column",
    cursor: "pointer",
    transition: "all 0.3s",
    "&:hover $tabImg": {
      opacity: 1,
    },
    "&:hover $tabText": {
      color: theme.palette.primary.dark,
    },
    "&:hover $tabTitle": {
      color: theme.palette.primary.dark,
      textDecoration: "underline",
    },
    [theme.breakpoints.down("xs")]: {
      margin: "auto",
      marginTop: "3rem",
    },
  },
  tabImg: {
    flex: 2,
    width: "100%",
    backgroundSize: "cover",
    borderRadius: "4px 4px 0 0",
  },
  tabContent: {
    flex: 1,
    width: "100%",
    fontFamily: "Poppins",
    overflow: "hidden",
  },
  tabTitle: {
    fontSize: "1rem",
    fontWeight: 500,
    color: theme.palette.text.primary,
    padding: "1.1rem 1rem .8rem 0rem",
    textAlign: "left",
    "&:hover": {
      textDecoration: "underline",
    },
  },
  link: {
    textDecoration: "none",
  },
}))
const NewsTab = ({ article }) => {
  const classes = useStyles()
  return (
    <a
      href={article.url}
      className={classes.link}
      target="_blank"
      rel="noopener noreferrer"
    >
      <div className={classes.tab}>
        <div
          className={classes.tabImg}
          style={{ backgroundImage: `url(${article.image})` }}
        ></div>
        <div className={classes.tabContent}>
          <div className={classes.tabTitle}>{article.title}</div>
        </div>
      </div>
    </a>
  )
}

export default NewsTab
