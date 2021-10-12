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
    fontWeight: 300,
    color: theme.palette.text.primary,
    fontSize: "1.6rem",
    [theme.breakpoints.down("md")]: {
      padding: "3rem",
      paddingBottom: 0,
      paddingLeft: 36,
    },
    [theme.breakpoints.down("sm")]: {
      fontSize: "1.2rem",
      padding: "2rem 2rem 0",
    },
    [theme.breakpoints.down("xs")]: {
      fontSize: "1rem",
      padding: "2rem 1.5rem 0",
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
    ...theme.typography.pop,
    ...theme.utils.p,
    color: theme.palette.text.primary,
    fontSize: "1.2rem",
    padding: "2rem 4rem 4rem",
    [theme.breakpoints.down("md")]: {
      padding: "2rem 2rem 0",
      fontSize: "1.1rem",
    },
    [theme.breakpoints.down("xs")]: {
      padding: "1rem 1.5rem 0",
      fontSize: "1rem",
      lineHeight: 1.3,
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
      <Chart
        displayData={displayData}
        label={activeData.title}
        grad={gradient}
      />
      <div className={classes.sliderLabel}>Data scope:</div>
      <RangeSlider
        activeData={activeData}
        updateActiveValues={updateActiveValues}
        style={{ passive: "false" }}
      />
      <div className={classes.description}>{activeData.description}</div>
    </div>
  )
}

export default Content
