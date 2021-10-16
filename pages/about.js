import React from "react"
import Head from "next/head"
// mui
import { makeStyles } from "@material-ui/core/styles"

const useStyles = makeStyles((theme) => ({
  /*
   * header
   */
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
      marginLeft: 0,
      marginTop: "3rem",
      fontSize: "2.5rem",
    },
    [theme.breakpoints.down("sm")]: {
      marginTop: "2rem",
      fontSize: "2rem",
    },
    position: "relative",
    "&::before": {
      content: "'About'",
      position: "absolute",
      bottom: -45,
      left: -50,
      fontSize: "10rem",
      opacity: 0.05,
      whiteSpace: "nowrap",
      color: theme.palette.secondary.light,
      [theme.breakpoints.down("md")]: {
        fontSize: "7rem",
        bottom: -20,
        left: -15,
      },
      [theme.breakpoints.down("sm")]: {
        fontSize: "5rem",
        bottom: -10,
        left: 3,
      },
    },
  },
  /*
   * hero section
   */
  containerTop: {
    width: "100%",
    maxWidth: 1920,
    margin: "auto",
    display: "grid",
    gridTemplateColumns: "50% 50%",
    [theme.breakpoints.down("lg")]: {
      maxWidth: 1400,
      gridTemplateColumns: "66% 33%",
      "& + &": {
        gridTemplateColumns: "33% 66%",
        marginTop: "6rem",
      },
    },
    [theme.breakpoints.down("sm")]: {
      gridTemplateColumns: "1fr",
      "& + &": {
        gridTemplateColumns: "1fr",
        marginTop: 0,
        "& > :first-child": {
          order: 2,
        },
      },
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
    [theme.breakpoints.down("sm")]: {
      padding: "3rem 2rem 5rem",
    },
    [theme.breakpoints.down("xs")]: {
      padding: "3rem 1.5rem 4rem",
    },
    "div + &": {
      marginLeft: 0,
      marginRight: "auto",
      paddingLeft: "6rem",
      [theme.breakpoints.down("md")]: {
        padding: "3rem 2rem rem 3rem 4rem",
      },
      [theme.breakpoints.down("sm")]: {
        padding: "3rem 2rem",
      },
      [theme.breakpoints.down("xs")]: {
        padding: "3rem 1.5rem",
      },
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
  /*
   * data sources grid
   */
  container: {
    ...theme.utils.container,
    marginTop: "3rem",
    marginBottom: "14rem",
    padding: "4rem 0 0 2rem",
    [theme.breakpoints.down("md")]: {
      padding: "4rem 2rem 2rem",
      margin: 0,
    },
    [theme.breakpoints.down("sm")]: {
      margin: 0,
      padding: "2.5rem 2rem 2rem",
      "& > :last-child > :last-child": {
        paddingTop: 0,
      },
    },
    [theme.breakpoints.down("xs")]: {
      padding: "1.5rem 1.5rem 4rem",
    },
  },
  grid: {
    marginBottom: "6rem",
    display: "grid",
    gridTemplateColumns: "25% 75%",
    [theme.breakpoints.down("sm")]: {
      gridTemplateColumns: "1fr",
      marginBottom: 0,
    },
  },
  gridItemSM: {
    ...theme.flex.colStart,
    alignItems: "flex-end",
    [theme.breakpoints.down("sm")]: {
      alignItems: "flex-start",
      width: "33%",
    },
  },
  gridItemL: {
    padding: "2rem",
    [theme.breakpoints.down("sm")]: {
      padding: "0.5rem 0 2rem",
    },
  },
  logoImg: {
    objectFit: "contain",
    maxWidth: "100%",
    height: "auto ",
    marginTop: "3rem",
    [theme.breakpoints.down("sm")]: {
      marginTop: "1.5rem",
    },
  },
  /*
   * copy
   */
  h2: {
    color: theme.palette.secondary.main,
    fontWeight: 300,
    letterSpacing: 1.5,
    fontSize: "2rem",
    marginBottom: "2rem",
    textAlign: "left",
    [theme.breakpoints.down("lg")]: {
      marginBottom: 0,
    },
    [theme.breakpoints.down("sm")]: {
      fontSize: "1.8rem",
      marginBottom: "1rem",
    },
    [theme.breakpoints.down("xs")]: {
      fontSize: "1.6rem",
    },
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
    ...theme.utils.p,
    color: theme.palette.text.secondary,
    marginTop: "1.5rem",
    paddingTop: 0,
    [theme.breakpoints.down("sm")]: {
      fontSize: "1rem",
      lineHeight: 1.5,
      fontWeight: 200,
      marginBlock: "1.5rem",
    },
  },
  link: {
    color: theme.palette.secondary.dark,
    fontSize: "1rem",
    textDecoration: "underline",
    fontWeight: 500,
  },
  /*
   * target last section
   */
  root: {
    "& > :last-child": {
      [theme.breakpoints.down("lg")]: {
        gridTemplateColumns: "33% 66%",
      },
      [theme.breakpoints.down("sm")]: {
        gridTemplateColumns: "1fr",
      },
    },
  },
}))

const About = () => {
  const classes = useStyles()

  return (
    <div className={classes.root}>
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
        <div className={classes.contentContainer}>
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
          <div className={classes.gridItemSM}>
            <img
              src={"/NOAA_logo.png"}
              alt={"NOAA logo"}
              width={205}
              height={205}
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
            <img
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
            <img
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
      <div className={classes.containerTop}>
        <div className={classes.imageContainer}>
          <img src="/flood.jpeg" className={classes.image} />
        </div>
        <div className={classes.contentContainer}>
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
