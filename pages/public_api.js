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
    fontSize: "1.2rem",
    lineHeight: 1.5,
    color: theme.palette.primary.dark,
  },
  codeblock: {
    width: "min-content",
    padding: "4rem",
    background: "rgba(0,0,0, 0.01)",
    borderRadius: 7,
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
        <p className={classes.pHead}>Why even bother?</p>
        <p className={classes.p}>
          Absolutely all data provided by this API is available on public ftp
          servers. Idea behind climate monitor is simply to deliver desent range
          of useful data in a form of json API, under one - somewhat logically
          structured - endpoint. Data is read from multiple ftp servers, parsed
          into database inputs and delivered in predictable format. Hopefully
          usefull for front-end-only applications.
        </p>
        <p className={classes.p}>
          Public API at climatemonitor.info is free to use without any
          registration. I do my best to keep it up and running but if you
          encounter any problems don't get mad, get involved:{" "}
          <Link href="/contact">
            <a>contact me.</a>
          </Link>
        </p>
        <p className={classes.pHead}>How to use API?</p>
        <p className={classes.p}>
          Simply send a GET request to one of supported endpoints. Endpoints are
          structured like so:
        </p>
        <p className={classes.p}>
          <span>ROOT_ENDPOINT</span>
          <span>/FACTOR</span>
          <span>/QUERY</span>
        </p>
        <br />
        <br />
        <small>Examlpes:</small>
        <div className={classes.codeblock}>
          <code className={classes.code}>
            https://climatemonitor.info/api/public/v1/co2/daily <br />
            https://climatemonitor.info/api/public/v1/co2/monthly <br />
            https://climatemonitor.info/api/public/v1/co2/annual <br />
            https://climatemonitor.info/api/public/v1/co2/for/2019 <br />
            https://climatemonitor.info/api/public/v1/co2/for/20116-04-15 <br />
          </code>
        </div>
        <br />
        <br />
        <div className={classes.codeblock}>
          <pre>
            <code className={classes.code}>
              {`
{
  "status": "success",
  "data": {
    "label": "2012-09-03",
    "value": 389.43,
    "unit": "ppm"
  }
}
                `}
            </code>
          </pre>
        </div>
      </div>
    </>
  )
}

export default PublicAPI
