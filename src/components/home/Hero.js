import React from "react"
import Link from "next/link"
import { makeStyles } from "@material-ui/styles"
import { Button } from "@material-ui/core"

const useStyles = makeStyles((theme) => ({
  hero: {
    backgroundImage: `url("/hero.jpg")`,
    backgroundColor: "rgba(67, 78, 96, 1)",
    backgroundSize: "cover",
    backgroundPosition: "center",
    width: "100%",
    display: "flex",
    position: "relative",
    "&::after": {
      content: '""',
      position: "absolute",
      width: "100%",
      height: "100%",
      background:
        "linear-gradient(90deg, rgba(0, 27, 51, 1), 80%, rgba(0, 27, 51, 0.2))",
      mixBlendMode: "multiply",
      zIndex: 1,
    },
  },
  container: {
    width: "100%",
    maxWidth: 1400,
    margin: "8rem auto",
    padding: "2rem",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "flex-start",
    zIndex: 2,
    [theme.breakpoints.down("lg")]: {
      padding: "3.5rem",
      margin: "6rem auto",
    },
    [theme.breakpoints.down("md")]: {
      margin: "4rem auto 3rem",
    },
    [theme.breakpoints.down("sm")]: {
      margin: "3rem auto 3rem",
      padding: "2rem",
    },
    [theme.breakpoints.down("xs")]: {
      margin: "2.5rem auto 2.5rem",
      padding: "1.5rem",
    },
  },
  title: {
    fontSize: "4rem",
    fontWeight: 500,
    lineHeight: 1.2,
    letterSpacing: 3,
    color: "white",
    margin: ".5rem 0",

    [theme.breakpoints.down("lg")]: {
      fontSize: "3.5rem",
    },
    [theme.breakpoints.down("md")]: {
      fontSize: "3rem",
      marginBlock: 0,
    },
    [theme.breakpoints.down("sm")]: {
      marginBottom: 0,
      letterSpacing: 1.6,
      fontSize: "2rem",
    },
    [theme.breakpoints.down("xs")]: {
      fontSize: "1.7rem",
    },
  },
  subtitle: {
    fontSize: "2rem",
    fontWeight: 200,
    letterSpacing: 3,
    color: "rgba(20, 238, 255, 1)",
    zIndex: 2,
    [theme.breakpoints.down("lg")]: {
      fontSize: "1.8rem",
    },
    [theme.breakpoints.down("md")]: {
      fontSize: "1.4rem",
    },
    [theme.breakpoints.down("sm")]: {
      fontSize: "1.1rem",
      letterSpacing: 1.5,
      marginBottom: "0.2rem",
    },
    [theme.breakpoints.down("xs")]: {
      fontSize: "1rem",
    },
  },
  btn: {
    ...theme.utils.btn,
    border: `3px solid white`,
    padding: "0.5rem 3rem 0.5rem 2rem",
    marginTop: "2rem",
    marginLeft: 0,
    transition: "all .2s ease",
    "&:hover": {
      color: theme.palette.common.neonBlue,
      borderColor: theme.palette.common.neonBlue,
    },
    [theme.breakpoints.down("lg")]: {
      marginTop: "1rem",
    },
    [theme.breakpoints.down("md")]: {
      letterSpacing: 2.5,
      fontSize: "1.2rem",
      padding: "0.45rem 2.5rem 0.45rem 1.5rem",
    },
    [theme.breakpoints.down("sm")]: {
      letterSpacing: 2,
      marginTop: "1rem",
      fontSize: "0.9rem",
      fontWeight: 400,
      padding: "0.4rem 2rem 0.4rem 1rem",
      border: "2px solid",
    },
    [theme.breakpoints.down("xs")]: {
      padding: "0.35rem 1.3rem 0.35rem 0.6rem",
    },
  },
}))

const Hero = () => {
  const classes = useStyles()

  return (
    <div className={classes.hero}>
      <div className={classes.container}>
        <div className={classes.subtitle}>Your eye on the climate</div>
        <div className={classes.title}>
          Free json data on
          <br />
          climate change
        </div>
        <Link href="/public_api">
          <Button className={classes.btn} variant="outlined">
            &rarr;&nbsp;Public API
          </Button>
        </Link>
      </div>
    </div>
  )
}

export default Hero
