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
    margin: "5rem auto 3rem auto",
    padding: "2rem",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "flex-start",
    zIndex: 2,
  },
  title: {
    fontFamily: "Poppins, sans",
    fontSize: "4rem",
    fontWeight: 500,
    lineHeight: 1.2,
    letterSpacing: 3,
    color: "white",
    margin: ".5rem 0",

    [theme.breakpoints.down("md")]: {
      fontSize: "4rem",
    },
    [theme.breakpoints.down("sm")]: {
      marginBottom: 0,
      fontSize: "2.8rem",
    },
    [theme.breakpoints.down("xs")]: {
      fontSize: "2.3rem",
    },
  },
  subtitle: {
    fontFamily: "Poppins, sans",
    fontSize: "2rem",
    fontWeight: 100,
    letterSpacing: 10,
    color: "rgba(20, 238, 255, 1)",
    zIndex: 2,
    [theme.breakpoints.down("md")]: {
      fontSize: "2rem",
    },
    [theme.breakpoints.down("sm")]: {
      fontSize: "1.4rem",
    },
    [theme.breakpoints.down("xs")]: {
      fontSize: "1.2rem",
    },
  },
  btn: {
    ...theme.typography.tab,
    fontWeight: 400,
    borderRadius: "50px",
    color: "white",
    fontFamily: "Poppins, sans",
    fontSize: "1.3rem",
    letterSpacing: 3,
    border: "3px solid white",
    textTransform: "uppercase",
    padding: "0.5rem 3rem 0.5rem 2rem",
    marginTop: "3rem",
    marginLeft: 0,
    [theme.breakpoints.down("xs")]: {
      padding: "0.2rem 1rem",
      fontSize: "0.8rem",
      fontWeight: 500,
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
            &rarr;&nbsp; Public API
          </Button>
        </Link>
      </div>
    </div>
  )
}

export default Hero
