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
    fontFamily: "Poppins",
    fontWeight: 400,
    color: theme.palette.secondary.main,
    fontSize: "2.8rem",
    maxWidth: 1400,
    margin: "auto",
    marginTop: "4rem",
    marginBottom: "2rem",
    padding: "1rem 2rem 1rem 3.5rem",
    [theme.breakpoints.down("md")]: {
      marginLeft: 20,
    },
    position: "relative",
    "&::before": {
      content: "'Dashboard'",
      position: "absolute",
      bottom: -35,
      left: 5,
      fontSize: "8rem",
      opacity: 0.03,
      whiteSpace: "nowrap",
      color: theme.palette.secondary.light,
    },
  },
  dashboard: {
    background: "#ffffff",
    fontFamily: "Poppins",
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
    [theme.breakpoints.down("md")]: {
      marginTop: "2rem",
    },
    [theme.breakpoints.down("sm")]: {
      marginTop: "1.5rem",
    },
    [theme.breakpoints.down("xs")]: {
      marginTop: "1rem",
    },
  },
  btnContainer: {
    ...theme.flex.rowStart,
    margin: "6rem 3rem 10rem",
    [theme.breakpoints.down("md")]: {
      marginTop: "2rem",
    },
    [theme.breakpoints.down("sm")]: {
      marginTop: "1.5rem",
    },
    [theme.breakpoints.down("xs")]: {
      marginTop: "1rem",
    },
  },
  btn: {
    color: theme.palette.primary.main,
    borderRadius: "50px",
    fontFamily: "Poppins, sans",
    fontSize: "1.2rem",
    textTransform: "uppercase",
    border: "3px solid",
    padding: "0.6rem 3rem",
    transition: "all .2s ease",
    "&:hover": {
      border: `3px solid ${theme.palette.primary.main}`,
      color: "white",
      background: theme.palette.primary.main,
    },
    [theme.breakpoints.down("xs")]: {
      padding: "0.2rem 1rem",
      fontSize: "0.8rem",
      fontWeight: 500,
      marginTop: "1rem",
      border: "2px solid",
      "&:hover": {
        border: "2px solid",
      },
    },
  },
}))

const cardData = [
  { html: "1 year ago" },
  { html: "5 years ago" },
  { html: "10 years ago" },
]

const LatestReadings = ({ setValue }) => {
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
      const res = await fetch(
        "https://api.climatemonitor.info/api/v1/chartdata/latest_co2"
      )
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
      const res = await fetch(
        "https://api.climatemonitor.info/api/v1/chartdata/monthly_ch4_gl"
      )
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
