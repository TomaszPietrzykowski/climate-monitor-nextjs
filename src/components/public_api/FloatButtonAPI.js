import { makeStyles } from "@material-ui/core/styles"
import Fab from "@material-ui/core/Fab"
import ImportantDevicesIcon from "@material-ui/icons/KeyboardArrowUpOutlined"

const useStyles = makeStyles((theme) => ({
  root: {
    position: "fixed",
    right: "2rem",
    bottom: "2rem",
    "& > *": {
      margin: theme.spacing(1),
    },
    [theme.breakpoints.down("xs")]: {
      right: "0.5rem",
      bottom: "0.5rem",
    },
  },
  extendedIcon: {
    marginRight: theme.spacing(1),
  },
}))

const FloatButtonAPI = ({ cb }) => {
  const classes = useStyles()

  return (
    <div className={classes.root}>
      <Fab color="secondary" aria-label="add" onClick={cb}>
        <ImportantDevicesIcon style={{ color: "white" }} />
      </Fab>
    </div>
  )
}

export default FloatButtonAPI
