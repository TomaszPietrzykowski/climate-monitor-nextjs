import React, { Fragment, useEffect, useState } from "react"
import Link from "next/link"
import { makeStyles } from "@material-ui/styles"
import LatestCard from "./LatestCard"
import LatestPrimaryCard from "./LatestPrimaryCard"
import { Button } from "@material-ui/core"
import Loader from "../../ui/Loader"

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    paddingTop: "4rem",
    [theme.breakpoints.down("lg")]: {
      paddingTop: "2rem",
    },
    [theme.breakpoints.down("md")]: {
      paddingTop: 0,
    },
  },
  siteContainer: {
    maxWidth: 1400,
    margin: "auto",
  },
  titleBar: {
    width: "100%",
    zIndex: theme.zIndex.drawer + 1,
    background: `white`,
  },
  sectionHeader: {
    fontWeight: 400,
    color: theme.palette.secondary.main,
    fontSize: "2.8rem",
    maxWidth: 1400,
    margin: "auto",
    marginTop: "4rem",
    marginBottom: "2rem",
    padding: "1rem 2rem",
    [theme.breakpoints.down("lg")]: {
      padding: "1rem 3.5rem",
    },
    [theme.breakpoints.down("md")]: {
      marginLeft: 0,
      fontSize: "2rem",
    },
    [theme.breakpoints.down("sm")]: {
      fontSize: "1.8rem",
      padding: "1rem 2rem",
      marginTop: "2rem",
      marginBottom: 0,
    },
    [theme.breakpoints.down("xs")]: {
      fontSize: "1.6rem",
      padding: "1rem 1.5rem",
    },
    position: "relative",
    "&::before": {
      content: "'Dashboard'",
      position: "absolute",
      bottom: -30,
      left: -20,
      fontSize: "8rem",
      opacity: 0.08,
      whiteSpace: "nowrap",
      color: theme.palette.secondary.light,
      [theme.breakpoints.down("lg")]: {
        bottom: -30,
        left: 10,
      },
      [theme.breakpoints.down("md")]: {
        fontSize: "5rem",
        bottom: -10,
        left: 30,
        opacity: 0.04,
      },
      [theme.breakpoints.down("sm")]: {
        fontSize: "3.6rem",
        bottom: 0,
        left: 10,
      },
      [theme.breakpoints.down("xs")]: {
        fontSize: "3.6rem",
        left: 5,
      },
    },
  },
  dashboard: {
    background: "#ffffff",
    display: "block",
    margin: "0 4rem 4rem",
    padding: "2rem",
    borderRadius: 20,
    boxShadow:
      "-10px -10px 20px rgba(255,255,255,1), 10px 10px 20px rgba(0,0,0,.02)",
  },
  container: {
    display: "flex",
    flexDirection: "column",
  },
  latestContainer: {
    display: "grid",
    gridTemplateColumns: "1fr 1fr 1fr",
    marginTop: "2rem",
    marginLeft: "2rem",
    [theme.breakpoints.down("sm")]: {
      marginTop: "1.5rem",
    },
    [theme.breakpoints.down("xs")]: {
      marginTop: "1rem",
    },
  },
  btnContainer: {
    ...theme.flex.rowStart,
    margin: "6rem 4rem 10rem",
    [theme.breakpoints.down("lg")]: {
      margin: "4rem 4rem 6rem",
    },
    [theme.breakpoints.down("md")]: {
      margin: "2rem 4rem 6rem",
    },
    [theme.breakpoints.down("sm")]: {
      margin: "2rem 2rem 6rem",
    },
    [theme.breakpoints.down("xs")]: {
      margin: "1rem 2rem 5rem",
    },
  },
  btn: {
    ...theme.utils.btn,
    letterSpacing: 1,
    color: theme.palette.primary.main,
    fontSize: "1.2rem",
    border: "3px solid",
    padding: "0.6rem 3rem",
    transition: "all .2s ease",
    "&:hover": {
      border: `3px solid ${theme.palette.primary.main}`,
      color: "white",
      background: theme.palette.primary.main,
    },
    [theme.breakpoints.down("md")]: {
      fontSize: "1rem",
      padding: "0.45rem 2.5rem",
    },
    [theme.breakpoints.down("sm")]: {
      letterSpacing: 2,
      fontSize: "0.9rem",
      fontWeight: 400,
      padding: "0.4rem 2rem",
      border: "2px solid",
    },
    [theme.breakpoints.down("xs")]: {
      padding: "0.35rem 1.2rem",
    },
  },
}))

const cardData = [
  { html: "1 year ago" },
  { html: "5 years ago" },
  { html: "10 years ago" },
]

const LatestReadings = () => {
  const [loading, setLoading] = useState(false)
  const [loadingCH4, setLoadingCH4] = useState(false)
  const [latest, setLatest] = useState(null)
  const [latestCH4, setLatestCH4] = useState(null)

  useEffect(() => {
    getLatestCO2()
    getLatestCH4()
  }, [])

  const getLatestCO2 = async () => {
    try {
      setLoading(true)
      const res = await fetch("/api/v1/chartdata/latest_co2")
      const { data } = await res.json()
      setLatest(data)
      setLoading(false)
    } catch (err) {
      console.log(err)
      setLoading(false)
    }
  }
  const getLatestCH4 = async () => {
    try {
      setLoadingCH4(true)
      const res = await fetch("/api/v1/chartdata/monthly_ch4_gl")
      const { data } = await res.json()
      setLatestCH4(data)
      setLoadingCH4(false)
    } catch (err) {
      console.log(err)
      setLoadingCH4(false)
    }
  }

  const classes = useStyles()

  return (
    <main className={classes.root}>
      <div className={classes.siteContainer}>
        <div className={classes.container}>
          <div className={classes.titleBar}>
            <h1 className={classes.sectionHeader}>Dashboard</h1>
          </div>
          {loading || loadingCH4 || !latest || !latestCH4 ? (
            <Fragment>
              <Loader />
              <div style={{ marginBottom: "50vh" }} />
            </Fragment>
          ) : (
            <Fragment>
              <LatestPrimaryCard latest={latest} methane={latestCH4} />
              <div className={classes.latestContainer}>
                {cardData.map((data, i) => (
                  <LatestCard
                    key={i}
                    latest={latest}
                    labelText={data.html}
                    index={i}
                  />
                ))}
              </div>
              <div className={classes.btnContainer}>
                <Link href="/data">
                  <Button
                    variant="outlined"
                    color="primary"
                    className={classes.btn}
                  >
                    More&nbsp;Data
                  </Button>
                </Link>
              </div>
            </Fragment>
          )}
        </div>
      </div>
    </main>
  )
}

export default LatestReadings
