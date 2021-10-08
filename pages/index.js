import React, { Fragment } from "react"

import Hero from "../src/components/home/Hero"
import LatestReadings from "../src/components/home/LatestReadings"
import Description from "../src/components/home/Description"
import Amazon from "../src/components/home/Amazon"
import GetInvolved from "../src/components/home/GetInvolved"

const Index = () => {
  return (
    <Fragment>
      <Hero />
      <LatestReadings />
      <Amazon />
      <Description />
      <GetInvolved />
    </Fragment>
  )
}

export default Index
