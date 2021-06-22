import React from "react"
import Link from "next/link"
import { Button } from "@material-ui/core"
import { useInView } from "react-intersection-observer"
import { Spring, animated, config } from "react-spring"

import { makeStyles } from "@material-ui/styles"

const useStyles = makeStyles((theme) => ({
  sloganContainer: {
    margin: "6rem auto",
    maxWidth: 1200,
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    padding: "3.5rem",
    [theme.breakpoints.down("sm")]: {
      margin: "4rem auto",
      padding: "1rem",
    },
  },
  sloganText: {
    fontFamily: "Poppins, sans",
    fontSize: "2rem",
    textAlign: "center",
    color: "rgba(0, 0, 0, 0.5)",
    [theme.breakpoints.down("xs")]: {
      fontSize: "1.6rem",
    },
  },
  about: {
    maxWidth: "780px",
    fontFamily: "Poppins, sans",
    fontSize: "1rem",
    textAlign: "center",
    lineHeight: "2rem",
    color: "rgba(0, 0, 0, 0.5)",
    padding: "3rem",
    marginTop: "1.5rem",
    [theme.breakpoints.down("md")]: {
      padding: "1rem",
    },
    [theme.breakpoints.down("sm")]: {
      lineHeight: "1.5rem",
      marginTop: "1rem",
    },
    [theme.breakpoints.down("xs")]: {
      fontSize: ".9rem",
    },
  },
  blue: {
    color: theme.palette.primary.main,
  },
  flex: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  btn: {
    ...theme.typography.tab,
    textAlign: "center",
    borderRadius: "50px",
    fontFamily: "Poppins, sans",
    fontSize: "0.95rem",
    textTransform: "none",
    border: "3px solid",
    marginTop: "1.5rem",
    marginLeft: "0rem",
    marginRight: "0rem",
    padding: "0.3rem 2rem",
    "&:hover": {
      border: "3px solid",
    },
    [theme.breakpoints.down("sm")]: {
      border: "2px solid",
      "&:hover": {
        border: "2px solid",
      },
    },

    [theme.breakpoints.down("xs")]: {
      padding: "0.2rem 1.5rem",
      fontSize: "0.8rem",
      fontWeight: 500,
    },
  },
}))

const GetInvolved = ({ setValue }) => {
  const classes = useStyles()
  const [ref, inView] = useInView({
    triggerOnce: false,
    trigger: 1,
  })

  return (
    <div className={classes.sloganContainer}>
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
              project is a living initiative, aimed at providing you hard data
              on climate change in a most useful and accessible way. No cristal
              ball guesses on "tipping point" and other factors too complex for
              responsible estimation. Data speaks volumes and we actually know a
              lot by now.
              <br />
              <br /> Suggest functionality or request additional data. Share
              ideas and opinions for even better experience.
            </div>
            <Link href="/contact">
              <Button
                variant="outlined"
                color="primary"
                className={classes.btn}
                onClick={() => setValue(4)}
              >
                Contact
              </Button>
            </Link>
          </animated.div>
        )}
      </Spring>
    </div>
  )
}

export default GetInvolved
