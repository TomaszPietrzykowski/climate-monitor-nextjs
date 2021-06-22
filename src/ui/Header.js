import React, { Fragment, useEffect, useState } from "react"
import AppBar from "@material-ui/core/AppBar"
import Toolbar from "@material-ui/core/Toolbar"
import useScrollTrigger from "@material-ui/core/useScrollTrigger"
import { makeStyles } from "@material-ui/styles"
import Tabs from "@material-ui/core/Tabs"
import Tab from "@material-ui/core/Tab"
import Button from "@material-ui/core/Button"
import { Link } from "react-router-dom"
import useMediaQuery from "@material-ui/core/useMediaQuery"
import { useTheme } from "@material-ui/core/styles"
import SwipeableDrawer from "@material-ui/core/SwipeableDrawer"
import IconButton from "@material-ui/core/IconButton"
import MenuIcon from "@material-ui/icons/Menu"
import List from "@material-ui/core/List"
import ListItem from "@material-ui/core/ListItem"
import ListItemText from "@material-ui/core/ListItemText"

import logo from "../../assets/logotype.svg"

function ElevationScroll(props) {
  const { children } = props

  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0,
  })

  return React.cloneElement(children, {
    elevation: trigger ? 4 : 0,
  })
}

const useStyles = makeStyles((theme) => ({
  appBar: {
    backgroundColor: "white",
    zIndex: theme.zIndex.modal + 1,
  },
  toolBar: {
    width: "100%",
    maxWidth: 1400,
    margin: "auto",
    padding: "0 4rem",
    [theme.breakpoints.down("md")]: {
      padding: "0 2rem",
    },
  },
  toolbarMargin: {
    ...theme.mixins.toolbar,
    [theme.breakpoints.down("sm")]: {
      marginBottom: 0,
    },
  },
  logoContainer: {
    padding: 0,

    "&:hover": {
      backgroundColor: "white",
    },
    [theme.breakpoints.down("md")]: {
      paddingLeft: "1rem",
    },
  },
  logo: {
    height: "2.2rem",
    margin: "0.8rem 0rem",
    [theme.breakpoints.down("sm")]: {
      margin: "0rem",
      height: "2rem",
    },
    [theme.breakpoints.down("xs")]: {
      height: "1.8rem",
    },
  },
  tabContainer: {
    marginLeft: "auto",
  },
  tab: {
    ...theme.typography.tab,
    minWidth: 30,
  },
  button: {
    ...theme.typography.tab,
    borderRadius: "50px",
    color: "white",
    paddingBottom: "0.2rem",
  },
  iconButtonContainer: {
    marginLeft: "auto",
    marginRight: "1rem",
    color: theme.palette.primary.main,
    "&:hover": {
      backgroundColor: "transparent",
    },
    [theme.breakpoints.down("sm")]: {
      marginRight: "0.5rem",
    },
    [theme.breakpoints.down("xs")]: {
      marginRight: "0.2rem",
    },
  },
  drawerIcon: {
    height: "30px",
    width: "30px",
  },
  drawer: {
    backgroundColor: "white",
  },
  drawerItem: {
    ...theme.typography.tab,
    color: theme.palette.primary.main,
    letterSpacing: 1.3,
    "&:hover": {
      color: theme.palette.primary.light,
    },
  },
  drawerBackground: {
    paddingRight: "3rem",
    "&:hover": {
      backgroundColor: theme.palette.action.disabledBackground,
    },
  },
  backgroundAPI: {
    backgroundColor: theme.palette.primary.light,
    "&:hover": {
      backgroundColor: theme.palette.primary.main,
    },
  },
  drawerItemAPI: {
    ...theme.typography.tab,
    letterSpacing: 1.3,
    backgroundColor: "transparent",
    color: "white",
  },
  selectedText: {
    ...theme.typography.tab,
    color: theme.palette.primary.main,
    letterSpacing: 1.3,
    "&:hover": {
      color: theme.palette.primary.light,
    },
    opacity: 0.5,
  },
}))

const routes = [
  { name: "Home", link: "/" },
  { name: "Data", link: "/data" },
  { name: "News", link: "/news" },
  { name: "About", link: "/about" },
  { name: "Contact", link: "/contact" },
  { name: "Public API", link: "/public_api" },
]

const Header = ({ value, setValue }) => {
  const classes = useStyles()
  const theme = useTheme()
  const iOS = process.browser && /iPad|iPhone|iPod/.test(navigator.userAgent)
  const matches = useMediaQuery(theme.breakpoints.down("md"))

  const [openDrawer, setOpenDrawer] = useState(false)

  useEffect(() => {
    routes.forEach((route, i) => {
      switch (window.location.pathname) {
        case `${route.link}`:
          if (value !== i) setValue(i)
          break
        default:
          break
      }
    })
    // eslint-disable-next-line
  }, [value, routes])

  const handleChange = (e, value) => {
    setValue(value)
  }

  const tabs = (
    <Fragment>
      <Tabs
        value={value}
        onChange={handleChange}
        className={classes.tabContainer}
        indicatorColor="secondary"
      >
        {routes.map(
          (route, i) =>
            i < routes.length - 1 && (
              <Tab
                disableRipple
                key={`${route.link}${i}`}
                className={classes.tab}
                label={route.name}
                component={Link}
                to={route.link}
              />
            )
        )}
      </Tabs>
      <Button
        variant="contained"
        color="primary"
        className={classes.button}
        component={Link}
        to="/public_api"
        onClick={() => setValue(5)}
      >
        Public API
      </Button>
    </Fragment>
  )

  const drawer = (
    <Fragment>
      <SwipeableDrawer
        disableBackdropTransition={!iOS}
        disableDiscovery={iOS}
        open={openDrawer}
        onClose={() => setOpenDrawer(false)}
        onOpen={() => setOpenDrawer(true)}
        classes={{ paper: classes.drawer }}
      >
        <div className={classes.toolbarMargin} />
        <List disablePadding>
          {routes.map((route, i) => (
            <ListItem
              key={`${route.link}`}
              disableRipple
              onClick={() => {
                setOpenDrawer(false)
                setValue(i)
              }}
              divider
              button
              component={Link}
              to={route.link}
              className={
                i === routes.length - 1
                  ? classes.backgroundAPI
                  : classes.drawerBackground
              }
              selected={value === i && value < routes.length - 1 ? true : false}
            >
              <ListItemText
                disableTypography
                className={
                  i === routes.length - 1
                    ? classes.drawerItemAPI
                    : value === i
                    ? classes.selectedText
                    : classes.drawerItem
                }
              >
                {route.name}
              </ListItemText>
            </ListItem>
          ))}
        </List>
      </SwipeableDrawer>
      <IconButton
        className={classes.iconButtonContainer}
        onClick={() => setOpenDrawer(!openDrawer)}
        disableRipple
      >
        <MenuIcon className={classes.drawerIcon} />
      </IconButton>
    </Fragment>
  )

  return (
    <Fragment>
      <ElevationScroll>
        <AppBar className={classes.appBar}>
          <Toolbar className={classes.toolBar} disableGutters={true}>
            <Button
              disableRipple
              className={classes.logoContainer}
              component={Link}
              to="/"
              onClick={() => setValue(0)}
            >
              <img
                src={logo}
                alt="climate monitor logo"
                className={classes.logo}
              />
            </Button>
            {matches ? drawer : tabs}
          </Toolbar>
        </AppBar>
      </ElevationScroll>
      <div className={classes.toolbarMargin} />
    </Fragment>
  )
}

export default Header
