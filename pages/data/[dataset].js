import React, { useState, useEffect, Fragment } from "react"
import Link from "next/link"
import Head from "next/head"
import { useSpring, animated } from "react-spring"
//mui
import { makeStyles } from "@material-ui/core/styles"
import { useMediaQuery } from "@material-ui/core"
import Hidden from "@material-ui/core/Hidden"
import BackIcon from "@material-ui/icons/ArrowBackIos"
import Modal from "@material-ui/core/Modal"
import Backdrop from "@material-ui/core/Backdrop"
// custom
import { datasets } from "../../src/components/data/Datasets"
import Content from "../../src/components/data/Content"
import CategoryDescription from "../../src/components/data/CategoryDescription"
import Loader from "../../src/ui/Loader"
import FloatButtonData from "../../src/components/data/FloatButtonData"

const drawerWidth = "360px"

const useStyles = makeStyles((theme) => ({
  container: {
    ...theme.utils.container,
    display: "flex",
    justifyContent: "flex-start",
    marginTop: "4rem",
    [theme.breakpoints.down("md")]: {
      marginTop: 0,
    },
  },
  /*
   * drawer styles
   */
  drawer: {
    minWidth: drawerWidth,
    height: "100%",
    overflow: "auto",
    background: "white",
    // mobile styles apply to modal content
    [theme.breakpoints.down("md")]: {
      minWidth: "max-content",
      maxWidth: "90%",
      height: "auto",
      maxHeight: "calc(86vh - 80px)",
      overflowY: "auto",
      borderRadius: 4,
      boxShadow: theme.shadows[5],
    },
  },
  list: {
    marginTop: "3.5rem",
    marginBottom: "10rem",
    listStyle: "none",
    fontWeight: 400,
    // mobile styles apply to modal content
    [theme.breakpoints.down("md")]: {
      margin: 0,
      padding: "2rem 1.5rem",
    },
    [theme.breakpoints.down("xs")]: {
      margin: 0,
      padding: "2rem 1rem",
    },
  },
  listItem: {
    border: "1px solid transparent",
    borderRadius: 4,
    display: "flex",
    color: theme.palette.text.primary,
    fontSize: "1rem",
    margin: ".5rem 0",
    padding: "0.8rem",
    paddingLeft: "2rem",
    cursor: "pointer",
    "&:hover": {
      color: theme.palette.secondary.main,
      border: `1px solid ${theme.palette.secondary.main}`,
      borderRadius: 4,
    },
    // mobile styles apply to modal content
    [theme.breakpoints.down("md")]: {
      border: `1px solid #f3f3f3`,
      padding: "0.7rem 1.5rem",
      fontSize: "0.9rem",
      margin: ".4rem 0",
    },
    [theme.breakpoints.down("xs")]: {
      padding: "0.6rem 1rem",
      fontSize: "0.85rem",
    },
  },
  listItemActive: {
    borderRadius: 4,
    display: "flex",
    border: `1px solid ${theme.palette.secondary.main}`,
    color: theme.palette.secondary.main,
    fontSize: "1rem",
    margin: ".5rem 0",
    padding: "0.8rem",
    paddingLeft: "2rem",
    cursor: "pointer",
    "&:hover": {
      cursor: "default",
      borderRadius: 4,
    },
    [theme.breakpoints.down("md")]: {
      padding: "0.7rem 1.5rem",
      fontSize: "0.9rem",
      margin: ".4rem 0",
    },
  },
  /*
   * content
   */
  content: {
    fontSize: "2rem",
    padding: "3rem",
  },
  link: {
    textDecoration: "none",
  },
  backIcon: {
    paddingInline: "0.2rem",
    marginRight: "1rem",
  },
  /*
   * modal
   */
  modal: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    paddingTop: "calc(80px + 7vh)",
    paddingBottom: "7vh",
  },
  paper: {
    backgroundColor: theme.palette.background.paper,
    border: "2px solid #000",
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
    margin: "7%",
    maxHeight: "80%",
    overflowY: "auto",
  },
}))

const DataDisplay = ({ dataset }) => {
  const [activeData, setActiveData] = useState(datasets[dataset].scopes[0])
  const [index, setIndex] = useState(0)
  const [loading, setLoading] = useState(false)
  // modal state
  const [open, setOpen] = useState(false)
  const classes = useStyles()

  const mobile = useMediaQuery("(max-width:1000px)")

  useEffect(() => {
    getData(datasets[dataset].scopes[0].endpoint)
    setIndex(0)
  }, [dataset])

  const getData = async (endpoint) => {
    setLoading(true)
    try {
      const res = await fetch(
        `https://api.climatemonitor.info/api/v1/chartdata/${endpoint}`
      )
      const data = await res.json()
      setActiveData(data.data)
      setLoading(false)
    } catch (err) {
      console.error(err)
    }
  }

  const scrollUp = () => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }
  /*
   * modal handling
   */

  const handleOpen = () => {
    setOpen(true)
  }

  const handleClose = () => {
    setOpen(false)
  }

  const Fade = React.forwardRef(function Fade(props, ref) {
    const { in: open, children, onEnter, onExited, ...other } = props
    const style = useSpring({
      from: { opacity: 0 },
      to: { opacity: open ? 1 : 0 },
      onStart: () => {
        if (open && onEnter) {
          onEnter()
        }
      },
      onRest: () => {
        if (!open && onExited) {
          onExited()
        }
      },
    })

    return (
      <animated.div ref={ref} style={style} {...other}>
        {children}
      </animated.div>
    )
  })

  return (
    <Fragment>
      <Head>
        <title key="title">{`${datasets[dataset].header} | Climate Monitor`}</title>
        <meta
          name="description"
          key="description"
          content={`${datasets[dataset].header}, ${datasets[dataset].title}, Climate Monitor - free public REST API with json data on climate change`}
        />
      </Head>
      <div className={classes.container}>
        <Hidden mdDown>
          <div className={classes.drawer}>
            <div className={classes.list}>
              <Link href="/data" className={classes.link}>
                <div className={classes.listItem}>
                  <BackIcon className={classes.backIcon} />
                  all data
                </div>
              </Link>
              {datasets[dataset].scopes &&
                datasets[dataset].scopes.map((scope, i) => (
                  <div
                    className={
                      i === index ? classes.listItemActive : classes.listItem
                    }
                    key={scope.title}
                    onClick={() => {
                      getData(scope.endpoint)
                      setIndex(i)
                      scrollUp()
                    }}
                  >
                    {scope.title}
                  </div>
                ))}
            </div>
          </div>
        </Hidden>
        <div>
          {loading || !activeData.labels ? (
            <div
              style={{ width: "100%", marginTop: "7rem", marginBottom: "40vh" }}
            >
              <Loader />
            </div>
          ) : (
            <Content
              activeData={activeData}
              gradient={datasets[dataset].gradient}
            />
          )}
          <CategoryDescription
            desc={datasets[dataset].desc}
            link={datasets[dataset].sourceLink}
          />
        </div>
      </div>
      {mobile && <FloatButtonData className={classes.float} cb={handleOpen} />}
      {open && (
        <Modal
          aria-labelledby="spring-modal-title"
          aria-describedby="spring-modal-description"
          className={classes.modal}
          open={open}
          onClose={handleClose}
          closeAfterTransition
          BackdropComponent={Backdrop}
          BackdropProps={{
            timeout: 500,
          }}
        >
          <Fade in={open}>
            <div className={classes.drawer}>
              <div className={classes.list}>
                <Link href="/data" className={classes.link}>
                  <div className={classes.listItem} onClick={handleClose}>
                    <BackIcon className={classes.backIcon} />
                    all data
                  </div>
                </Link>
                {datasets[dataset].scopes &&
                  datasets[dataset].scopes.map((scope, i) => (
                    <div
                      className={
                        i === index ? classes.listItemActive : classes.listItem
                      }
                      key={scope.title}
                      onClick={() => {
                        getData(scope.endpoint)
                        setIndex(i)
                        scrollUp()
                        handleClose()
                      }}
                    >
                      {scope.title}
                    </div>
                  ))}
              </div>
            </div>
          </Fade>
        </Modal>
      )}
    </Fragment>
  )
}

export async function getStaticProps(context) {
  const { params } = context
  const dataset = params.dataset

  return {
    props: {
      dataset,
    },
  }
}
export async function getStaticPaths() {
  return {
    paths: [
      { params: { dataset: "co2" } },
      { params: { dataset: "ch4" } },
      { params: { dataset: "sf6" } },
      { params: { dataset: "n2o" } },
      { params: { dataset: "temperatures" } },
      { params: { dataset: "sealevels" } },
      { params: { dataset: "glaciers" } },
    ],
    fallback: false,
  }
}

export default DataDisplay
