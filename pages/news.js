import React, { useState, useEffect } from "react"
import Head from "next/head"
// mui
import { makeStyles } from "@material-ui/core/styles"
import Pagination from "@material-ui/lab/Pagination"
import useScrollTrigger from "@material-ui/core/useScrollTrigger"
// custom
import NewsTab from "../src/components/news/NewsTab"
import Loader from "../src/ui/Loader"
import FloatButton from "../src/components/public_api/FloatButtonAPI"

const useStyles = makeStyles((theme) => ({
  /*
   * header
   */
  sectionHeader: {
    fontWeight: 400,
    color: theme.palette.secondary.main,
    fontSize: "4rem",
    maxWidth: 1400,
    margin: "auto",
    marginTop: "6rem",
    marginBottom: "2rem",
    padding: "1rem 2rem",
    overflow: "none",
    [theme.breakpoints.down("md")]: {
      marginLeft: 0,
      marginTop: "3rem",
      fontSize: "2.5rem",
    },
    [theme.breakpoints.down("sm")]: {
      marginTop: "2rem",
      marginBottom: 0,
      fontSize: "2rem",
    },
    position: "relative",
    "&::before": {
      content: "'Climate News'",
      position: "absolute",
      bottom: -45,
      left: -50,
      fontSize: "10rem",
      opacity: 0.08,
      whiteSpace: "nowrap",
      overflowX: "hidden",
      color: theme.palette.secondary.light,
      [theme.breakpoints.down("md")]: {
        fontSize: "7rem",
        bottom: -20,
        left: -15,
      },
      [theme.breakpoints.down("sm")]: {
        fontSize: "5rem",
        bottom: -10,
        left: -10,
      },
    },
  },
  poweredBy: {
    fontWeight: 400,
    color: theme.palette.text.secondary,
    fontSize: ".9rem",
    margin: "2rem 2rem 0",
    display: "flex",
    justifyContent: "flex-end",
    "& > * + *": {
      marginLeft: ".5rem",
      textDecoration: "none",
      "&:hover": {
        color: theme.palette.text.primary,
        textDecoration: "underline",
      },
    },
    [theme.breakpoints.down("sm")]: {
      justifyContent: "flex-start",
      margin: "0 2rem 2rem 2.2rem",
    },
    [theme.breakpoints.down("xs")]: {
      justifyContent: "flex-start",
      margin: "0 2rem 0 2.2rem",
    },
  },
  container: {
    ...theme.utils.container,
    minHeight: "85vh",
  },
  paginationContainer: {
    margin: "auto",
    width: "100%",
    display: "flex",
    justifyContent: "center",
  },
  paginationRoot: {
    margin: "1rem",
    "& > * + *": {
      marginTop: theme.spacing(2),
    },
  },
  newsContainer: {
    width: "100%",
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-between",
    padding: "1rem",
    [theme.breakpoints.down("md")]: {
      padding: "1rem",
      paddingTop: 0,
      justifyContent: "center",
    },
  },
}))

const News = () => {
  const [articles, setArticles] = useState([])
  const [page, setPage] = useState(1)
  const [pages, setPages] = useState(1)
  const [loading, setLoading] = useState(false)

  const classes = useStyles()

  const getNews = async () => {
    setLoading(true)
    try {
      const res = await fetch(`/api/news?page=${page}`)
      const data = await res.json()
      setArticles(data.articles)
      setPages(data.pages)
      window.scrollTo({
        top: 0,
        left: 0,
        behavior: "smooth",
      })
      setLoading(false)
    } catch (err) {
      console.log(err)
    }
  }

  const handleChange = (event, value) => {
    setPage(value)
  }

  useEffect(() => {
    getNews(page)
    // eslint-disable-next-line
  }, [page])

  // float button trigger on scroll
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 800,
  })

  return (
    <>
      <Head>
        <title key="title">Latest climate news | Climate Monitor</title>
        <meta
          name="description"
          key="description"
          content="Latest climate news at Climate Monitor - free public REST API with json data on climate change."
        />
      </Head>
      <div className={classes.titleBar}>
        <h1 className={classes.sectionHeader}>Climate News</h1>
      </div>
      <div className={classes.container}>
        <div className={classes.poweredBy}>
          <span>Powered by: </span>
          <a
            href="https://newsapi.org"
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: "inherit" }}
          >
            {" "}
            NewsAPI
          </a>
        </div>
        {loading ? (
          <Loader />
        ) : (
          <div className={classes.newsContainer}>
            {articles.map((article, i) => (
              <NewsTab key={`${article.url}${i}`} article={article} />
            ))}
          </div>
        )}
        {!loading && pages > 1 && (
          <div className={classes.paginationContainer}>
            <div className={classes.paginationRoot}>
              <Pagination count={pages} page={page} onChange={handleChange} />
            </div>
          </div>
        )}
      </div>
      {trigger && (
        <FloatButton
          cb={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        />
      )}
    </>
  )
}

export default News
