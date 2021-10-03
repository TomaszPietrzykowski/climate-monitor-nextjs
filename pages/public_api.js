import React, { useRef } from "react"
import Head from "next/head"
import Link from "next/link"
// mui
import { makeStyles } from "@material-ui/core/styles"
import useScrollTrigger from "@material-ui/core/useScrollTrigger"
// custom
import FloatButton from "../src/components/public_api/FloatButtonAPI"

const useStyles = makeStyles((theme) => ({
  // new styles
  containerTop: {
    width: "100%",
    maxWidth: 1920,
    margin: "6rem auto 0rem",
    display: "grid",
    gridTemplateColumns: "50% 50%",
    fontFamily: "Poppins",
    fontWeight: 300,
  },
  contentContainer: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    width: "100%",
    maxWidth: 700,
    padding: "2rem 6rem 2rem 2rem",
  },
  // imageContainer: {
  //   position: "relative",
  //   "&::before": {
  //     content: "''",
  //     position: "absolute",
  //     top: 30,
  //     left: -30,
  //     height: "100%",
  //     width: "100%",
  //     background: theme.palette.common.orange,
  //     zIndex: -1,
  //     opacity: 0.3,
  //     borderRadius: "4px 0 0 4px",
  //   },
  // },
  image: {
    display: "block",
    maxWidth: "100%",
    // borderRadius: "4px 0 0 4px",
  },
  // new styles end --------------
  container: {
    ...theme.utils.container,
    padding: "0 2rem",
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
    paddingTop: "6rem",
  },
  p: {
    color: theme.palette.text.secondary,
    ...theme.utils.p,
  },
  pHead: {
    fontSize: "1.6rem",
    color: theme.palette.text.primary,
    lineHeight: 1.8,
    letterSpacing: 0.8,
    padding: "4rem 0 0",
  },
  code: {
    fontSize: "1rem",
    lineHeight: 1.8,
    letterSpacing: 1.3,
    color: theme.palette.common.lightestBlue,
  },
  secondaryCode: {
    fontSize: "1rem",
    lineHeight: 1.5,
    color: theme.palette.secondary.light,
  },
  codeblock: {
    width: "max-content",
    padding: "2rem 5rem 2rem 2rem",
    margin: "1rem 0 0",
    background: theme.palette.primary.dark,
    borderRadius: 7,
  },
  codeLine: {
    width: "max-content",
    padding: "1rem 5rem 1rem 2rem",
    margin: "1rem 0",
    background: theme.palette.primary.dark,
    borderRadius: 7,
  },

  //
  // code format colorizer
  //
  rootEnd: {
    color: theme.palette.common.lightestBlue,
  },
  factor: {
    color: theme.palette.common.orange,
  },
  query: {
    color: theme.palette.common.neonBlue,
  },
  property: {
    color: theme.palette.common.lightBlue,
  },
  string: {
    color: theme.palette.common.orange,
  },
  number: {
    color: theme.palette.common.green,
  },
  gridParent: {
    display: "grid",
    gridTemplateColumns: "2fr 1fr",
    border: "1px solid green",
  },
  link: {
    color: theme.palette.primary.main,
    fontWeight: 500,
    textDecoration: "underline",
  },
  section: {
    marginTop: "6rem",
  },
  ref: {
    color: theme.palette.secondary.main,
    fontWeight: 400,
    cursor: "pointer",
    textDecoration: "underline",
  },
  refBig: {
    color: theme.palette.text.secondary,
    fontWeight: 300,
    cursor: "pointer",
    padding: "0.4rem 0",
    width: "max-content",
    "&:hover": {
      color: theme.palette.secondary.main,
      textDecoration: "underline",
    },
  },
  refSmall: {
    color: theme.palette.text.secondary,
    fontWeight: 300,
    cursor: "pointer",
    padding: ".4rem 2rem",
    width: "max-content",
    "&:hover": {
      color: theme.palette.secondary.main,
      textDecoration: "underline",
    },
  },
  refSmallSub: {
    "&:hover": {
      textDecoration: "none",
    },
  },
  scrollPadding: {
    height: "2rem",
  },
}))

const PublicAPI = () => {
  const classes = useStyles()
  const menuRef = useRef(null)
  const endpointsRef = useRef(null)
  const requestRef = useRef(null)
  const responseRef = useRef(null)
  const sf6Ref = useRef(null)
  const n2oRef = useRef(null)
  const ch4Ref = useRef(null)
  const tempRef = useRef(null)
  const glaciersRef = useRef(null)
  const seaRef = useRef(null)

  // float button trigger on scroll
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 1200,
  })

  const scrollToDocs = () =>
    menuRef.current.scrollIntoView({ behavior: "smooth" })

  return (
    <>
      <Head>
        <title key="title">Public climate API | Climate Monitor</title>
      </Head>
      <div className={classes.titleBar}>
        <h1 className={classes.sectionHeader}>Public API</h1>
      </div>
      <div className={classes.containerTop}>
        <div
          className={classes.contentContainer}
          style={{ marginLeft: "auto" }}
        >
          <p className={classes.h2}>Climate data</p>
          <p className={classes.p}>
            There are seven main factors in focus. Four atmospheric greenhouse
            gases: carbon dioxide (co2), methane (ch4), sulfur hexafluoride
            (sf6), dinitrogen oxide (n2o), global temperatures, global ocean
            levels and finally condition of Greenland's and Antarctica's
            glaciers. Within each of the factors you will find multiple sets of
            data, usually based on data scope: monthly, weekly or annual data,
            some datasets are available for global values and values calculated
            for Mauna Loa Observatory Hawaii separately.
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
        </div>
        <div className={classes.imageContainer}>
          <img src="/desert.jpeg" className={classes.image} />
        </div>
      </div>
      <div className={classes.container} ref={menuRef}>
        <section className={classes.section}>
          <p className={classes.h2}>Documentation</p>
          <br />
          <br />
          <p
            className={classes.refBig}
            onClick={() =>
              requestRef.current.scrollIntoView({ behavior: "smooth" })
            }
          >
            Request
          </p>
          <p
            className={classes.refBig}
            onClick={() =>
              responseRef.current.scrollIntoView({ behavior: "smooth" })
            }
          >
            Response
          </p>
          <p
            className={classes.refBig}
            onClick={() =>
              endpointsRef.current.scrollIntoView({ behavior: "smooth" })
            }
          >
            Endpoints:
          </p>
          <p
            className={classes.refSmall}
            onClick={() =>
              endpointsRef.current.scrollIntoView({
                behavior: "smooth",
              })
            }
          >
            carbon dioxide CO<sub>2</sub>
          </p>
          <p
            className={classes.refSmall}
            onClick={() =>
              ch4Ref.current.scrollIntoView({ behavior: "smooth" })
            }
          >
            methane CH<sub>4</sub>
          </p>
          <p
            className={classes.refSmall}
            onClick={() =>
              sf6Ref.current.scrollIntoView({ behavior: "smooth" })
            }
          >
            sulfur hexafluoride SF<sub>6</sub>
          </p>
          <p
            className={classes.refSmall}
            onClick={() =>
              n2oRef.current.scrollIntoView({ behavior: "smooth" })
            }
          >
            nitrous oxide N<sub>2</sub>O
          </p>

          <p
            className={classes.refSmall}
            onClick={() =>
              seaRef.current.scrollIntoView({ behavior: "smooth" })
            }
          >
            sea levels
          </p>
          <p
            className={classes.refSmall}
            onClick={() =>
              glaciersRef.current.scrollIntoView({ behavior: "smooth" })
            }
          >
            glaciers
          </p>
          <p
            className={classes.refSmall}
            onClick={() =>
              tempRef.current.scrollIntoView({ behavior: "smooth" })
            }
          >
            temperatures
          </p>
        </section>
        <section className={classes.section} ref={requestRef}>
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
            After significan updates new endpoints will be introduced. For sake
            of dependant applications all legacy endpoints will be maintained.
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
              /temperatures
              <span className={classes.secondaryCode}>/:query</span>
              <br />
              <span className={classes.secondaryCode}>{"<ROOT_ENDPOINT>"}</span>
              /ocean<span className={classes.secondaryCode}>/:query</span>
              <br />
              <span className={classes.secondaryCode}>{"<ROOT_ENDPOINT>"}</span>
              /glaciers<span className={classes.secondaryCode}>/:query</span>
              <br />
            </code>
          </div>
          <p className={classes.pHead}>Query - get full dataset</p>
          <p className={classes.p}>
            Depending on datasets availaible for chosen FACTOR{" "}
            <span
              className={classes.ref}
              onClick={() =>
                endpointsRef.current.scrollIntoView({ behavior: "smooth" })
              }
            >
              {" "}
              all available endpoints
            </span>
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
              <span className={classes.secondaryCode}>/:factor</span>{" "}
              /monthly_gl
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
          <p className={classes.pHead}>Query - get single value</p>
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
          <p className={classes.p}>daily value:</p>
          <div className={classes.codeLine}>
            <code className={classes.code}>
              /for/YYYY-MM-DD
              <br />
            </code>
          </div>
          <p className={classes.p}>monthly average:</p>
          <div className={classes.codeLine}>
            <code className={classes.code}>
              /for/YYYY-MM
              <br />
            </code>
          </div>
          <p className={classes.p}>annual average:</p>
          <div className={classes.codeLine}>
            <code className={classes.code}>
              /for/YYYY
              <br />
            </code>
          </div>

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
        </section>
        <section className={classes.section} ref={responseRef}>
          <p className={classes.h2}>Response structure</p>
          <p className={classes.p}>
            Response from API is provided in JSend format with possible
            outcomes: success, fail and error.
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
              :<span className={classes.code}>{" ["}</span>
              <br />
            </code>

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
              :
              <span className={classes.string}>
                {" "}
                "2021-07-24T18:24:25.789Z"
              </span>
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
              <span className={classes.string}>"Internal server error ;)"</span>
              ,
              <br />
            </code>
            <code className={classes.code}>
              {"}"}
              <br />
            </code>
          </div>
          <br />
        </section>
        <section className={classes.section} ref={endpointsRef}>
          <p className={classes.h2}>All availaible endpoints</p>
          <p className={classes.pHead}>
            Earth atmospheric CO<sub>2</sub>
          </p>

          <p className={classes.p}>
            Latest available daily CO<sub>2</sub> reading from Mauna Loa
            Observatory, Hawaii:
          </p>
          <div className={classes.codeLine}>
            <code className={classes.code}>
              https://climatemonitor.info/api/public/v1/co2/latest
            </code>
          </div>

          <p className={classes.p}>
            Earth daily CO<sub>2</sub>:
          </p>
          <div className={classes.codeLine}>
            <code className={classes.code}>
              https://climatemonitor.info/api/public/v1/co2/daily
            </code>
          </div>

          <p className={classes.p}>
            Earth CO<sub>2</sub> weekly average from Mauna Loa Observatory,
            Hawaii:
          </p>
          <div className={classes.codeLine}>
            <code className={classes.code}>
              https://climatemonitor.info/api/public/v1/co2/weekly_ml
            </code>
          </div>

          <p className={classes.p}>
            Earth CO<sub>2</sub> weekly global average:
          </p>
          <div className={classes.codeLine}>
            <code className={classes.code}>
              https://climatemonitor.info/api/public/v1/co2/weekly_gl
            </code>
          </div>

          <p className={classes.p}>
            Earth CO<sub>2</sub> monthly average from Mauna Loa Observatory,
            Hawaii:
          </p>
          <div className={classes.codeLine}>
            <code className={classes.code}>
              https://climatemonitor.info/api/public/v1/co2/monthly_ml
            </code>
          </div>

          <p className={classes.p}>
            Earth CO<sub>2</sub> monthly global average:
          </p>
          <div className={classes.codeLine}>
            <code className={classes.code}>
              https://climatemonitor.info/api/public/v1/co2/monthly_gl
            </code>
          </div>

          <p className={classes.p}>
            Earth CO<sub>2</sub> annual global average:
          </p>
          <div className={classes.codeLine}>
            <code className={classes.code}>
              https://climatemonitor.info/api/public/v1/co2/annual_gl
            </code>
          </div>

          <p className={classes.p}>
            Earth CO<sub>2</sub> annual average from Mauna Loa Observatory,
            Hawaii:
          </p>
          <div className={classes.codeLine}>
            <code className={classes.code}>
              https://climatemonitor.info/api/public/v1/co2/annual_ml
            </code>
          </div>

          <p className={classes.p}>
            Annual global CO<sub>2</sub> increase:
          </p>
          <div className={classes.codeLine}>
            <code className={classes.code}>
              https://climatemonitor.info/api/public/v1/co2/increase_gl
            </code>
          </div>

          <p className={classes.p}>
            Annual CO<sub>2</sub> increase, Mauna Loa Observatory, Hawaii:
          </p>
          <div className={classes.codeLine}>
            <code className={classes.code}>
              https://climatemonitor.info/api/public/v1/co2/increase_ml
            </code>
          </div>

          <p className={classes.p}>
            Earth CO<sub>2</sub> reading for the date:
          </p>
          <div className={classes.codeLine}>
            <code className={classes.code}>
              https://climatemonitor.info/api/public/v1/co2/for/2016-04-10
            </code>
          </div>

          <p className={classes.p}>
            Earth CO<sub>2</sub> monthly average:
          </p>
          <div className={classes.codeLine}>
            <code className={classes.code}>
              https://climatemonitor.info/api/public/v1/co2/for/2016-04
            </code>
          </div>

          <p className={classes.p}>
            Earth CO<sub>2</sub> annaul average:
          </p>
          <div className={classes.codeLine}>
            <code className={classes.code}>
              https://climatemonitor.info/api/public/v1/co2/for/2016
            </code>
          </div>
          <div className={classes.scrollPadding} ref={ch4Ref} />
          <p className={classes.pHead}>
            Earth atmospheric methane CH<sub>4</sub>
          </p>

          <p className={classes.p}>
            Monthly global atmospheric CH<sub>4</sub>:
          </p>
          <div className={classes.codeLine}>
            <code className={classes.code}>
              https://climatemonitor.info/api/public/v1/ch4/monthly
            </code>
          </div>

          <p className={classes.p}>
            Annual global atmospheric CH<sub>4</sub>:
          </p>
          <div className={classes.codeLine}>
            <code className={classes.code}>
              https://climatemonitor.info/api/public/v1/ch4/annual
            </code>
          </div>

          <p className={classes.p}>
            Annual atmospheric CH<sub>4</sub> growth rate:
          </p>
          <div className={classes.codeLine}>
            <code className={classes.code}>
              https://climatemonitor.info/api/public/v1/ch4/growth
            </code>
          </div>
          <div className={classes.scrollPadding} ref={sf6Ref} />
          <p className={classes.pHead}>
            Earth atmospheric sulfur hexafluoride SF<sub>6</sub>
          </p>

          <p className={classes.p}>
            Monthly global atmospheric SF<sub>6</sub>:
          </p>
          <div className={classes.codeLine}>
            <code className={classes.code}>
              https://climatemonitor.info/api/public/v1//sf6/monthly
            </code>
          </div>

          <p className={classes.p}>
            Annual global atmospheric SF<sub>6</sub>:
          </p>
          <div className={classes.codeLine}>
            <code className={classes.code}>
              https://climatemonitor.info/api/public/v1/sf6/annual
            </code>
          </div>

          <p className={classes.p}>
            Annual atmospheric SF<sub>6</sub> growth rate:
          </p>
          <div className={classes.codeLine}>
            <code className={classes.code}>
              https://climatemonitor.info/api/public/v1/sf6/growth
            </code>
          </div>
          <div className={classes.scrollPadding} ref={n2oRef} />
          <p className={classes.pHead}>
            Earth atmospheric dinitrogen oxide N<sub>2</sub>0
          </p>

          <p className={classes.p}>
            Monthly global atmospheric N<sub>2</sub>0:
          </p>
          <div className={classes.codeLine}>
            <code className={classes.code}>
              https://climatemonitor.info/api/public/v1/n2o/monthly
            </code>
          </div>

          <p className={classes.p}>
            Annual global atmospheric N<sub>2</sub>0:
          </p>
          <div className={classes.codeLine}>
            <code className={classes.code}>
              https://climatemonitor.info/api/public/v1/n2o/annual
            </code>
          </div>

          <p className={classes.p}>
            Annual atmospheric N<sub>2</sub>0 growth rate:
          </p>
          <div className={classes.codeLine}>
            <code className={classes.code}>
              https://climatemonitor.info/api/public/v1/n2o/growth
            </code>
          </div>
          <div className={classes.scrollPadding} ref={seaRef} />
          <p className={classes.pHead}>Global ocean levels</p>

          <p className={classes.p}>Global ocean mass:</p>
          <div className={classes.codeLine}>
            <code className={classes.code}>
              https://climatemonitor.info/api/public/v1/ocean/mass
            </code>
          </div>

          <p className={classes.p}>Ocean level variation:</p>
          <div className={classes.codeLine}>
            <code className={classes.code}>
              https://climatemonitor.info/api/public/v1/ocean/level
            </code>
          </div>
          <div className={classes.scrollPadding} ref={glaciersRef} />
          <p className={classes.pHead}>Arctica and Antarctica mass loss</p>

          <p className={classes.p}>Antarctica ice mass:</p>
          <div className={classes.codeLine}>
            <code className={classes.code}>
              https://climatemonitor.info/api/public/v1/glaciers/antarctica
            </code>
          </div>

          <p className={classes.p}>Greenland ice mass:</p>
          <div className={classes.codeLine}>
            <code className={classes.code}>
              https://climatemonitor.info/api/public/v1/glaciers/greenland
            </code>
          </div>
          <div className={classes.scrollPadding} ref={tempRef} />
          <p className={classes.pHead}>Temperatures</p>

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

          <p className={classes.p}>
            Annual land and ocean combined temperature anomaly:
          </p>
          <div className={classes.codeLine}>
            <code className={classes.code}>
              https://climatemonitor.info/api/public/v1/temp/annual_anomaly_loc
            </code>
          </div>

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

          <p className={classes.p}>
            Monthly land and ocean combined temperature anomaly:
          </p>
          <div className={classes.codeLine}>
            <code className={classes.code}>
              https://climatemonitor.info/api/public/v1/temp/monthly_anomaly_loc
            </code>
          </div>

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
        </section>
      </div>
      {trigger && <FloatButton cb={scrollToDocs} />}
    </>
  )
}

export default PublicAPI
