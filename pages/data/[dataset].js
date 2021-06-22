import React, { useState, useEffect, Fragment } from "react"
import Link from "next/link"
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
    // border: "1px solid transparent",
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
  // loaderContainer: {
  //   // minHeight: "90vh",
  //   width: "100%",
  // }
}))

const DataDisplay = ({ dataset }) => {
  const activeDataset = datasets["co2"]
  const [activeData, setActiveData] = useState(activeDataset.scopes[0])
  const [index, setIndex] = useState(0)
  const [loading, setLoading] = useState(false)
  const classes = useStyles()

  useEffect(() => {
    getData(activeDataset.scopes[0].endpoint)
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
      <div className={classes.titleBar}>
        <div className={classes.sectionHeader}>{activeDataset.header}</div>
      </div>
      <div className={classes.container}>
        <Hidden mdDown>
          <div className={classes.drawer}>
            <div className={classes.list}>
              <Link href="/data" className={classes.link}>
                <div className={classes.listItem}>Back to all data</div>
              </Link>
              {activeDataset.scopes.map((scope, i) => (
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

export default DataDisplay
