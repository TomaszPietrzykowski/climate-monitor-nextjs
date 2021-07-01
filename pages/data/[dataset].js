import React, { useState, useEffect, Fragment } from "react"
import Link from "next/link"
// import fs from "fs/promises"
import { useRouter } from "next/router"
import Head from "next/head"
import { makeStyles } from "@material-ui/core/styles"
import Hidden from "@material-ui/core/Hidden"
import { datasets } from "../../src/components/data/Datasets"

import Content from "../../src/components/data/Content"
import Loader from "../../src/ui/Loader"

const drawerWidth = "360px"

const useStyles = makeStyles((theme) => ({
  titleBar: {
    width: "100%",
    zIndex: theme.zIndex.drawer + 1,
    background: `linear-gradient(120deg, ${theme.palette.primary.dark}, ${theme.palette.primary.main})`,
  },
  sectionHeader: {
    fontFamily: "Poppins",
    fontWeight: 400,
    color: "white",
    fontSize: "1.4rem",
    marginLeft: 37,
    padding: "1rem",
    [theme.breakpoints.down("md")]: {
      marginLeft: 20,
    },
  },
  container: {
    display: "flex",
    justifyContent: "flex-start",
    maxWidth: 1600,
  },
  drawer: {
    minWidth: drawerWidth,
    height: "100%",
    overflow: "auto",
  },
  list: {
    marginTop: "3.5rem",
    marginBottom: "10rem",
    listStyle: "none",
  },
  listItem: {
    border: "1px solid transparent",
    borderRadius: 4,
    display: "flex",
    fontFamily: "Poppins",
    fontWeight: 400,
    color: theme.palette.text.primary,
    fontSize: "1rem",
    margin: ".5rem 0 .5rem 2rem",
    padding: "0.8rem",
    paddingLeft: 21,
    cursor: "pointer",
    "&:hover": {
      color: theme.palette.primary.dark,
      border: `1px solid ${theme.palette.primary.dark}`,
      borderRadius: 4,
    },
  },
  listItemActive: {
    borderRadius: 4,
    display: "flex",
    fontFamily: "Poppins",
    fontWeight: 400,
    border: `1px solid ${theme.palette.primary.dark}`,
    color: theme.palette.primary.dark,
    fontSize: "1rem",
    margin: ".5rem 0 .5rem 2rem",
    padding: "0.8rem",
    paddingLeft: 21,
    cursor: "pointer",
    "&:hover": {
      cursor: "default",
      borderRadius: 4,
    },
  },
  content: {
    fontSize: "2rem",
    padding: "3rem",
  },
  link: {
    textDecoration: "none",
  },
}))

const DataDisplay = () => {
  const router = useRouter()
  const dataset = router.query.dataset
  const [activeData, setActiveData] = useState(datasets[dataset].scopes[0])
  const [index, setIndex] = useState(0)
  const [loading, setLoading] = useState(false)
  const classes = useStyles()

  useEffect(() => {
    getData(datasets[dataset].scopes[0].endpoint)
    setIndex(0)
    // eslint-disable-next-line
  }, [dataset])

  const getData = async (endpoint) => {
    setLoading(true)
    try {
      const res = await fetch(
        `https://api.climatemonitor.info/api/v1/chartdata/${endpoint}`
      )
      const data = await res.json()
      setActiveData(data.data)
      setLoading(false)
    } catch (err) {
      console.log(err)
    }
  }

  const scrollUp = () => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  return (
    <Fragment>
      <Head>
        <title key="title">{`${datasets[dataset].header} | Climate Monitor`}</title>
        <meta
          name="description"
          key="description"
          content={`${datasets[dataset].header}, ${datasets[dataset].title}, Climate Monitor - free public REST API with json data on climate change`}
        />
      </Head>
      <div className={classes.titleBar}>
        <div className={classes.sectionHeader}>{datasets[dataset].header}</div>
      </div>
      <div className={classes.container}>
        <Hidden mdDown>
          <div className={classes.drawer}>
            <div className={classes.list}>
              <Link href="/data" className={classes.link}>
                <div className={classes.listItem}>Back to all data</div>
              </Link>
              {datasets[dataset].scopes &&
                datasets[dataset].scopes.map((scope, i) => (
                  <div
                    className={
                      i === index ? classes.listItemActive : classes.listItem
                    }
                    key={scope.title}
                    onClick={() => {
                      getData(scope.endpoint)
                      setIndex(i)
                      scrollUp()
                    }}
                  >
                    {scope.title}
                  </div>
                ))}
            </div>
          </div>
        </Hidden>
        {loading || !activeData.labels ? (
          <div style={{ width: "100%", marginTop: "7rem" }}>
            <Loader />
          </div>
        ) : (
          <Content activeData={activeData} />
        )}
      </div>
    </Fragment>
  )
}

export async function getStaticProps(context) {
  console.log("(Re-)generating...")
  const { params } = context
  const dataset = params.dataset

  return {
    props: {
      dataset,
    },
  }
}
export async function getStaticPaths() {
  return {
    paths: [
      { params: { dataset: "co2" } },
      { params: { dataset: "ch4" } },
      { params: { dataset: "sf6" } },
      { params: { dataset: "n2o" } },
      { params: { dataset: "temperatures" } },
      { params: { dataset: "sealevels" } },
      { params: { dataset: "glaciers" } },
    ],
    fallback: false,
  }
}

export default DataDisplay
