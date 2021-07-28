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
    background: "linear-gradient(45deg, #fafafc, #fcfcfc)",
    paddingTop: "4rem",
  },
  siteContainer: {
    maxWidth: 1400,
    margin: "auto",
  },
  dashboard: {
    background: "#fafafa",
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
    display: "flex",
    justifyContent: "space-around",
    marginTop: "4rem",
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
    width: "100%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    margin: "10rem 0",
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
    ...theme.typography.tab,
    color: theme.palette.primary.dark,
    borderRadius: "50px",
    fontFamily: "Poppins, sans",
    fontSize: "1.2rem",
    textTransform: "uppercase",
    border: "3px solid",
    padding: "0.6rem 3rem",
    "&:hover": {
      border: `3px solid ${theme.palette.primary.dark}`,
      color: "white",
      background: theme.palette.primary.dark,
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
  const [latest, setLatest] = useState(null)

  useEffect(() => {
    getLatestCO2()
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

  const classes = useStyles()

  return (
    <main className={classes.root}>
      <div className={classes.siteContainer}>
        <div className={classes.container}>
          {loading || !latest ? (
            <Loader />
          ) : (
            <Fragment>
              <LatestPrimaryCard latest={latest} />
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
