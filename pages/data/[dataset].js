import React, { useState, useEffect, Fragment } from "react"
import Link from "next/link"
import Head from "next/head"
//mui
import { makeStyles } from "@material-ui/core/styles"
import Hidden from "@material-ui/core/Hidden"
import BackIcon from "@material-ui/icons/ArrowBackIos"
// custom
import { datasets } from "../../src/components/data/Datasets"
import Content from "../../src/components/data/Content"
import CategoryDescription from "../../src/components/data/CategoryDescription"
import Loader from "../../src/ui/Loader"

const drawerWidth = "360px"

const useStyles = makeStyles((theme) => ({
  container: {
    ...theme.utils.container,
    display: "flex",
    justifyContent: "flex-start",
    marginTop: "4rem",
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
    fontWeight: 400,
  },
  listItem: {
    border: "1px solid transparent",
    borderRadius: 4,
    display: "flex",
    color: theme.palette.text.primary,
    fontSize: "1rem",
    margin: ".5rem 0 .5rem",
    padding: "0.8rem",
    paddingLeft: "2rem",
    cursor: "pointer",
    "&:hover": {
      color: theme.palette.secondary.main,
      border: `1px solid ${theme.palette.secondary.main}`,
      borderRadius: 4,
    },
  },
  listItemActive: {
    borderRadius: 4,
    display: "flex",
    border: `1px solid ${theme.palette.secondary.main}`,
    color: theme.palette.secondary.main,
    fontSize: "1rem",
    margin: ".5rem 0 .5rem",
    padding: "0.8rem",
    paddingLeft: "2rem",
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
  backIcon: {
    paddingInline: "0.2rem",
    marginRight: "1rem",
  },
}))

const DataDisplay = ({ dataset }) => {
  const [activeData, setActiveData] = useState(datasets[dataset].scopes[0])
  const [index, setIndex] = useState(0)
  const [loading, setLoading] = useState(false)
  const classes = useStyles()

  useEffect(() => {
    getData(datasets[dataset].scopes[0].endpoint)
    setIndex(0)
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
      console.error(err)
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
      <div className={classes.container}>
        <Hidden mdDown>
          <div className={classes.drawer}>
            <div className={classes.list}>
              <Link href="/data" className={classes.link}>
                <div className={classes.listItem}>
                  <BackIcon className={classes.backIcon} />
                  all data
                </div>
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
        <div>
          {loading || !activeData.labels ? (
            <div
              style={{ width: "100%", marginTop: "7rem", marginBottom: "40vh" }}
            >
              <Loader />
            </div>
          ) : (
            <Content
              activeData={activeData}
              gradient={datasets[dataset].gradient}
            />
          )}
          <CategoryDescription
            desc={datasets[dataset].desc}
            link={datasets[dataset].sourceLink}
          />
        </div>
      </div>
    </Fragment>
  )
}

export async function getStaticProps(context) {
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
