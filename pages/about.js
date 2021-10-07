import React from "react"
import Head from "next/head"
import Image from "next/image"
// mui
import { makeStyles } from "@material-ui/core/styles"

const useStyles = makeStyles((theme) => ({
  containerTop: {
    width: "100%",
    maxWidth: 1920,
    margin: "auto",
    display: "grid",
    gridTemplateColumns: "50% 50%",
  },
  titleBar: {
    width: "100%",
    zIndex: theme.zIndex.drawer + 1,
    background: `white`,
  },
  sectionHeader: {
    fontWeight: 400,
    color: theme.palette.secondary.main,
    fontSize: "4rem",
    maxWidth: 1400,
    margin: "auto",
    marginTop: "6rem",
    marginBottom: "2rem",
    padding: "1rem 2rem",
    [theme.breakpoints.down("md")]: {
      marginLeft: 20,
    },
    position: "relative",
    "&::before": {
      content: "'About'",
      position: "absolute",
      bottom: -45,
      left: -50,
      fontSize: "10rem",
      opacity: 0.04,
      whiteSpace: "nowrap",
      color: theme.palette.secondary.light,
    },
  },
  contentContainer: {
    marginLeft: "auto",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    width: "100%",
    maxWidth: 700,
    padding: "2rem",
  },
  image: {
    display: "block",
    maxWidth: "100%",
  },
  container: {
    ...theme.utils.container,
    marginTop: "3rem",
    marginBottom: "14rem",
    padding: "4rem 0 0 2rem",
  },
  grid: {
    marginBottom: "6rem",
    display: "grid",
    gridTemplateColumns: "25% 75%",
  },
  gridEven: {
    marginBottom: "10rem",
    display: "grid",
    gridTemplateColumns: "67% 33%",
  },
  gridItemSM: {
    ...theme.flex.colStart,
    alignItems: "flex-end",
  },
  gridItemL: {
    padding: "2rem",
  },
  logoImg: {
    objectFit: "contain",
  },
  h2: {
    color: theme.palette.secondary.main,
    fontWeight: 300,
    letterSpacing: 1.5,
    fontSize: "2rem",
    marginBottom: "2rem",
  },
  pHead: {
    fontSize: "1.3rem",
    color: theme.palette.text.primary,
    lineHeight: 1.5,
    letterSpacing: 0.5,
    marginBottom: "1rem",
    maxWidth: "800px",
  },
  p: {
    color: theme.palette.text.secondary,
    lineHeight: 1.5,
    letterSpacing: 0.3,
    padding: "1rem 2rem 0 0",
    maxWidth: "800px",
  },
  link: {
    color: theme.palette.secondary.dark,
    fontSize: "1rem",
    textDecoration: "underline",
    fontWeight: 500,
  },
  img: {
    height: "100%",
    objectFit: "cover",
  },
}))

const About = () => {
  const classes = useStyles()

  return (
    <div>
      <Head>
        <title key="title">About | Climate Monitor</title>
        <meta
          name="description"
          key="description"
          content="About data sources and Climate Monitor - free public REST API with json data on climate change"
        />
      </Head>
      <div className={classes.titleBar}>
        <h1 className={classes.sectionHeader}>About</h1>
      </div>
      <div className={classes.containerTop}>
        <div className={classes.contentContainer}>
          <div className={classes.content}>
            <h2 className={classes.h2}>Climate Monitor</h2>
            <p className={classes.p}>
              Our mission is to increase climate awarness by facilitating access
              to reliable climate data.
            </p>
            <p className={classes.p}>
              Simple in concept, Climate Monitor is a convenience API, built
              around scheduler reading data from multiple origins. Data is
              processed and stored in custom database for quick and reliable
              access, then served as json. Project is aimed at providing
              reliable, preprocessed data for frontend-focused web applications.
            </p>
          </div>
        </div>
        <div className={classes.imageContainer}>
          <img src="/satellite.jpeg" className={classes.image} />
        </div>
      </div>
      <div className={classes.containerTop}>
        <div className={classes.imageContainer}>
          <img src="/noaa-vessel.jpeg" className={classes.image} />
        </div>
        <div
          className={classes.contentContainer}
          style={{ marginLeft: 0, marginRight: "auto", paddingLeft: "6rem" }}
        >
          <div className={classes.content}>
            <h2 className={classes.h2}>Credits</h2>
            <p className={classes.p}>
              Climate Monitor would not be possible without access to reliable
              data. Effect of hard scientific work, countless hours of
              measurements and data processing. Listed below you will find
              origins of publications that provide Climate Monitor with data. It
              is always recomended to refer original publication for any
              scientific purpose.
            </p>
          </div>
        </div>
      </div>
      <div className={classes.container}>
        <div className={classes.grid} style={{ marginBottom: 0 }}>
          <div className={classes.gridItemSM}></div>
          <div className={classes.gridItemL}>
            <p className={classes.h2}>Data sources</p>
          </div>
        </div>
        <div className={classes.grid}>
          <div className={classes.gridItemSM} style={{ padding: "2rem" }}>
            <Image
              src={"/NOAA_logo.png"}
              alt={"NOAA logo"}
              width={180}
              height={180}
              className={classes.logoImg}
            />
          </div>
          <div className={classes.gridItemL}>
            <p className={classes.pHead}>
              The Global Monitoring Laboratory of the National Oceanic and
              Atmospheric Administration
            </p>
            <p className={classes.p}>
              The Global Monitoring Laboratory of the National Oceanic and
              Atmospheric Administration conducts research that addresses three
              major challenges: greenhouse gas and carbon cycle feedbacks,
              changes in clouds, aerosols, and surface radiation, and recovery
              of stratospheric ozone.
            </p>
            <p className={classes.p}>
              GML has a vision of a Society using the best possible information
              to inform decisions on climate change, weather variability, carbon
              cycle feedbacks, and ozone depletion.
            </p>

            <p className={classes.p}>
              <a
                href="https://gml.noaa.gov/about/aboutgmd.html"
                target="_blank"
                className={classes.link}
              >
                Visit NOAA GML website.
              </a>
            </p>
          </div>
        </div>
        <div className={classes.grid}>
          <div className={classes.gridItemSM}>
            <Image
              src={"/NASA_logo.png"}
              alt={"NASA logo"}
              width={220}
              height={220}
              className={classes.logoImg}
            />
          </div>
          <div className={classes.gridItemL}>
            <p className={classes.pHead}>
              NASA Jet Propulsion Laboratory California Insititute of Technology
              Physical Oceanography Distributed Active Archive Center (PO.DAAC)
            </p>
            <p className={classes.p}>
              Since the launch of NASA's first ocean-observing satellite,
              Seasat, in 1978, PO.DAAC has become the premier data center for
              measurements focused on sea surface topography, ocean temperature,
              ocean winds, salinity, gravity, and ocean circulation.
            </p>
            <p className={classes.p}>
              In addition to providing access to its data holdings, PO.DAAC acts
              as a gateway to data stored at other ocean and climate archives.
              This and other tools and services enable PO.DAAC to support a wide
              user community working in areas such as ocean and climate
              research, applied science and industry, natural resource
              management, policy making, and general public consumption.
            </p>
            <p className={classes.p}>
              <a
                href="https://podaac.jpl.nasa.gov/AboutPodaac"
                target="_blank"
                className={classes.link}
              >
                Visit PO.DAAC website.
              </a>
            </p>
          </div>
        </div>
        <div className={classes.grid}>
          <div className={classes.gridItemSM}>
            <Image
              src={"/berkeley-earth.png"}
              alt={"Berkeley Earth logo"}
              width={240}
              height={240}
              className={classes.logoImg}
            />
          </div>
          <div className={classes.gridItemL}>
            <br />
            <p className={classes.pHead}>Berkeley Earth</p>
            <p className={classes.p}>
              Berkeley Earth supplies comprehensive open-source world air
              pollution data and highly user-accessible global temperature data
              that is timely, impartial, and verified. From this foundation,
              further questions and investigates the nature of relationships
              between this data and timely human and environmental issues, such
              as ocean temperature and acidification. Communicates outcomes in
              peer-reviewed journals, global print and digital media, at
              conferences, and website.
            </p>
            <p className={classes.p}>
              <a
                href="http://berkeleyearth.org/"
                target="_blank"
                className={classes.link}
              >
                Visit Berkeley Earth website.
              </a>
            </p>
          </div>
        </div>
      </div>
      <div className={classes.containerTop} style={{ marginBottom: "12rem" }}>
        <div className={classes.imageContainer}>
          <img src="/flood.jpeg" className={classes.image} />
        </div>
        <div
          className={classes.contentContainer}
          style={{ marginLeft: 0, marginRight: "auto", paddingLeft: "6rem" }}
        >
          <div className={classes.content}>
            <h2 className={classes.h2}>Climate headlines</h2>
            <p className={classes.p}>
              Climate Monitor's newsfeed is powered by NewsAPI - provider of
              worldwide news and breaking headlines.
            </p>
            <p className={classes.p}>
              Presented articles are not older then 30 days.
            </p>
            <p className={classes.p}>
              <a
                href="https://newsapi.org/"
                target="_blank"
                className={classes.link}
              >
                Visit NewsAPI website.
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About
