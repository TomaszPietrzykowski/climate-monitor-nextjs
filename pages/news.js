import React, { useState, useEffect } from "react"
import Head from "next/head"
// mui
import { makeStyles } from "@material-ui/core/styles"
import Pagination from "@material-ui/lab/Pagination"
// custom
import SectionHeader from "../src/ui/SectionHeader"
import NewsTab from "../src/components/news/NewsTab"
import Loader from "../src/ui/Loader"

const useStyles = makeStyles((theme) => ({
  poweredBy: {
    fontFamily: "Poppins",
    fontWeight: 400,
    color: theme.palette.text.secondary,
    fontSize: ".9rem",
    margin: "2rem",
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
  },
  container: {
    ...theme.utils.container,
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
    justifyContent: "flex-start",
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
      const res = await fetch(`http://localhost:5000/api/news?page=${page}`)
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
      <SectionHeader>Climate News</SectionHeader>
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
          <div
            className={classes.paginationContainer}
            style={{ marginBottom: "3rem" }}
          >
            <div className={classes.paginationRoot}>
              <Pagination count={pages} page={page} onChange={handleChange} />
            </div>
          </div>
        )}
      </div>
    </>
  )
}

export default News
