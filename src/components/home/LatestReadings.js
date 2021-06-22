import React, { Fragment, useEffect, useState } from "react"
import Link from "next/link"
import { makeStyles } from "@material-ui/styles"
import LatestCard from "./LatestCard"
import LatestPrimaryCard from "./LatestPrimaryCard"
import { Button } from "@material-ui/core"
import Loader from "../../ui/Loader"

const useStyles = makeStyles((theme) => ({
  siteContainer: {
    maxWidth: 1300,
    margin: "auto",
  },
  container: {
    display: "flex",
    flexDirection: "column",
    marginBottom: "4rem",
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
    marginTop: "6rem",
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
    borderRadius: "50px",
    fontFamily: "Poppins, sans",
    fontSize: "0.95rem",
    // width: "150px",
    textTransform: "none",
    border: "3px solid",
    marginTop: "1.5rem",
    marginLeft: "0rem",
    marginRight: "0rem",
    padding: "0.3rem 1.5rem",
    "&:hover": {
      border: "3px solid",
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
      const data = await res.json()
      setLatest(data.data)
      setLoading(false)
    } catch (err) {
      console.log(err)
      setLoading(false)
    }
  }

  const classes = useStyles()

  return (
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
                  onClick={() => setValue(1)}
                >
                  More&nbsp;Data
                </Button>
              </Link>
            </div>
          </Fragment>
        )}
      </div>
    </div>
  )
}

export default LatestReadings
