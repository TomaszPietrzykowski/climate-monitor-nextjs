import React, { Fragment } from "react"
import Link from "next/link"

import { makeStyles } from "@material-ui/styles"
import Grid from "@material-ui/core/Grid"
import Hidden from "@material-ui/core/Hidden"
import Facebook from "@material-ui/icons/Facebook"
import Twitter from "@material-ui/icons/Twitter"
import Instagram from "@material-ui/icons/Instagram"

import DevTag from "./DevTag"

const useStyles = makeStyles((theme) => ({
  footer: {
    background: `linear-gradient(120deg, ${theme.palette.primary.dark}, ${theme.palette.primary.main})`,
    width: "100%",
    minHeight: "14rem",
    marginLeft: 0,
    zIndex: 1500,
    position: "relative",
    transition: "color .2s ease",
    marginTop: "18rem",
    [theme.breakpoints.down("lg")]: {
      marginTop: "12rem",
    },
    [theme.breakpoints.down("md")]: {
      marginTop: "8rem",
      minHeight: "4rem",
    },
    [theme.breakpoints.down("sm")]: {
      marginTop: "6rem",
    },
  },
  footerImg: {
    opacity: 0.4,
    height: "13rem",
    verticalAlign: "bottom",
    [theme.breakpoints.down("md")]: {
      height: "10rem",
    },
    [theme.breakpoints.down("sm")]: {
      height: "6rem",
    },
  },
  mainContainer: {
    position: "absolute",
    marginTop: "1.5rem",
  },
  gridItem: {
    margin: "1.5rem",
    zIndex: 1,
    "&>*>*": {
      color: "white",
      marginLeft: "25px",
      paddingTop: ".35rem",
      fontSize: "0.9rem",
      fontWeight: 200,
      textDecoration: "none",
      letterSpacing: 0.6,
      "&:hover": {
        color: theme.palette.common.neonBlue,
      },
    },
    [theme.breakpoints.down("md")]: {
      margin: "1rem",
    },
  },
  social: {
    position: "absolute",
    marginTop: "-2.5rem",
  },
  icon: {
    marginRight: "1rem",
    fontSize: "2rem",
    color: "white",
    transition: "color .2s ease",
    "&:hover": {
      color: theme.palette.common.neonBlue,
    },
    [theme.breakpoints.down("sm")]: {
      fontSize: "1.6rem",
      marginBottom: "0.5rem",
    },
  },
}))

const Footer = ({ setValue }) => {
  const classes = useStyles()

  return (
    <Fragment>
      <div className={classes.footer}>
        <Hidden mdDown>
          <Grid container className={classes.mainContainer} justify="center">
            <Grid item className={classes.gridItem}>
              <Grid container direction="column" spacing={1}>
                <Grid
                  item
                  className={classes.link}
                  component={Link}
                  href="/"
                  onClick={() => setValue(0)}
                >
                  Home
                </Grid>
              </Grid>
            </Grid>
            <Grid item className={classes.gridItem}>
              <Grid container direction="column" spacing={1}>
                <Grid
                  item
                  className={classes.link}
                  component={Link}
                  href="/data"
                  onClick={() => setValue(1)}
                >
                  All data
                </Grid>
                <Grid
                  item
                  className={classes.link}
                  component={Link}
                  href="/data/co2"
                  onClick={() => setValue(1)}
                >
                  Carbon dioxide CO2
                </Grid>
                <Grid
                  item
                  className={classes.link}
                  component={Link}
                  href="/data/ch4"
                  onClick={() => setValue(1)}
                >
                  Methane CH4
                </Grid>
                <Grid
                  item
                  className={classes.link}
                  component={Link}
                  href="/data/sf6"
                  onClick={() => setValue(1)}
                >
                  Sulfur hexafluoride SF6
                </Grid>
                <Grid
                  item
                  className={classes.link}
                  component={Link}
                  href="/data/n2o"
                  onClick={() => setValue(1)}
                >
                  Dinitrogen oxide N2O
                </Grid>
              </Grid>
            </Grid>
            <Grid item className={classes.gridItem}>
              <Grid container direction="column" spacing={1}>
                <Grid
                  item
                  className={classes.link}
                  component={Link}
                  href="/data/temperatures"
                  onClick={() => setValue(1)}
                >
                  Temperatures
                </Grid>
                <Grid
                  item
                  className={classes.link}
                  component={Link}
                  href="/data/sealevels"
                  onClick={() => setValue(1)}
                >
                  Sea levels
                </Grid>
                <Grid
                  item
                  className={classes.link}
                  component={Link}
                  href="/data/glaciers"
                  onClick={() => setValue(1)}
                >
                  Glaciers
                </Grid>
              </Grid>
            </Grid>
            <Grid item className={classes.gridItem}>
              <Grid container direction="column" spacing={1}>
                <Grid
                  item
                  className={classes.link}
                  component={Link}
                  href="/news"
                  onClick={() => setValue(2)}
                >
                  Newsfeed
                </Grid>
                <Grid
                  item
                  className={classes.link}
                  component={Link}
                  href="/about"
                  onClick={() => setValue(3)}
                >
                  About
                </Grid>
                <Grid
                  item
                  className={classes.link}
                  component={Link}
                  href="/public_api"
                  onClick={() => setValue(5)}
                >
                  Public API
                </Grid>
              </Grid>
            </Grid>
            <Grid item className={classes.gridItem}>
              <Grid container direction="column" spacing={1}>
                <Grid
                  item
                  className={classes.link}
                  component={Link}
                  href="/contact"
                  onClick={() => setValue(4)}
                >
                  Contact
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Hidden>
        <img src="/reef10.png" alt="polar bear" className={classes.footerImg} />
        <Grid container justify="flex-end" className={classes.social}>
          <Grid
            item
            component={"a"}
            href="http://www.facebook.com"
            rel="noopener noreferrer"
            target="_blank"
          >
            <Facebook className={classes.icon} />
          </Grid>
          <Grid
            item
            component={"a"}
            href="http://www.twitter.com"
            rel="noopener noreferrer"
            target="_blank"
          >
            <Twitter className={classes.icon} />
          </Grid>
          <Grid
            item
            component={"a"}
            href="http://www.instagram.com"
            rel="noopener noreferrer"
            target="_blank"
          >
            <Instagram className={classes.icon} />
          </Grid>
        </Grid>
        <DevTag />
      </div>
    </Fragment>
  )
}

export default Footer
