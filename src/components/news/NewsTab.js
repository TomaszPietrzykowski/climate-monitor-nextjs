import React from "react"
import { makeStyles } from "@material-ui/core/styles"

const useStyles = makeStyles((theme) => ({
  tab: {
    height: 280,
    width: 266,
    margin: "2rem",
    display: "grid",
    gridTemplateRows: "60% 40%",
    cursor: "pointer",
    transition: "all 0.3s",
    "&:hover $tabImg": {
      opacity: 1,
    },
    "&:hover $tabText": {
      color: theme.palette.secondary.main,
    },
    "&:hover $tabTitle": {
      color: theme.palette.secondary.main,
      textDecoration: "underline",
    },
    [theme.breakpoints.down("xs")]: {
      margin: "auto",
      marginTop: "3rem",
    },
  },
  badge: {
    fontFamily: "Poppins",
    position: "absolute",
    right: -6,
    bottom: "-.7rem",
    color: "white",
    background: "rgb(150,0,0)",
    padding: ".2rem .6rem .15rem",
    borderRadius: 10,
    textAlign: "center",
    fontSize: ".7rem",
    minWidth: "30%",
  },
  imageContainer: {
    position: "relative",
  },
  tabImg: {
    width: "100%",
    height: "100%",
    objectFit: "cover",
    borderRadius: "6px 6px 0 0",
  },
  tabContent: {
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
        <div className={classes.imageContainer}>
          <img
            className={classes.tabImg}
            src={article.image}
            alt={article.title}
            loading="lazy"
          />
          <div className={classes.badge}>{article.source}</div>
        </div>
        <div className={classes.tabContent}>
          <div className={classes.tabTitle}>{article.title}</div>
        </div>
      </div>
    </a>
  )
}

export default NewsTab
