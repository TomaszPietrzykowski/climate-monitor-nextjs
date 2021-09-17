import React from "react"
import Head from "next/head"
import Image from "next/image"
// mui
import { makeStyles } from "@material-ui/core/styles"
// custom
import SectionHeader from "../src/ui/SectionHeader"

const useStyles = makeStyles((theme) => ({
  container: {
    ...theme.utils.container,
    padding: "0 0 0 2rem",
    fontFamily: "Poppins",
    fontWeight: 300,
  },
  grid: {
    // border: "1px solid magenta",
    marginBottom: "10rem",
    display: "grid",
    gridTemplateColumns: "33% 67%",
  },
  gridEven: {
    // border: "1px solid magenta",
    marginBottom: "10rem",
    display: "grid",
    gridTemplateColumns: "67% 33%",
  },
  gridItemSM: {
    // border: "1px solid blue",
    ...theme.flex.colStart,
  },
  gridItemL: {
    // border: "1px solid green",
    padding: "2rem",
  },
  logoImg: {
    // width: "100%",
    // minWidth: 280,
    objectFit: "contain",
  },
  h2: {
    color: theme.palette.secondary.main,
    fontWeight: 300,
    letterSpacing: 1.5,
    fontSize: "1.8rem",
    margin: "4rem 0 1rem",
  },
  pHead: {
    fontSize: "1.4rem",
    color: theme.palette.text.primary,
    lineHeight: 1.8,
    letterSpacing: 0.8,
    marginBottom: "3rem",
  },
  p: {
    color: theme.palette.text.secondary,
    lineHeight: 1.8,
    letterSpacing: 0.3,
    padding: "1rem 2rem 0 0",
    maxWidth: "800px",
    marginBottom: "2rem",
  },
  link: {
    color: theme.palette.secondary.dark,
    fontSize: "1.2rem",
    textDecoration: "underline",
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
      <SectionHeader>About</SectionHeader>
      <div className={classes.container}>
        <div className={classes.gridEven}>
          <div className={classes.gridItemSM}>
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
              frontend-focused web projects reliable source of pre-processed
              data.
            </p>
            <br />
            <br />
            <h2 className={classes.h2}>Data sources and credits</h2>
            <p className={classes.p}>
              Climate Monitor would not be possible without access to reliable
              data. Effect of hard scientific work, countless hours of
              measurements and data processing. Listed below you will find
              origins of publications that provide Climate Monitor with data. It
              is always recomended to refer original publication for any
              scientific purpose.
            </p>
          </div>
          <div className={classes.gridItemShow}>
            <img
              src={"/sky.jpeg"}
              alt={"climate show off"}
              width={460}
              height={600}
              className={classes.img}
            />
          </div>
        </div>
        <div className={classes.grid}>
          <div className={classes.gridItemSM}>
            <Image
              src={"/NOAA_logo.png"}
              alt={"NOAA logo"}
              width={280}
              height={280}
              className={classes.logoImg}
            />
          </div>
          <div className={classes.gridItemL}>
            <p className={classes.pHead}>
              The Global Monitoring Laboratory of the National Oceanic and
              Atmospheric Administration
            </p>
            <p className={classes.p}>
              Mission: to acquire, evaluate, and make available accurate,
              long-term records of atmospheric gases, aerosol particles, clouds,
              and surface radiation in a manner that allows the causes and
              consequences of change to be understood.
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
        <div className={classes.gridEven}>
          <div className={classes.gridItemL}>
            <p className={classes.pHead}>
              NASA Jet Propulsion Laboratory California Insititute of Technology
              Physical Oceanography Distributed Active Archive Center (PO.DAAC)
            </p>
            <p className={classes.p}>
              The mission of the PO.DAAC is to preserve NASA’s ocean and climate
              data and make these universally accessible and meaningful.
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
          <div className={classes.gridItemSM}>
            <Image
              src={"/NASA_logo.png"}
              alt={"NASA logo"}
              width={320}
              height={320}
              className={classes.logoImg}
            />
          </div>
        </div>
        <div className={classes.grid}>
          <div className={classes.gridItemSM}>
            <Image
              src={"/berkeley-earth.png"}
              alt={"Berkeley Earth logo"}
              width={320}
              height={320}
              className={classes.logoImg}
            />
          </div>
          <div className={classes.gridItemL}>
            <p className={classes.pHead}>Berkeley Earth</p>
            <p className={classes.p}>
              MISSION AND PURPOSE: "Global warming is the defining environmental
              challenge of our time. The need for quality, unbiased scientific
              information about global warming could not be more urgent. Yet
              there are few sources of historic global temperature records, the
              foundation underlying all global warming analysis.""
            </p>
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
    </div>
  )
}

export default About
