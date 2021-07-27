import React from "react"
import Head from "next/head"
import Link from "next/link"
// mui
import { makeStyles } from "@material-ui/core/styles"
// custom
import SectionHeader from "../src/ui/SectionHeader"

const useStyles = makeStyles((theme) => ({
  container: {
    ...theme.utils.container,
    padding: "4rem 2rem",
    fontFamily: "Poppins",
    fontWeight: 300,
  },
  h2: {
    color: theme.palette.secondary.main,
    fontWeight: 300,
    letterSpacing: 1.5,
    fontSize: "1.6rem",
  },
  p: {
    color: theme.palette.text.secondary,
    lineHeight: 1.8,
    padding: "1rem 0 0",
  },
  pHead: {
    fontSize: "1.2rem",
    color: theme.palette.text.primary,
    lineHeight: 1.8,
    padding: "3rem 0 0",
  },
  code: {
    fontSize: "1rem",
    lineHeight: 1.8,
    letterSpacing: 1,
    color: theme.palette.common.lightBlue,
  },
  secondaryCode: {
    fontSize: "1rem",
    lineHeight: 1.5,
    color: theme.palette.secondary.main,
  },
  codeblock: {
    width: "max-content",
    padding: "2rem 5rem 2rem 2rem",
    margin: "1rem 0 2rem",
    background: "#001a33",
    borderRadius: 7,
  },

  //
  // code format colorizer
  //
  rootEnd: {
    color: " #e6ffee",
  },
  factor: {
    color: "#ffc6b3",
  },
  query: {
    color: "#b3ecff",
  },
  property: {
    color: "#80d4ff",
  },
  string: {
    color: "#ffe0b3",
  },
  number: {
    color: "#ccffe6",
  },
  gridParent: {
    display: "grid",
    gridTemplateColumns: "2fr 1fr",
    border: "1px solid green",
  },
  grid1: {
    border: "1px solid orange",
    display: "flex",
    justifyContent: "flex-end",
  },
  grid2: {
    border: "1px solid purple",
  },
  grid3: {
    width: "100%",
    maxWidth: 934,
    border: "1px solid blue",
  },
  link: {
    color: "blue%",
    fontWeight: 500,
  },
}))

const PublicAPI = () => {
  const classes = useStyles()
  return (
    <>
      <Head>
        <title key="title">Public climate API | Climate Monitor</title>
      </Head>
      <SectionHeader>Public REST API</SectionHeader>
      <div className={classes.gridParent}>
        <div className={classes.grid1}>
          <div className={classes.grid3}>dsdssds</div>
        </div>
        <div className={classes.grid1}>dsdssds</div>
      </div>
      <div className={classes.container}>
        <h2 className={classes.h2}>Latest and historical climate data</h2>
        <p className={classes.pHead}>
          What type of data is supplied by climate monitor API?
        </p>
        <p className={classes.p}>
          There are seven main factors in focus. Four atmospheric greenhouse
          gases: carbon dioxide (co2), methane (ch4), sulfur hexafluoride (sf6),
          dinitrogen oxide (n2o), global temperatures, global ocean levels and
          finally condition of Greenland's and Antarctica's glaciers. Within
          each of the factors you will find multiple sets of data, usually based
          on data scope: monthly, weekly or annual data, some datasets are
          available for global values and values calculated for Mauna Loa
          Observatory Hawaii separately.
        </p>
        <p className={classes.pHead}>How it works</p>
        <p className={classes.p}>
          Idea behind climate monitor is to deliver desent range of useful data
          on climate change in a form of accessible, free JSON API, under one -
          somewhat logically structured - set of endpoints.
        </p>
        <p className={classes.p}>
          Data is read from multiple ftp servers or obtained within a NASA's
          EarthData program, then saved into custom database. Fast asynchronous
          server delivers responses instantly, free of ftp restrictions. Data
          update schedule runs in relation to data scope and source data update
          schedule. That ensures both: that values are accurate and that no
          excessive traffic is generated at the source.
        </p>
        <p className={classes.pHead}>Licence</p>
        <p className={classes.p}>
          Public API at climatemonitor.info is free to use without any
          registration. I do my best to keep it up and running, if you encounter
          any problems don't get mad, get involved:{" "}
          <Link href="/contact" className={classes.link}>
            <a>contact me.</a>
          </Link>
        </p>
        <p className={classes.pHead}>Data ownership and credits</p>
        <p className={classes.p}>
          Climate Monitor does NOT have any rights to presented data. All
          credits for hard, scientific work should go to data sources listed
          below. To ensure proper representation of data and data restrictions
          original data sets should also be referenced in case of any scientific
          usage.
        </p>
        <p className={classes.p}>
          Climate Monitor's mission is to popularize climate awarness, in
          particular facilitating access to reliable climate data by serving it
          in a form of JSON API. All data used and served is publicly availaible
          under conditions that Climate Monitor - to the best of my knowledge
          and effort - fulfills.
        </p>
        <p className={classes.p}>
          Climate Monitor uses primarily 3 main data sources:
        </p>
        <p className={classes.p}>
          NASA Jet Propulsion Laboratory California Insititute of Technology
          Physical Oceanography Distributed Active Archive Center (PO.DAAC)
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
        <p className={classes.p}>
          The Global Monitoring Laboratory (GML) of the National Oceanic and
          Atmospheric Administration (NOAA)
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
        <p className={classes.p}>Berkeley Earth</p>
        <p className={classes.p}>
          <a
            href="http://berkeleyearth.org/"
            target="_blank"
            className={classes.link}
          >
            Visit Berkeley Earth website.
          </a>
        </p>
        <p className={classes.p}>
          <Link href="/about" className={classes.link}>
            <a>More on data</a>
          </Link>
        </p>
        <p className={classes.pHead}>How to use API?</p>
        <p className={classes.p}>
          Simply send a GET request to one of supported endpoints. Endpoints are
          structured like so:
        </p>
        <div className={classes.codeblock}>
          <code className={classes.code}>
            <span className={classes.rootEnd}>{" <ROOT_ENDPOINT> "}</span>
            <span className={classes.factor}>/ :factor </span>
            <span className={classes.query}>/ :query</span> <br />
          </code>
        </div>
        <small>Examlpes:</small>
        <div className={classes.codeblock}>
          <code className={classes.code}>
            <span className={classes.rootEnd}>
              https://climatemonitor.info/api/public/v1
            </span>
            <span className={classes.factor}>/co2</span>
            <span className={classes.query}>/daily</span> <br />
            <span className={classes.rootEnd}>
              https://climatemonitor.info/api/public/v1
            </span>
            <span className={classes.factor}>/ch4</span>
            <span className={classes.query}>/monthly</span> <br />
            <span className={classes.rootEnd}>
              https://climatemonitor.info/api/public/v1
            </span>
            <span className={classes.factor}>/temperatures</span>
            <span className={classes.query}>/annual</span> <br />
            <span className={classes.rootEnd}>
              https://climatemonitor.info/api/public/v1
            </span>
            <span className={classes.factor}>/glaciers</span>
            <span className={classes.query}>/greenland</span> <br />
            <span className={classes.rootEnd}>
              https://climatemonitor.info/api/public/v1
            </span>
            <span className={classes.factor}>/co2</span>
            <span className={classes.query}>/for/2015-04-01</span> <br />
            <span className={classes.rootEnd}>
              https://climatemonitor.info/api/public/v1
            </span>
            <span className={classes.factor}>/co2</span>
            <span className={classes.query}>/for/2018</span> <br />
          </code>
        </div>
        <p className={classes.pHead}>Root endpoint</p>
        <p className={classes.p}>
          Root endpoint is bound to API version. Current latest endpoint:
        </p>
        <div className={classes.codeblock}>
          <code className={classes.code}>
            https://climatemonitor.info/api/public/v1 <br />
          </code>
        </div>
        <p className={classes.p}>
          After significan updates new endpoints will be introduced. For sake of
          stability of dependant applications all legacy endpoints will be
          maintained.
        </p>
        <p className={classes.pHead}>Factor</p>
        <p className={classes.p}>
          There are currently 7 climate factors availaible: levels of 4
          greenhouse gases, global temperature anomalies, ocean mass anomalies
          and glaciers mass loss.
        </p>
        <div className={classes.codeblock}>
          <code className={classes.code}>
            <span className={classes.secondaryCode}>{"<ROOT_ENDPOINT>"}</span>
            /co2<span className={classes.secondaryCode}>/:query</span>
            <br />
            <span className={classes.secondaryCode}>{"<ROOT_ENDPOINT>"}</span>
            /ch4<span className={classes.secondaryCode}>/:query</span>
            <br />
            <span className={classes.secondaryCode}>{"<ROOT_ENDPOINT>"}</span>
            /sf6<span className={classes.secondaryCode}>/:query</span>
            <br />
            <span className={classes.secondaryCode}>{"<ROOT_ENDPOINT>"}</span>
            /n2o<span className={classes.secondaryCode}>/:query</span>
            <br />
            <span className={classes.secondaryCode}>{"<ROOT_ENDPOINT>"}</span>
            /temperatures<span className={classes.secondaryCode}>/:query</span>
            <br />
            <span className={classes.secondaryCode}>{"<ROOT_ENDPOINT>"}</span>
            /ocean<span className={classes.secondaryCode}>/:query</span>
            <br />
            <span className={classes.secondaryCode}>{"<ROOT_ENDPOINT>"}</span>
            /glaciers<span className={classes.secondaryCode}>/:query</span>
            <br />
          </code>
        </div>
        <p className={classes.pHead}>Query</p>
        <p className={classes.p}>GET FULL DATASET</p>
        <p className={classes.p}>
          Depending on datasets availaible for chosen FACTOR{" "}
          <span style={{ color: "blue" }}> all available endpoints</span>
          <br />
          <br />
        </p>
        <div className={classes.codeblock}>
          <code className={classes.code}>
            <span className={classes.secondaryCode}>{"<ROOT_ENDPOINT>"}</span>
            <span className={classes.secondaryCode}>/:factor</span> /daily
            <br />
            <span className={classes.secondaryCode}>{"<ROOT_ENDPOINT>"}</span>
            <span className={classes.secondaryCode}>/:factor</span> /monthly
            <br />
            <span className={classes.secondaryCode}>{"<ROOT_ENDPOINT>"}</span>
            <span className={classes.secondaryCode}>/:factor</span> /annual
            <br />
            <span className={classes.secondaryCode}>{"<ROOT_ENDPOINT>"}</span>
            <span className={classes.secondaryCode}>/:factor</span> /annual_ml
            <br />
            <span className={classes.secondaryCode}>{"<ROOT_ENDPOINT>"}</span>
            <span className={classes.secondaryCode}>/:factor</span> /monthly_gl
            <br />
            <span className={classes.secondaryCode}>{"<ROOT_ENDPOINT>"}</span>
            <span className={classes.secondaryCode}>/:factor</span>{" "}
            /for/2012-04-01
            <br />
          </code>
        </div>
        <small>Examlpes:</small>
        <div className={classes.codeblock}>
          <code className={classes.code}>
            <span className={classes.rootEnd}>
              https://climatemonitor.info/api/public/v1
            </span>
            <span className={classes.factor}>/ch4</span>
            <span className={classes.query}>/monthly</span> <br />
            <span className={classes.rootEnd}>
              https://climatemonitor.info/api/public/v1
            </span>
            <span className={classes.factor}>/co2</span>
            <span className={classes.query}>/latest</span> <br />
            <span className={classes.rootEnd}>
              https://climatemonitor.info/api/public/v1
            </span>
            <span className={classes.factor}>/co2</span>
            <span className={classes.query}>/monthly_ml</span> <br />
            <span className={classes.rootEnd}>
              https://climatemonitor.info/api/public/v1
            </span>
            <span className={classes.factor}>/ocean</span>
            <span className={classes.query}>/levels</span> <br />
          </code>
        </div>
        <p className={classes.p}>Lorrenmiuhfdousayfou</p>
        <div className={classes.codeblock}>
          <code className={classes.code}>
            {"{"}
            <br />
          </code>
          <code className={classes.code}>
            <span className={classes.property}>&nbsp;&nbsp;status</span>:
            <span className={classes.string}>"success"</span>,<br />
          </code>
          <code className={classes.code}>
            <span className={classes.property}>&nbsp;&nbsp;data</span>:
            <span>{" {"}</span>
            <br />
          </code>
          <code className={classes.code}>
            <span className={classes.property}>
              &nbsp;&nbsp;&nbsp;&nbsp;label
            </span>
            :<span className={classes.string}>"2012-09-03"</span>,<br />
          </code>
          <code className={classes.code}>
            <span className={classes.property}>
              &nbsp;&nbsp;&nbsp;&nbsp;value
            </span>
            :<span className={classes.number}> 389.43</span>, <br />
          </code>
          <code className={classes.code}>
            <span className={classes.property}>
              &nbsp;&nbsp;&nbsp;&nbsp;unit
            </span>
            :<span className={classes.string}>"ppm"</span>,<br />
          </code>
          <code className={classes.code}>
            &nbsp;&nbsp;{"{"}
            <br />
          </code>
          <code className={classes.code}>
            {"{"}
            <br />
          </code>
        </div>
      </div>
    </>
  )
}

export default PublicAPI
