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
  tempContainer: {
    padding: "4rem",
    [theme.breakpoints.down("md")]: {
      padding: "3rem",
    },
    [theme.breakpoints.down("sm")]: {
      padding: "2rem",
    },
  },
}))

const Content = ({ activeData }) => {
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
      <Chart displayData={displayData} label={activeData.title} />
      <br />
      <div className={classes.sliderLabel}>Data scope:</div>
      <RangeSlider
        activeData={activeData}
        updateActiveValues={updateActiveValues}
        style={{ passive: "false" }}
      />
      <br />
      {activeData.unit}
      <br />
      <div className={classes.tempContainer}>
        <h5>Dataset description: {activeData.description}</h5>
        <br />
        {activeData.labels &&
          activeData.labels.map((label, i) => (
            <div key={label}>
              {label} - {activeData.values[i]}
            </div>
          ))}
        <br />
        <br />
        <br />
        <h5>Last updated: {activeData.lastUpdate}</h5>
        <br />
        <br />
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Rhoncus
          dolor purus non enim praesent elementum facilisis leo vel. Risus at
          ultrices mi tempus imperdiet. Semper risus in hendrerit gravida rutrum
          quisque non tellus. Convallis convallis tellus id interdum velit
          laoreet id donec ultrices. Odio morbi quis commodo odio aenean sed
          adipiscing. Amet nisl suscipit adipiscing bibendum est ultricies
          integer quis. Cursus euismod quis viverra nibh cras. Metus vulputate
          eu sc elerisque felis imperdiet proin fermentum leo. Mauris commodo
          quis imperdiet massa tincidunt. Cras tincidunt lobortis feugiat
          vivamus at augue. At augue eget arcu dictum varius duis at consectetur
          lorem. Velit sed ullamcorper morbi tincidunt. Lorem donec massa sapien
          faucibus et molestie ac.
        </p>
      </div>
    </div>
  )
}

export default Content
