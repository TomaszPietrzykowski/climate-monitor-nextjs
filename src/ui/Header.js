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
import MenuIcon from "@material-ui/icons/MenuRounded"
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
    [theme.breakpoints.down("sm")]: {
      padding: "0",
    },
  },
  toolbarMargin: {
    height: 80,
    [theme.breakpoints.down("sm")]: {
      height: 64,
    },
    [theme.breakpoints.down("xs")]: {
      height: 56,
    },
  },
  logoContainer: {
    padding: 0,

    "&:hover": {
      backgroundColor: "white",
    },
    [theme.breakpoints.down("sm")]: {
      paddingLeft: "1rem",
    },
  },
  logo: {
    height: "3rem",
    margin: "1rem 0rem",
    [theme.breakpoints.down("sm")]: {
      margin: "0rem",
      height: "2.4rem",
    },
    [theme.breakpoints.down("xs")]: {
      height: "2.2rem",
    },
  },
  tabContainer: {
    marginLeft: "auto",
  },
  tab: {
    ...theme.utils.tab,
    fontWeight: 500,
    color: theme.palette.text.primary,
    transition: "all .2s ease",
    "&:hover": {
      color: theme.palette.text.secondary,
    },
  },
  tabActive: {
    ...theme.utils.tab,
    fontWeight: 500,
    opacity: 1,
    color: theme.palette.secondary.main,
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
    padding: 6,
    color: theme.palette.primary.main,
    "&:hover": {
      backgroundColor: "transparent",
    },
    [theme.breakpoints.down("md")]: {
      marginRight: "0.6rem",
    },
    [theme.breakpoints.down("xs")]: {
      marginRight: "0.2rem",
    },
  },

  /*
   *
   *
   *  ----------------------------------------------- Drawer Styles
   *
   */
  drawerIcon: {
    height: "42px",
    width: "42px",
  },
  drawer: {
    backgroundColor: "white",
  },
  drawerBackground: {
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
  drawerItem: {
    ...theme.typography.tab,
    padding: "0.8rem 6rem 0.8rem 2rem",
    color: theme.palette.primary.main,
    letterSpacing: 1.3,
    "&:hover": {
      color: theme.palette.primary.light,
    },
    [theme.breakpoints.down("sm")]: {
      padding: "0.8rem 6rem 0.8rem 1rem",
    },
  },
  drawerItemAPI: {
    ...theme.typography.tab,
    padding: "0.8rem 6rem 0.8rem 2rem",
    letterSpacing: 1.3,
    backgroundColor: "transparent",
    color: "white",
    [theme.breakpoints.down("sm")]: {
      padding: "0.8rem 6rem 0.8rem 1rem",
    },
  },
  drawerItemActive: {
    ...theme.typography.tab,
    padding: "0.8rem 6rem 0.8rem 2rem",
    color: theme.palette.primary.main,
    letterSpacing: 1.3,
    "&:hover": {
      color: theme.palette.primary.light,
    },
    opacity: 0.5,
    [theme.breakpoints.down("sm")]: {
      padding: "0.8rem 6rem 0.8rem 1rem",
    },
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
    } else if (path.includes("/data")) {
      setValue(1)
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
        TabIndicatorProps={{
          style: {
            display: "none",
          },
        }}
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
                      ? classes.drawerItemActive
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
