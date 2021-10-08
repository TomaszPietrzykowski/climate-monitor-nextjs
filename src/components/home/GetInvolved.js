import React from "react"
import Link from "next/link"
import { Button } from "@material-ui/core"
import { useInView } from "react-intersection-observer"
import { Spring, animated, config } from "react-spring"

import { makeStyles } from "@material-ui/styles"

const useStyles = makeStyles((theme) => ({
  sloganText: {
    fontSize: "2rem",
    fontWeight: 300,
    textAlign: "left",
    color: theme.palette.secondary.main,
    [theme.breakpoints.down("sm")]: {
      fontSize: "2rem",
    },
    [theme.breakpoints.down("xs")]: {
      fontSize: "1.6rem",
    },
  },
  about: {
    ...theme.utils.p,
    color: theme.palette.text.secondary,
    marginTop: "1.5rem",
    paddingTop: 0,
    [theme.breakpoints.down("sm")]: {
      fontSize: "1.1rem",
      lineHeight: 1.4,
      fontWeight: 200,
      marginTop: "0.5rem",
    },
    [theme.breakpoints.down("xs")]: {
      fontSize: "1rem",
    },
  },
  blue: {
    color: theme.palette.secondary.main,
  },
  flex: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "flex-start",
  },
  btn: {
    color: theme.palette.primary.main,
    borderRadius: "50px",
    fontFamily: "Poppins, sans",
    fontSize: "1.2rem",
    textTransform: "uppercase",
    border: "3px solid",
    padding: "0.4rem 2.7rem",
    marginTop: "2rem",
    width: "min-content",
    transition: "all .2s ease",
    "&:hover": {
      border: `3px solid ${theme.palette.primary.main}`,
      color: "white",
      background: theme.palette.primary.main,
    },
    [theme.breakpoints.down("md")]: {
      fontSize: "1rem",
      padding: "0.45rem 2.5rem",
      marginTop: "1.5rem",
    },
    [theme.breakpoints.down("sm")]: {
      letterSpacing: 2,
      fontSize: "0.9rem",
      fontWeight: 400,
      padding: "0.4rem 2rem",
      border: "2px solid",
    },
    [theme.breakpoints.down("xs")]: {
      padding: "0.35rem 1.5rem",
    },
  },
  // new styles
  containerTop: {
    width: "100%",
    maxWidth: 1920,
    margin: "auto",
    display: "grid",
    gridTemplateColumns: "50% 50%",
    [theme.breakpoints.down("lg")]: {
      maxWidth: 1400,
      gridTemplateColumns: "33% 66%",
      "& + &": {
        gridTemplateColumns: "66% 33%",
        marginTop: "6rem",
      },
    },
    [theme.breakpoints.down("sm")]: {
      gridTemplateColumns: "1fr",
      "& + &": {
        gridTemplateColumns: "1fr",
        marginTop: "6rem",
        "& > :first-child": {
          order: 2,
        },
      },
    },
  },
  contentContainer: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    width: "100%",
    maxWidth: 700,
    padding: "2rem 6rem",
    [theme.breakpoints.down("lg")]: {
      padding: "2rem 4rem",
    },
    [theme.breakpoints.down("md")]: {
      padding: "2rem",
    },
    [theme.breakpoints.down("sm")]: {
      padding: "5rem 2rem 0",
    },
    [theme.breakpoints.down("xs")]: {
      padding: "5rem 1.5rem 0",
    },
  },
  image: {
    display: "block",
    maxWidth: "100%",
    [theme.breakpoints.down("lg")]: {
      maxWidth: "auto",
      height: "100%",
      objectFit: "cover",
    },
  },
}))

const GetInvolved = () => {
  const classes = useStyles()
  const [ref, inView] = useInView({
    triggerOnce: false,
    trigger: 1,
  })

  return (
    <>
      <div className={classes.containerTop}>
        <div className={classes.imageContainer}>
          <img src="/jellies.jpeg" className={classes.image} />
        </div>
        <div className={classes.contentContainer}>
          <Spring
            from={{ opacity: 0, marginTop: 30, marginBottom: -30 }}
            to={{
              opacity: inView ? 1 : 0,
              marginTop: inView ? 0 : 30,
              marginBottom: inView ? 0 : -30,
            }}
            config={config.gentle}
          >
            {(props) => (
              <animated.div style={props} ref={ref} className={classes.flex}>
                <div className={classes.sloganText}>Get involved</div>
                <div className={classes.about}>
                  The<span className={classes.blue}> climate monitor </span>
                  project is a living initiative, aimed at providing you hard
                  data on climate change in a most useful and accessible way. No
                  cristal ball guesses on "tipping point" and other factors too
                  complex for responsible estimation. Data speaks volumes and we
                  actually know a lot by now.
                  <br />
                  <br />
                  If you find this app useful share your experience, suggest
                  functionality or request additional data. Contribute to the
                  code base if you feel like, or just say "Hi".
                </div>
                <Link href="/contact">
                  <Button
                    variant="outlined"
                    color="primary"
                    className={classes.btn}
                  >
                    Contact
                  </Button>
                </Link>
              </animated.div>
            )}
          </Spring>
        </div>
      </div>
      <div className={classes.containerTop}>
        <div
          className={classes.contentContainer}
          style={{ marginLeft: "auto" }}
        >
          <h2 className={classes.sloganText}>Data sources</h2>
          <div className={classes.about}>
            Climate monitor relies on three data sources: The Global Monitoring
            Laboratory of the National Oceanic and Atmospheric Administration
            for greenhouse gases levels, NASA Jet Propulsion Laboratory
            California Insititute of Technology Physical Oceanography
            Distributed Active Archive Center for data on ocean levels and
            glaciers ice mass and Berkeley Earth for global temperature
            measurements.
          </div>
          <Link href="/about">
            <Button variant="outlined" color="primary" className={classes.btn}>
              About
            </Button>
          </Link>
        </div>
        <div className={classes.imageContainer}>
          <img src="/baloon.jpeg" className={classes.image} />
        </div>
      </div>
    </>
  )
}

export default GetInvolved
