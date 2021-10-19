import React, { useState, Fragment } from "react"
import Head from "next/head"
import axios from "axios"
// mui
import { Button, TextField } from "@material-ui/core"
import { makeStyles, withStyles } from "@material-ui/styles"
import Checkbox from "@material-ui/core/Checkbox"
import Snackbar from "@material-ui/core/Snackbar"
import MuiAlert from "@material-ui/lab/Alert"
import SendIcon from "@material-ui/icons/Send"
// custom
import Loader from "../src/ui/Loader"

// snackbars:
function Alert(props) {
  return <MuiAlert elevation={6} variant="filled" {...props} />
}

const CssTextField = withStyles((theme) => ({
  root: {
    ...theme.typography.mont,
    opacity: 0.8,
    "& label.Mui-focused": {
      color: theme.palette.secondary.main,
    },
    "& .MuiInput-focused fieldset": {
      color: theme.palette.secondary.main,
    },
    "& .MuiOutlinedInput-root": {
      "&:hover fieldset": {
        borderColor: theme.palette.secondary.main,
      },
      "&.Mui-focused fieldset": {
        borderColor: theme.palette.secondary.main,
      },
    },
  },
}))(TextField)

const CustomCheckbox = withStyles((theme) => ({
  root: {
    color: theme.palette.text.secondary,
    "&$checked": {
      color: theme.palette.common.green,
    },
  },
  checked: {},
}))(Checkbox)

const useStyles = makeStyles((theme) => ({
  /*
   * header
   */
  titleBar: {
    width: "100%",
    zIndex: theme.zIndex.drawer + 1,
    background: `white`,
  },
  sectionHeader: {
    fontWeight: 400,
    color: theme.palette.secondary.main,
    fontSize: "4rem",
    maxWidth: 1400,
    margin: "auto",
    marginTop: "6rem",
    marginBottom: "2rem",
    padding: "1rem 2rem",
    [theme.breakpoints.down("md")]: {
      marginLeft: 0,
      marginTop: "3rem",
      fontSize: "2.5rem",
    },
    [theme.breakpoints.down("sm")]: {
      marginTop: "2rem",
      fontSize: "2rem",
    },
    position: "relative",
    "&::before": {
      content: "'Contact'",
      position: "absolute",
      bottom: -38,
      left: -50,
      fontSize: "10rem",
      opacity: 0.04,
      whiteSpace: "nowrap",
      color: theme.palette.secondary.light,
      [theme.breakpoints.down("md")]: {
        fontSize: "7rem",
        bottom: -20,
        left: -25,
      },
      [theme.breakpoints.down("sm")]: {
        fontSize: "5rem",
        bottom: -10,
        left: -15,
      },
    },
  },
  /*
   * layout
   */
  containerTop: {
    width: "100%",
    maxWidth: 1920,
    margin: "6rem auto 8rem",
    display: "grid",
    gridTemplateColumns: "50% 50%",
    [theme.breakpoints.down("lg")]: {
      maxWidth: 1400,
      gridTemplateColumns: "66% 33%",
    },
    [theme.breakpoints.down("sm")]: {
      gridTemplateColumns: "1fr",
      marginBlock: 0,
    },
  },
  contentContainer: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    width: "100%",
    maxWidth: 700,
    padding: "0 2rem",
    marginLeft: "auto",
    [theme.breakpoints.down("lg")]: {
      marginLeft: 0,
    },
    [theme.breakpoints.down("xs")]: {
      padding: "0 1.5rem",
    },
  },
  image: {
    display: "block",
    maxWidth: "100%",
    [theme.breakpoints.down("lg")]: {
      maxWidth: "auto",
      height: "100%",
      objectFit: "cover",
    },
    [theme.breakpoints.down("sm")]: {
      marginTop: "3rem",
    },
  },
  /*
   * email form
   */
  content: {
    position: "relative",
    [theme.breakpoints.down("sm")]: {
      padding: 0,
    },
    [theme.breakpoints.down("xs")]: {
      width: "min-content",
      minWidth: "100%",
    },
  },
  form: {
    ...theme.flex.col,
    alignItems: "flex-start",
    minWidth: 280,
    [theme.breakpoints.down("xs")]: {
      maxWidth: 380,
    },
    "& > *": {
      marginBottom: "2rem",
      width: 380,
      [theme.breakpoints.down("sm")]: {
        width: "100%",
        maxWidth: 560,
      },
    },
  },
  textarea: {
    width: "100%",
    maxWidth: 560,
    [theme.breakpoints.down("xs")]: {
      maxWidth: 380,
      width: "100%",
    },
  },
  errorMargin: {
    marginBottom: "2rem",
  },
  checkboxContainer: {
    ...theme.flex.row,
    justifyContent: "flex-start",
    width: "100%",
    maxWidth: 560,
    paddingRight: "1rem",
    border: `1px solid ${theme.palette.common.background}`,
    borderRadius: 4,
    [theme.breakpoints.down("xs")]: {
      marginBottom: 0,
    },
  },
  checkboxContainerError: {
    ...theme.flex.row,
    justifyContent: "flex-start",
    width: "100%",
    maxWidth: 560,
    paddingRight: "1rem",
    border: `1px solid red`,
    borderRadius: 4,
    [theme.breakpoints.down("xs")]: {
      marginBottom: 0,
    },
  },
  checkboxLabel: {
    fontSize: ".9rem",
    color: theme.palette.text.secondary,
    [theme.breakpoints.down("xs")]: {
      fontSize: ".8rem",
    },
  },
  checkboxLabelError: {
    fontSize: ".9rem",
    color: "red",
    [theme.breakpoints.down("xs")]: {
      fontSize: ".8rem",
    },
  },
  submitBtn: {
    ...theme.utils.btn,
    color: theme.palette.secondary.main,
    fontSize: "1.2rem",
    padding: "0.4rem 3.5rem 0.4rem 2.8rem",
    width: "min-content",
    transition: "all .2s ease",
    "&:hover": {
      background: theme.palette.secondary.main,
      borderColor: theme.palette.secondary.main,
      color: "white",
    },
    [theme.breakpoints.down("md")]: {
      fontSize: "1rem",
      marginTop: "1.5rem",
    },
    [theme.breakpoints.down("sm")]: {
      letterSpacing: 2,
      fontWeight: 400,
      padding: "0.4rem 3rem 0.4rem 2.5rem",
      border: "2px solid",
    },
  },
  info: {
    color: theme.palette.secondary.main,
    textDecoration: "underline",
    letterSpacing: 0.5,
    [theme.breakpoints.down("xs")]: {
      fontSize: ".9rem",
    },
  },
  error: {
    color: "red",
    padding: "2rem 2rem 2rem 0",
  },

  sendIcon: {
    fontSize: "1.8rem",
    marginRight: ".6rem",
    marginTop: "-0.15rem",
    [theme.breakpoints.down("sm")]: {
      fontSize: "1.6rem",
      marginTop: "-0.1rem",
    },
  },
}))

const Contact = () => {
  const classes = useStyles()
  // state
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [message, setMessage] = useState("")
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)
  const [legalConsent, setLegalConsent] = useState(false)
  const [consentError, setConsentError] = useState(false)
  // successful alert state
  const [open, setOpen] = useState(false)

  const handleAlertClose = (event, reason) => {
    if (reason === "clickaway") {
      return
    }
    setOpen(false)
  }

  const sendEmail = async (name, email, message) => {
    try {
      setLoading(true)
      const { data } = await axios.post(
        "/api/email",
        { name, email, message },
        {
          headers: { "Content-type": "application/json" },
        }
      )
      if (data.status === "success") {
        // display popup
        setOpen(true)
        // clean form
        setName("")
        setEmail("")
        setMessage("")
        setLegalConsent(false)
      }
      setLoading(false)
    } catch (err) {
      setError(`${err}`)
      setLoading(false)
    }
  }

  const submitHandler = (e) => {
    e.preventDefault()
    if (legalConsent) {
      sendEmail(name, email, message)
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      })
    } else {
      setConsentError(true)
    }
  }
  return (
    <Fragment>
      <Head>
        <title key="title">Contact Us | Climate Monitor</title>
        <meta
          name="description"
          key="description"
          content="Contact us at Climate Monitor - free public REST API with json data on climate change."
        />
      </Head>
      <Snackbar open={open} autoHideDuration={4000} onClose={handleAlertClose}>
        <Alert onClose={handleAlertClose} severity="success">
          Message sent, thank you!
        </Alert>
      </Snackbar>
      <div className={classes.titleBar}>
        <h1 className={classes.sectionHeader}>Contact</h1>
      </div>
      <div className={classes.containerTop}>
        <div className={classes.contentContainer}>
          <main className={classes.content}>
            {error && <div className={classes.error}>{error}</div>}
            {loading ? (
              <Loader />
            ) : (
              <>
                <form
                  onSubmit={(e) => submitHandler(e)}
                  className={classes.form}
                >
                  <CssTextField
                    id="name"
                    required
                    label="Your name"
                    variant="outlined"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                  />
                  <CssTextField
                    id="email"
                    type="email"
                    label="Your email"
                    required
                    variant="outlined"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                  <CssTextField
                    id="message"
                    type="text"
                    label="Message"
                    className={classes.textarea}
                    required
                    multiline
                    rows={16}
                    variant="outlined"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                  />
                  <div
                    className={
                      consentError
                        ? classes.checkboxContainerError
                        : classes.checkboxContainer
                    }
                  >
                    <CustomCheckbox
                      checked={legalConsent}
                      onChange={(e) => {
                        setLegalConsent(e.target.checked)
                        setConsentError(false)
                      }}
                    />
                    <span
                      className={
                        consentError
                          ? classes.checkboxLabelError
                          : classes.checkboxLabel
                      }
                    >
                      I grant all permissions required by law in order to send
                      this email
                    </span>
                  </div>
                  <Button type="submit" className={classes.submitBtn}>
                    <SendIcon className={classes.sendIcon} />
                    Send
                  </Button>
                </form>
                <div className={classes.info}>
                  <div className={classes.link}>
                    <a href="mailto:contact@climatemonitor.info">
                      contact@climatemonitor.info
                    </a>
                  </div>
                </div>
              </>
            )}
          </main>
        </div>
        <div className={classes.imageContainer}>
          <img src="/cannoes.jpg" className={classes.image} />
        </div>
      </div>
    </Fragment>
  )
}
export default Contact
