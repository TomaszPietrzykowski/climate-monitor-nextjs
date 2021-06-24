import React from "react"
import Head from "next/head"

const Contact = () => {
  return (
    <div style={{ height: "120vh" }}>
      <Head>
        <title key="title">Contact Us | Climate Monitor</title>
        <meta
          name="description"
          key="description"
          content="Contact us at Climate Monitor - free public REST API with json data on climate change."
        />
      </Head>
      <div>Contact</div>
    </div>
  )
}

export default Contact
