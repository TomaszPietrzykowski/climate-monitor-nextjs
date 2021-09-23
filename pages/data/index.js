import React, { Fragment } from "react"
import Link from "next/link"
import Head from "next/head"
// mui
import { makeStyles } from "@material-ui/core/styles"
import Hidden from "@material-ui/core/Hidden"
// custom
import SectionHeader from "../../src/ui/SectionHeader"
import DataTabs from "../../src/components/data/DataTabs"

const drawerWidth = "360px"

const useStyles = makeStyles((theme) => ({
  container: {
    display: "flex",
    justifyContent: "flex-start",
    maxWidth: 1400,
    margin: "auto",
  },
  drawer: {
    minWidth: drawerWidth,
    height: "100%",
    overflow: "auto",
  },
  list: {
    marginBottom: "10rem",
    listStyle: "none",
    marginTop: "3.5rem",
  },
  listItem: {
    border: "1px solid transparent",
    borderRadius: 4,
    display: "flex",
    fontFamily: "Poppins",
    textDecoration: "none",
    fontWeight: 400,
    color: theme.palette.text.primary,
    fontSize: "1rem",
    margin: ".5rem 0 .5rem",
    padding: "0.8rem",
    paddingLeft: "2rem",
    cursor: "pointer",
    "&:hover": {
      color: theme.palette.primary.dark,
      border: `1px solid ${theme.palette.primary.dark}`,
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
  icon: {
    marginRight: "0.8rem",
  },
  btn: {
    display: "flex",
    textTransform: "none",
  },
  btnText: {
    fontFamily: "Poppins",
    fontWeight: 500,
    color: theme.palette.text.primary,
    fontSize: "1rem",
  },
}))

const DataDashboard = () => {
  const classes = useStyles()

  return (
    <Fragment>
      <Head>
        <title key="title">Climate data | Climate Monitor</title>
      </Head>
      {/* <SectionHeader>All Data</SectionHeader> */}
      {/* <Toolbar /> */}
      <div className={classes.container}>
        <Hidden mdDown>
          <div className={classes.drawer}>
            <ul className={classes.list}>
              <li>
                <Link href="/data/co2" className={classes.link}>
                  <div className={classes.listItem}>Carbon dioxide CO2</div>
                </Link>
              </li>

              <li>
                <Link href="/data/ch4" className={classes.link}>
                  <div className={classes.listItem}>Methane CH4</div>
                </Link>
              </li>

              <li>
                <Link href="/data/sf6" className={classes.link}>
                  <div className={classes.listItem}>
                    Sulfur hexafluoride SF6
                  </div>
                </Link>
              </li>
              <li>
                <Link href="/data/n2o" className={classes.link}>
                  <div className={classes.listItem}>Dinitrogen oxide N2O</div>
                </Link>
              </li>
              <li>
                <Link href="/data/temperatures" className={classes.link}>
                  <div className={classes.listItem}>Temperatures</div>
                </Link>
              </li>
              <li>
                <Link href="/data/sealevels" className={classes.link}>
                  <div className={classes.listItem}>Sea Levels</div>
                </Link>
              </li>
              <li>
                <Link href="/data/glaciers" className={classes.link}>
                  <div className={classes.listItem}>Glaciers</div>
                </Link>
              </li>
            </ul>
          </div>
        </Hidden>
        <DataTabs />
      </div>
    </Fragment>
  )
}

export default DataDashboard
