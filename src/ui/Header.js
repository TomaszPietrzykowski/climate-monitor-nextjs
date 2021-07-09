import React, { Fragment, useEffect, useState } from "react"
import Link from "next/link"

import { makeStyles } from "@material-ui/styles"
import AppBar from "@material-ui/core/AppBar"
import Toolbar from "@material-ui/core/Toolbar"
import useScrollTrigger from "@material-ui/core/useScrollTrigger"
import Tabs from "@material-ui/core/Tabs"
import Tab from "@material-ui/core/Tab"
import Button from "@material-ui/core/Button"
import useMediaQuery from "@material-ui/core/useMediaQuery"
import { useTheme } from "@material-ui/core/styles"
import SwipeableDrawer from "@material-ui/core/SwipeableDrawer"
import IconButton from "@material-ui/core/IconButton"
import MenuIcon from "@material-ui/icons/Menu"
import List from "@material-ui/core/List"
import ListItem from "@material-ui/core/ListItem"
import ListItemText from "@material-ui/core/ListItemText"

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
    padding: "0 2rem",
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
    ...theme.utils.tab,
    ...theme.typography.pop,
    color: theme.palette.text.secondary,
    "&:hover": {
      color: theme.palette.text.primary,
    },
  },
  tabActive: {
    ...theme.utils.tab,
    ...theme.typography.pop,
    color: theme.palette.common.activeTab,
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
  { name: "Home", link: "/", activeIndex: 0 },
  { name: "Data", link: "/data", activeIndex: 1 },
  { name: "News", link: "/news", activeIndex: 2 },
  { name: "About", link: "/about", activeIndex: 3 },
  { name: "Contact", link: "/contact", activeIndex: 4 },
  { name: "Public API", link: "/public_api", activeIndex: 5 },
]

const Header = ({ value, setValue }) => {
  const classes = useStyles()
  const theme = useTheme()
  const iOS = process.browser && /iPad|iPhone|iPod/.test(navigator.userAgent)
  const matches = useMediaQuery(theme.breakpoints.down("md"))

  const [openDrawer, setOpenDrawer] = useState(false)
  // check for window object
  const path = typeof window !== "undefined" ? window.location.pathname : null
  // check for active index
  const activeIndex = () => {
    const found = routes.find(({ link }) => link === path)
    if (found) {
      setValue(found.activeIndex)
    }
  }

  useEffect(() => {
    activeIndex()
  }, [path])

  const handleChange = (e, value) => {
    setValue(value)
  }

  const tabs = (
    <Fragment>
      <Tabs
        value={value}
        onChange={handleChange}
        className={classes.tabContainer}
        indicatorColor="transparent"
      >
        {routes.map((route, i) => (
          <Link key={`${route.link}${i}`} href={route.link} value={i}>
            <Tab
              disableRipple
              className={
                route.activeIndex === value ? classes.tabActive : classes.tab
              }
              label={route.name}
            />
          </Link>
        ))}
      </Tabs>
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
            <Link key={`${route.link}`} href={route.link}>
              <ListItem
                disableRipple
                onClick={() => {
                  setOpenDrawer(false)
                  setValue(i)
                }}
                divider
                button
                className={
                  i === routes.length - 1
                    ? classes.backgroundAPI
                    : classes.drawerBackground
                }
                selected={
                  value === i && value < routes.length - 1 ? true : false
                }
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
            </Link>
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
            <Link href="/">
              <Button
                disableRipple
                className={classes.logoContainer}
                onClick={() => setValue(0)}
              >
                <img
                  src="/logotype.svg"
                  alt="climate monitor logo"
                  className={classes.logo}
                />
              </Button>
            </Link>
            {matches ? drawer : tabs}
          </Toolbar>
        </AppBar>
      </ElevationScroll>
      <div className={classes.toolbarMargin} />
    </Fragment>
  )
}

export default Header
