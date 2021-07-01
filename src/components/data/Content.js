import React, { useState } from "react"
import { makeStyles } from "@material-ui/core/styles"

import Chart from "./Chart"
import RangeSlider from "./RangeSlider"

const useStyles = makeStyles((theme) => ({
  contentContainer: {
    display: "flex",
    flexDirection: "column",
  },
  title: {
    padding: "5rem",
    fontFamily: "Poppins",
    paddingBottom: "1rem",
    fontWeight: 400,
    color: theme.palette.text.primary,
    fontSize: "1.6rem",
    [theme.breakpoints.down("md")]: {
      padding: "3rem",
      paddingBottom: 0,
      paddingLeft: 36,
    },
    [theme.breakpoints.down("sm")]: {
      fontSize: "1.2rem",
      paddingRight: "1rem",
    },
    [theme.breakpoints.down("xs")]: {
      fontSize: "1rem",
    },
  },
  sliderLabel: {
    padding: "0rem 3rem 0.5rem 5rem",
    fontFamily: "Poppins",
    fontWeight: 400,
    color: theme.palette.text.primary,
    fontSize: "1rem",
    [theme.breakpoints.down("md")]: {
      padding: "0rem 3rem 1rem 3rem",
      paddingLeft: 36,
      fontSize: ".9rem",
    },
    [theme.breakpoints.down("sm")]: {
      paddingRight: "1rem",
      fontSize: ".8rem",
    },
  },
  description: {
    padding: "4rem",
    [theme.breakpoints.down("md")]: {
      padding: "3rem",
    },
    [theme.breakpoints.down("sm")]: {
      padding: "2rem",
    },
  },
}))

const Content = ({ activeData, gradient }) => {
  const classes = useStyles()
  const [displayData, setDisplayData] = useState({})

  const initialLabels = activeData.labels
  const initialValues = activeData.values

  const updateActiveValues = (range) => {
    const outputLabels = initialLabels.slice(range.min, range.max + 1)
    const outputValues = initialValues.slice(range.min, range.max + 1)

    setDisplayData({
      labels: outputLabels,
      values: outputValues,
    })
  }

  return (
    <div className={classes.contentContainer}>
      <div className={classes.title}>{activeData.title}</div>
      {displayData.trend && displayData.trend.length > 1 && (
        <h3 style={{ marginLeft: "5rem" }}>show trend</h3>
      )}
      <br />
      <Chart
        displayData={displayData}
        label={activeData.title}
        grad={gradient}
      />
      <br />
      <div className={classes.sliderLabel}>Data scope:</div>
      <RangeSlider
        activeData={activeData}
        updateActiveValues={updateActiveValues}
        style={{ passive: "false" }}
      />
      {/* <br />
      {activeData.unit}
      <br /> */}
      <div className={classes.description}>{activeData.description}</div>
    </div>
  )
}

export default Content
