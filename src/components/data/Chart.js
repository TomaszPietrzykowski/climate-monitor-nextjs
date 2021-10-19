import React from "react"
import { useTheme, makeStyles } from "@material-ui/core/styles"
import useMediaQuery from "@material-ui/core/useMediaQuery"
import { Line } from "react-chartjs-2"

const useStyles = makeStyles((theme) => ({
  chartContainer: {
    display: "flex",
    position: "relative",
    height: "60vh",
    width: "65vw",
    maxWidth: 1000,
    padding: "1rem 2rem",
    [theme.breakpoints.down("md")]: {
      height: "65vh",
      width: "100vw",
      margin: 0,
      padding: "1rem",
    },
    // 4K
    "@media (min-width: 2000px) and (orientation: portrait)": {
      height: "15vh",
    },
    "@media (min-width: 2000px) and (orientation: landscape)": {
      height: "25vh",
    },
    "@media (max-width: 700px) and (orientation: portrait)": {
      height: "40vh",
    },
    "@media (max-width: 1000px) and (orientation: landscape)": {
      height: "85vh",
    },
    "@media (max-width: 410px) and (orientation: portrait)": {
      height: "35vh",
    },
    "@media (max-width: 410px) and (orientation: landscape)": {
      height: "90vh",
    },
  },
}))

const Chart = ({ displayData, label, grad }) => {
  const theme = useTheme()
  const classes = useStyles()
  const isMobile = useMediaQuery("(max-width:600px)")

  const chartData = (canvas) => {
    const ctx = canvas.getContext("2d")
    const gradient = ctx.createLinearGradient(0, 500, 0, 100)
    gradient.addColorStop(0, theme.palette.gradient[grad][0])
    gradient.addColorStop(0.3, theme.palette.gradient[grad][1])
    gradient.addColorStop(0.6, theme.palette.gradient[grad][2])
    gradient.addColorStop(1, theme.palette.gradient[grad][3])

    return {
      labels: displayData.labels,
      datasets: [
        {
          label: label,
          fill: true,
          data: displayData.values,
          backgroundColor: gradient,
          borderColor: theme.palette.gradient[grad][4],
          borderWidth: 1,
          pointBorderColor: "rgba(0,0,0,0)",
          pointBackgroundColor: "rgba(0,0,0,0)",
          lineTension: 0,
        },
      ],
    }
  }

  const chartOptions = {
    responsive: true,
    maintainAspectRatio: false,
    legend: { display: !isMobile },
    redraw: true,
    interaction: {
      mode: "index",
      intersect: false,
    },
  }

  return (
    <div className={classes.chartContainer}>
      <Line data={chartData} options={chartOptions} />
    </div>
  )
}

export default Chart
