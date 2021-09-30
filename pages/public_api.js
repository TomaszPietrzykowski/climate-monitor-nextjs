import React from "react"
import Head from "next/head"
import Link from "next/link"
// mui
import { makeStyles } from "@material-ui/core/styles"

const useStyles = makeStyles((theme) => ({
  container: {
    ...theme.utils.container,
    padding: "2rem",
    fontFamily: "Poppins",
    fontWeight: 300,
  },
  sectionHeader: {
    fontFamily: "Poppins",
    fontWeight: 400,
    color: theme.palette.secondary.main,
    fontSize: "4rem",
    maxWidth: 1400,
    margin: "auto",
    marginTop: "6rem",
    marginBottom: "2rem",
    padding: "1rem 2rem",
    // borderBottom: `2px solid ${theme.palette.common.lightestBlue}`,
    [theme.breakpoints.down("md")]: {
      marginLeft: 20,
    },
    position: "relative",
    "&::before": {
      content: "'PublicAPI'",
      position: "absolute",
      bottom: -45,
      left: -50,
      fontSize: "10rem",
      opacity: 0.04,
      whiteSpace: "nowrap",
      color: theme.palette.secondary.light,
    },
  },
  h2: {
    color: theme.palette.secondary.main,
    fontWeight: 300,
    letterSpacing: 1.5,
    fontSize: "2rem",
    marginBottom: "2rem",
  },
  p: {
    color: theme.palette.text.secondary,
    lineHeight: 1.8,
    padding: "1rem 0 0",
  },
  pHead: {
    fontSize: "1.4rem",
    color: theme.palette.text.primary,
    lineHeight: 1.8,
    letterSpacing: 0.8,
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
    margin: "1rem 0 0",
    background: "#001a33",
    borderRadius: 7,
  },
  codeLine: {
    width: "max-content",
    padding: "1rem 5rem 1rem 2rem",
    margin: "1rem 0 0",
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
    color: theme.palette.primary.main,
    fontWeight: 500,
    textDecoration: "underline",
  },
}))

const PublicAPI = () => {
  const classes = useStyles()
  return (
    <>
      <Head>
        <title key="title">Public climate API | Climate Monitor</title>
      </Head>
      <div className={classes.titleBar}>
        <h1 className={classes.sectionHeader}>Public API</h1>
      </div>
      <div className={classes.container}>
        {/* <h2 className={classes.h2}>Latest and historical climate data</h2> */}
        <p className={classes.h2}>Climate data</p>
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
        <p className={classes.p}>
          Data is read from ftp servers or obtained within a NASA's EarthData
          program, parsed and saved into database for unlimited access. Update
          schedule runs in relation to data scope and source data update
          schedule. That ensures both: that values are up to date and that no
          excessive traffic is generated at the source.
        </p>
        <p className={classes.p}>
          <Link href="/about">
            <a className={classes.link}>More on data</a>
          </Link>
        </p>
        <p className={classes.h2}>Request structure</p>
        <p className={classes.p}>
          Send a GET request to one of supported endpoints. Endpoints are
          structured like so:
        </p>
        <div className={classes.codeLine}>
          <code className={classes.code}>
            <span className={classes.rootEnd}>{" <ROOT_ENDPOINT> "}</span>
            <span className={classes.factor}>/ :factor </span>
            <span className={classes.query}>/ :query</span> <br />
          </code>
        </div>
        <br />
        <small>Examples:</small>
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
        <div className={classes.codeLine}>
          <code className={classes.code}>
            https://climatemonitor.info/api/public/v1 <br />
          </code>
        </div>
        <p className={classes.p}>
          After significan updates new endpoints will be introduced. For sake of
          dependant applications all legacy endpoints will be maintained.
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
        <p className={classes.pHead}>GET FULL DATASET</p>
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
          </code>
        </div>
        <small>Examples:</small>
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
        <p className={classes.pHead}>GET SINGLE VALUE</p>
        <br />
        <p className={classes.p}>Query structure:</p>
        <div className={classes.codeLine}>
          <code className={classes.code}>
            {"/for/<DATE>"}
            <br />
          </code>
        </div>
        <br />
        <p className={classes.p}>Depending on availaible datasets:</p>
        <br />
        <div className={classes.codeLine}>
          <code className={classes.code}>
            /for/YYYY-MM-DD
            <br />
          </code>
        </div>
        <p className={classes.p}>will return daily value.</p> <br />
        <div className={classes.codeLine}>
          <code className={classes.code}>
            /for/YYYY-MM
            <br />
          </code>
        </div>
        <p className={classes.p}>will return monthly average.</p> <br />
        <div className={classes.codeLine}>
          <code className={classes.code}>
            /for/YYYY
            <br />
          </code>
        </div>
        <p className={classes.p}>will return annual average.</p> <br />
        <small>Examples:</small>
        <div className={classes.codeblock}>
          <code className={classes.code}>
            <span className={classes.rootEnd}>
              https://climatemonitor.info/api/public/v1
            </span>
            <span className={classes.factor}>/co2</span>
            <span className={classes.query}>/for/2018-05-12</span> <br />
            <span className={classes.rootEnd}>
              https://climatemonitor.info/api/public/v1
            </span>
            <span className={classes.factor}>/co2</span>
            <span className={classes.query}>/for/2012</span> <br />
          </code>
        </div>
        <br />
        <br />
        <hr />
        <p className={classes.h2}>Response structure</p>
        <p className={classes.p}>
          Response from API is provided in JSend format with possible outcomes:
          success, fail and error.
        </p>
        <p className={classes.pHead}>Success response</p>
        <p className={classes.p}>
          Requested data is always provided in <code> data </code> object
        </p>
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
            &nbsp;&nbsp;{"}"}
            <br />
          </code>
          <code className={classes.code}>
            {"}"}
            <br />
          </code>
        </div>
        <br />
        <p className={classes.p}>Response containing full dataset:</p>
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
              &nbsp;&nbsp;&nbsp;&nbsp;title
            </span>
            :
            <span className={classes.string}>
              "Annual co2 Mauna Loa Observatory"
            </span>
            ,<br />
            <span className={classes.property}>
              &nbsp;&nbsp;&nbsp;&nbsp;description
            </span>
            :
            <span className={classes.string}>
              "Annual mean atmospheric carbon dioxide, expressed..."
            </span>
            ,<br />
          </code>
          <code className={classes.code}>
            <span className={classes.property}>
              &nbsp;&nbsp;&nbsp;&nbsp;readings
            </span>
            :<span className={classes.number}>{" ["}</span>
            <br />
          </code>
          {/* ---------------------------------------------------------------------
           */}
          <code className={classes.code}>
            <span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{"{"}</span>
            <br />
          </code>
          <code className={classes.code}>
            <span className={classes.property}>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;label
            </span>
            :<span className={classes.string}>"2010-01-01"</span>,<br />
          </code>
          <code className={classes.code}>
            <span className={classes.property}>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;value
            </span>
            :<span className={classes.number}> 389.43</span>, <br />
          </code>
          <code className={classes.code}>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{"},"}
            <br />
          </code>
          <br />
          <code className={classes.code}>
            &nbsp;&nbsp;&nbsp;&nbsp;{"// full dataset (...)"}
            <br />
          </code>
          <br />
          <code className={classes.code}>
            <span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{"{"}</span>
            <br />
          </code>
          <code className={classes.code}>
            <span className={classes.property}>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;label
            </span>
            :<span className={classes.string}>"2021-07-23"</span>,<br />
          </code>
          <code className={classes.code}>
            <span className={classes.property}>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;value
            </span>
            :<span className={classes.number}> 416.43</span>, <br />
          </code>
          <code className={classes.code}>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{"},"}
            <br />
          </code>
          <code className={classes.code}>
            &nbsp;&nbsp;&nbsp;&nbsp;{"],"}
            <br />
          </code>
          <code className={classes.code}>
            <span className={classes.property}>
              &nbsp;&nbsp;&nbsp;&nbsp;unit
            </span>
            :<span className={classes.string}> "ppm"</span>,<br />
          </code>
          <code className={classes.code}>
            <span className={classes.property}>
              &nbsp;&nbsp;&nbsp;&nbsp;lastUpdate
            </span>
            :<span className={classes.string}> "2021-07-24T18:24:25.789Z"</span>
            ,
            <br />
          </code>
          <code className={classes.code}>
            &nbsp;&nbsp;{"}"}
            <br />
          </code>
          <code className={classes.code}>
            {"}"}
            <br />
          </code>
        </div>
        <br />
        {/* -------------------------------------- */}
        <p className={classes.pHead}>Fail response</p>
        <p className={classes.p}>
          Response status 4xx, client-side errors, e.g. invalid request:
        </p>
        <div className={classes.codeblock}>
          <code className={classes.code}>
            {"{"}
            <br />
          </code>
          <code className={classes.code}>
            <span className={classes.property}>&nbsp;&nbsp;status</span>:
            <span className={classes.string}>"fail"</span>,<br />
          </code>
          <code className={classes.code}>
            <span className={classes.property}>&nbsp;&nbsp;message</span>:
            <span className={classes.string}>
              "Requested date is outside of dataset scope: 2011-01-01 -
              2021-04-26"
            </span>
            ,<br />
          </code>
          <code className={classes.code}>
            {"}"}
            <br />
          </code>
        </div>
        <br />
        {/* -------------------------------------- */}
        <p className={classes.pHead}>Error response</p>
        <p className={classes.p}>Response status 5xx, server-side errors:</p>
        <div className={classes.codeblock}>
          <code className={classes.code}>
            {"{"}
            <br />
          </code>
          <code className={classes.code}>
            <span className={classes.property}>&nbsp;&nbsp;status</span>:
            <span className={classes.string}>"error"</span>,<br />
          </code>
          <code className={classes.code}>
            <span className={classes.property}>&nbsp;&nbsp;message</span>:
            <span className={classes.string}>"Internal server error ;)"</span>,
            <br />
          </code>
          <code className={classes.code}>
            {"}"}
            <br />
          </code>
        </div>
        <br />
        {/* -------------------------------------- */}
        <br />
        <br />
        <hr />
        <p className={classes.h2}>All availaible endpoints</p>
        <p className={classes.pHead}>
          Earth atmospheric CO<sub>2</sub>
        </p>
        <br />
        <p className={classes.p}>
          Latest available daily CO<sub>2</sub> reading from Mauna Loa
          Observatory, Hawaii:
        </p>
        <div className={classes.codeLine}>
          <code className={classes.code}>
            https://climatemonitor.info/api/public/v1/co2/latest
          </code>
        </div>
        <br />
        <p className={classes.p}>
          Earth daily CO<sub>2</sub>:
        </p>
        <div className={classes.codeLine}>
          <code className={classes.code}>
            https://climatemonitor.info/api/public/v1/co2/daily
          </code>
        </div>
        <br />
        <p className={classes.p}>
          Earth CO<sub>2</sub> weekly average from Mauna Loa Observatory,
          Hawaii:
        </p>
        <div className={classes.codeLine}>
          <code className={classes.code}>
            https://climatemonitor.info/api/public/v1/co2/weekly_ml
          </code>
        </div>
        <br />
        <p className={classes.p}>
          Earth CO<sub>2</sub> weekly global average:
        </p>
        <div className={classes.codeLine}>
          <code className={classes.code}>
            https://climatemonitor.info/api/public/v1/co2/weekly_gl
          </code>
        </div>
        <br />
        <p className={classes.p}>
          Earth CO<sub>2</sub> monthly average from Mauna Loa Observatory,
          Hawaii:
        </p>
        <div className={classes.codeLine}>
          <code className={classes.code}>
            https://climatemonitor.info/api/public/v1/co2/monthly_ml
          </code>
        </div>
        <br />
        <p className={classes.p}>
          Earth CO<sub>2</sub> monthly global average:
        </p>
        <div className={classes.codeLine}>
          <code className={classes.code}>
            https://climatemonitor.info/api/public/v1/co2/monthly_gl
          </code>
        </div>
        <br />
        <p className={classes.p}>
          Earth CO<sub>2</sub> annual global average:
        </p>
        <div className={classes.codeLine}>
          <code className={classes.code}>
            https://climatemonitor.info/api/public/v1/co2/annual_gl
          </code>
        </div>
        <br />
        <p className={classes.p}>
          Earth CO<sub>2</sub> annual average from Mauna Loa Observatory,
          Hawaii:
        </p>
        <div className={classes.codeLine}>
          <code className={classes.code}>
            https://climatemonitor.info/api/public/v1/co2/annual_ml
          </code>
        </div>
        <br />
        <p className={classes.p}>
          Annual global CO<sub>2</sub> increase:
        </p>
        <div className={classes.codeLine}>
          <code className={classes.code}>
            https://climatemonitor.info/api/public/v1/co2/increase_gl
          </code>
        </div>
        <br />
        <p className={classes.p}>
          Annual CO<sub>2</sub> increase, Mauna Loa Observatory, Hawaii:
        </p>
        <div className={classes.codeLine}>
          <code className={classes.code}>
            https://climatemonitor.info/api/public/v1/co2/increase_ml
          </code>
        </div>
        <br />
        <p className={classes.p}>
          Earth CO<sub>2</sub> reading for the date (data scope: todo):
        </p>
        <div className={classes.codeLine}>
          <code className={classes.code}>
            https://climatemonitor.info/api/public/v1/co2/for/2016-04-10
          </code>
        </div>
        <br />
        <p className={classes.p}>
          Earth CO<sub>2</sub> monthly average (data scope: todo):
        </p>
        <div className={classes.codeLine}>
          <code className={classes.code}>
            https://climatemonitor.info/api/public/v1/co2/for/2016-04
          </code>
        </div>
        <br />
        <p className={classes.p}>
          Earth CO<sub>2</sub> annaul average (data scope: todo):
        </p>
        <div className={classes.codeLine}>
          <code className={classes.code}>
            https://climatemonitor.info/api/public/v1/co2/for/2016
          </code>
        </div>
        <br />
        {/* -------------------------------------- */}
        <br />
        <hr />
        <p className={classes.pHead}>
          Earth atmospheric methane CH<sub>4</sub>
        </p>
        <br />
        <p className={classes.p}>
          Monthly global atmospheric CH<sub>4</sub>:
        </p>
        <div className={classes.codeLine}>
          <code className={classes.code}>
            https://climatemonitor.info/api/public/v1/ch4/monthly
          </code>
        </div>
        <br />
        <p className={classes.p}>
          Annual global atmospheric CH<sub>4</sub>:
        </p>
        <div className={classes.codeLine}>
          <code className={classes.code}>
            https://climatemonitor.info/api/public/v1/ch4/annual
          </code>
        </div>
        <br />
        <p className={classes.p}>
          Annual atmospheric CH<sub>4</sub> growth rate:
        </p>
        <div className={classes.codeLine}>
          <code className={classes.code}>
            https://climatemonitor.info/api/public/v1/ch4/growth
          </code>
        </div>
        <br />
        {/* -------------------------------------- */}
        <br />
        <hr />
        <p className={classes.pHead}>
          Earth atmospheric sulfur hexafluoride SF<sub>6</sub>
        </p>
        <br />
        <p className={classes.p}>
          Monthly global atmospheric SF<sub>6</sub>:
        </p>
        <div className={classes.codeLine}>
          <code className={classes.code}>
            https://climatemonitor.info/api/public/v1//sf6/monthly
          </code>
        </div>
        <br />
        <p className={classes.p}>
          Annual global atmospheric SF<sub>6</sub>:
        </p>
        <div className={classes.codeLine}>
          <code className={classes.code}>
            https://climatemonitor.info/api/public/v1/sf6/annual
          </code>
        </div>
        <br />
        <p className={classes.p}>
          Annual atmospheric SF<sub>6</sub> growth rate:
        </p>
        <div className={classes.codeLine}>
          <code className={classes.code}>
            https://climatemonitor.info/api/public/v1/sf6/growth
          </code>
        </div>
        <br />
        {/* -------------------------------------- */}
        <br />
        <hr />
        <p className={classes.pHead}>
          Earth atmospheric dinitrogen oxide N<sub>2</sub>0
        </p>
        <br />
        <p className={classes.p}>
          Monthly global atmospheric N<sub>2</sub>0:
        </p>
        <div className={classes.codeLine}>
          <code className={classes.code}>
            https://climatemonitor.info/api/public/v1/n2o/monthly
          </code>
        </div>
        <br />
        <p className={classes.p}>
          Annual global atmospheric N<sub>2</sub>0:
        </p>
        <div className={classes.codeLine}>
          <code className={classes.code}>
            https://climatemonitor.info/api/public/v1/n2o/annual
          </code>
        </div>
        <br />
        <p className={classes.p}>
          Annual atmospheric N<sub>2</sub>0 growth rate:
        </p>
        <div className={classes.codeLine}>
          <code className={classes.code}>
            https://climatemonitor.info/api/public/v1/n2o/growth
          </code>
        </div>
        <br />
        {/* -------------------------------------- */}
        {/* -------------------------------------- */}
        <br />
        <hr />
        <p className={classes.pHead}>Global ocean levels</p>
        <br />
        <p className={classes.p}>Global ocean mass:</p>
        <div className={classes.codeLine}>
          <code className={classes.code}>
            https://climatemonitor.info/api/public/v1/ocean/mass
          </code>
        </div>
        <br />
        <p className={classes.p}>Ocean level variation:</p>
        <div className={classes.codeLine}>
          <code className={classes.code}>
            https://climatemonitor.info/api/public/v1/ocean/level
          </code>
        </div>
        <br />
        {/* -------------------------------------- */}
        <br />
        <hr />
        <p className={classes.pHead}>Arctica and Antarctica mass loss</p>
        <br />
        <p className={classes.p}>Antarctica ice mass:</p>
        <div className={classes.codeLine}>
          <code className={classes.code}>
            https://climatemonitor.info/api/public/v1/glaciers/antarctica
          </code>
        </div>
        <br />
        <p className={classes.p}>Greenland ice mass:</p>
        <div className={classes.codeLine}>
          <code className={classes.code}>
            https://climatemonitor.info/api/public/v1/glaciers/greenland
          </code>
        </div>
        <br />
        {/* -------------------------------------- */}
        <br />
        <hr />
        <p className={classes.pHead}>Temperatures</p>
        <br />
        <p className={classes.p}>
          Average annual land surface temperature anomaly:
        </p>
        <div className={classes.codeLine}>
          <code className={classes.code}>
            https://climatemonitor.info/api/public/v1/temp/annual_anomaly_min
          </code>
        </div>
        <div className={classes.codeLine}>
          <code className={classes.code}>
            https://climatemonitor.info/api/public/v1/temp/annual_anomaly_avg
          </code>
        </div>
        <div className={classes.codeLine}>
          <code className={classes.code}>
            https://climatemonitor.info/api/public/v1/temp/annual_anomaly_max
          </code>
        </div>
        <br />
        <p className={classes.p}>
          Annual land and ocean combined temperature anomaly:
        </p>
        <div className={classes.codeLine}>
          <code className={classes.code}>
            https://climatemonitor.info/api/public/v1/temp/annual_anomaly_loc
          </code>
        </div>
        <br />
        <br />
        <p className={classes.p}>
          Average monthly land surface temperature anomaly:
        </p>
        <div className={classes.codeLine}>
          <code className={classes.code}>
            https://climatemonitor.info/api/public/v1/temp/monthly_anomaly_min
          </code>
        </div>
        <div className={classes.codeLine}>
          <code className={classes.code}>
            https://climatemonitor.info/api/public/v1/temp/monthly_anomaly_avg
          </code>
        </div>
        <div className={classes.codeLine}>
          <code className={classes.code}>
            https://climatemonitor.info/api/public/v1/temp/monthly_anomaly_max
          </code>
        </div>
        <br />
        <p className={classes.p}>
          Monthly land and ocean combined temperature anomaly:
        </p>
        <div className={classes.codeLine}>
          <code className={classes.code}>
            https://climatemonitor.info/api/public/v1/temp/monthly_anomaly_loc
          </code>
        </div>
        <br />
        <br />
        <p className={classes.p}>
          Average daily land surface temperature anomaly (last ten years):
        </p>
        <div className={classes.codeLine}>
          <code className={classes.code}>
            https://climatemonitor.info/api/public/v1/temp/daily_min
          </code>
        </div>
        <div className={classes.codeLine}>
          <code className={classes.code}>
            https://climatemonitor.info/api/public/v1/temp/daily_avg
          </code>
        </div>
        <div className={classes.codeLine}>
          <code className={classes.code}>
            https://climatemonitor.info/api/public/v1/temp/daily_max
          </code>
        </div>
        <br />
        {/* -------------------------------------- */}
      </div>
    </>
  )
}

export default PublicAPI
