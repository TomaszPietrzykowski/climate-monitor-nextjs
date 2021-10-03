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
    // work on media landscape, fine tune chart to all devices TO DO
    [theme.breakpoints.down("md")]: {
      height: "45vh",
      width: "95vw",
      margin: "auto",
      padding: "1rem",
    },
    [theme.breakpoints.down("sm")]: {
      height: "35vh",
    },
    [theme.breakpoints.down("xs")]: {
      height: "30vh",
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
