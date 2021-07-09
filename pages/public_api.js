import React from "react"
import Head from "next/head"
// mui
import { makeStyles } from "@material-ui/core/styles"
// custom
import SectionHeader from "../src/ui/SectionHeader"

const useStyles = makeStyles((theme) => ({
  container: {
    ...theme.utils.container,
    padding: "4rem",
  },
  code: {
    fontSize: "1.4rem",
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
        <h1>Public REST API</h1>
        <br />
        <br />
        <h2>REQUEST STRUCTURE</h2>
        <br />
        <br />
        <h3>GET request to:</h3>
        <code>ROOT ENDPOINT/FACTOR/QUERY</code>
        <br />
        <br />
        <small>Examlpes:</small>
        <pre>
          <code>
            https://climatemonitor.info/api/public/v1/co2/daily <br />
            https://climatemonitor.info/api/public/v1/co2/monthly <br />
            https://climatemonitor.info/api/public/v1/co2/annual <br />
            https://climatemonitor.info/api/public/v1/co2/for/2019 <br />
            https://climatemonitor.info/api/public/v1/co2/for/20116-04-15 <br />
          </code>
        </pre>
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
