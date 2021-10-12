import React from "react"
import Link from "next/link"
import Image from "next/image"
import { makeStyles } from "@material-ui/styles"

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    maxWidth: 1600,
    display: "flex",
    flexDirection: "column",
    marginBottom: "10rem",
    [theme.breakpoints.down("md")]: {
      marginBottom: "4rem",
    },
  },
  container: {
    width: "100%",
    maxWidth: 1600,
    display: "grid",
    gridTemplateColumns: "1fr 1fr 1fr",
    padding: "2rem 0",
    [theme.breakpoints.down("lg")]: {
      gridTemplateColumns: "1fr 1fr",
    },
    [theme.breakpoints.down("md")]: {
      padding: "1rem",
      paddingTop: 0,
    },
    [theme.breakpoints.down("sm")]: {
      gridTemplateColumns: "1fr",
    },
  },
  link: {
    textDecoration: "none",
  },
  tab: {
    height: 278,
    maxWidth: 266,
    margin: "2rem auto",
    display: "flex",
    flexDirection: "column",
    cursor: "pointer",
    transition: "all 0.3s",

    "&:hover $tabImg": {
      filter: "contrast(115%)",
    },
    "&:hover $tabText": {
      color: theme.palette.secondary.main,
    },
    "&:hover $tabTitle": {
      color: theme.palette.secondary.main,
    },
    [theme.breakpoints.down("xs")]: {
      margin: "auto",
      height: "auto",
      marginTop: "3rem",
      maxWidth: 300,
    },
  },
  tabImg: {
    borderRadius: "4px 4px 0 0",
    [theme.breakpoints.down("xs")]: {
      objectFit: "cover",
      height: 400,
    },
  },
  tabContent: {
    flex: 1,
    width: "100%",
    overflow: "hidden",
    [theme.breakpoints.down("xs")]: {
      objectFit: "cover",
      height: 400,
    },
  },
  tabTitle: {
    fontSize: "1rem",
    fontWeight: 500,
    color: theme.palette.secondary.main,
    padding: "1rem 1rem .5rem 0rem",
    textAlign: "left",
  },
  tabText: {
    fontSize: "0.9rem",
    fontWeight: 400,
    lineHeight: 1.4,
    color: theme.palette.text.secondary,
    padding: "0rem 1rem .6rem 0rem",
    textAlign: "left",
  },
}))

const DataTabs = () => {
  const classes = useStyles()

  return (
    <div className={classes.root}>
      <div className={classes.container}>
        <Link href="/data/co2" className={classes.link}>
          <div className={classes.tab}>
            <Image
              src={"/co2tab.jpg"}
              alt={"earth atmospheric carbon dioxide"}
              width={278}
              height={160}
              className={classes.tabImg}
            />
            <div className={classes.tabContent}>
              <div className={classes.tabTitle}>Carbon dioxide</div>
              <div className={classes.tabText}>
                Carbon dioxide, due to it's abundance, the most important
                greenhouse gas.
              </div>
            </div>
          </div>
        </Link>
        <Link href="/data/ch4" className={classes.link}>
          <div className={classes.tab}>
            <Image
              src={"/ch4tab.jpg"}
              alt={"earth atmospheric methane"}
              width={278}
              height={160}
              className={classes.tabImg}
            />
            <div className={classes.tabContent}>
              <div className={classes.tabTitle}>Methane</div>
              <div className={classes.tabText}>
                Methane is a greenhouse gas with a global warming potential 84
                times greater than CO2.
              </div>
            </div>
          </div>
        </Link>
        <Link href="/data/sf6" className={classes.link}>
          <div className={classes.tab}>
            <Image
              src={"/sf6tab.jpg"}
              alt={"earth atmospheric sulfur hexafluoride"}
              width={278}
              height={160}
              className={classes.tabImg}
            />
            <div className={classes.tabContent}>
              <div className={classes.tabTitle}>Sulfur hexafluoride</div>
              <div className={classes.tabText}>
                The most potent greenhouse gas, with a warming potential of
                23,900 times that of CO2.
              </div>
            </div>
          </div>
        </Link>
        <Link href="/data/n2o" className={classes.link}>
          <div className={classes.tab}>
            <Image
              src={"/n2otab.jpg"}
              alt={"earth atmospheric dinitogen oxide"}
              width={278}
              height={160}
              className={classes.tabImg}
            />
            <div className={classes.tabContent}>
              <div className={classes.tabTitle}>Dinitrogen oxide</div>
              <div className={classes.tabText}>
                Nitrous oxide, potent greenhouse gas commonly known as laughing
                gas.
              </div>
            </div>
          </div>
        </Link>
        <Link href="/data/temperatures" className={classes.link}>
          <div className={classes.tab}>
            <Image
              src={"/temperaturestab.jpg"}
              alt={"earth temperature anomalies"}
              width={278}
              height={160}
              className={classes.tabImg}
            />
            <div className={classes.tabContent}>
              <div className={classes.tabTitle}>Temperatures</div>
              <div className={classes.tabText}>
                Global temperature rise, symptom of H3C, mostly driven by global
                greenhouse effect.
              </div>
            </div>
          </div>
        </Link>
        <Link href="/data/sealevels" className={classes.link}>
          <div className={classes.tab}>
            <Image
              src={"/sealevelstab.jpg"}
              alt={"sea levels"}
              width={278}
              height={160}
              className={classes.tabImg}
            />
            <div className={classes.tabContent}>
              <div className={classes.tabTitle}>Sea levels</div>
              <div className={classes.tabText}>
                Global ocean level rise caused by thermal sea water expantion
                and glaciers meltdown.
              </div>
            </div>
          </div>
        </Link>
        <Link href="/data/glaciers" className={classes.link}>
          <div className={classes.tab}>
            <Image
              src={"/glacierstab.jpg"}
              alt={"glaciers"}
              width={278}
              height={160}
              className={classes.tabImg}
            />
            <div className={classes.tabContent}>
              <div className={classes.tabTitle}>Glaciers</div>
              <div className={classes.tabText}>
                Polar glaciers mass loss caused by global warming. Data on
                Greenland and Antarctica.
              </div>
            </div>
          </div>
        </Link>
      </div>
    </div>
  )
}

export default DataTabs
