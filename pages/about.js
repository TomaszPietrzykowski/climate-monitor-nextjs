import React from "react"
import Head from "next/head"

const About = () => {
  return (
    <div style={{ height: "120vh" }}>
      <Head>
        <title key="title">About | Climate Monitor</title>
        <meta
          name="description"
          key="description"
          content="About data sources and Climate Monitor - free public REST API with json data on climate change"
        />
      </Head>
      <div>About</div>
    </div>
  )
}

export default About