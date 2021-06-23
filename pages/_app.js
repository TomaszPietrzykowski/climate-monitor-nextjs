import React, { useState } from "react"
import PropTypes from "prop-types"
import Head from "next/head"
import { ThemeProvider } from "@material-ui/core/styles"
import theme from "../src/ui/Theme"
import Header from "../src/ui/Header"
import Footer from "../src/ui/Footer"
import "../src/styles/globals.css"

export default function MyApp(props) {
  const { Component, pageProps } = props
  const [value, setValue] = useState(0)

  React.useEffect(() => {
    // Remove the server-side injected CSS.
    const jssStyles = document.querySelector("#jss-server-side")
    if (jssStyles) {
      jssStyles.parentElement.removeChild(jssStyles)
    }
  }, [])

  return (
    <React.Fragment>
      <Head>
        <title key="title">Climate Monitor | Home</title>
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width"
        />
        <meta
          name="description"
          key="description"
          content="Free public climate REST API. Json data on earth atmospheric co2, other greenhouse gases, sea levels, land/sea temperatures and melting glaciers. Latest and historical climate data just miliseconds away"
        />
      </Head>
      <ThemeProvider theme={theme}>
        <Header setValue={setValue} value={value} />
        <Component {...pageProps} setValue={setValue} value={value} />
        <Footer setValue={setValue} value={value} />
      </ThemeProvider>
    </React.Fragment>
  )
}

MyApp.propTypes = {
  Component: PropTypes.elementType.isRequired,
  pageProps: PropTypes.object.isRequired,
}
