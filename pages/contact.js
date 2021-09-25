import React, { useState, Fragment } from "react"
import Head from "next/head"
import axios from "axios"
// mui
import { Button, TextField } from "@material-ui/core"
import { makeStyles, withStyles } from "@material-ui/styles"
import Checkbox from "@material-ui/core/Checkbox"
import Snackbar from "@material-ui/core/Snackbar"
import MuiAlert from "@material-ui/lab/Alert"
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
      color: theme.palette.common.success,
    },
  },
  checked: {},
}))(Checkbox)

const useStyles = makeStyles((theme) => ({
  container: {
    ...theme.utils.container,
    ...theme.flex.row,
    justifyContent: "flex-start",
    ...theme.typography.pop,
    padding: "4rem 2rem",
    [theme.breakpoints.down("xs")]: {
      padding: "1rem 0 0",
    },
  },
  titleBar: {
    width: "100%",
    zIndex: theme.zIndex.drawer + 1,
    background: `white`,
  },
  sectionHeader: {
    fontFamily: "Poppins",
    fontWeight: 400,
    color: theme.palette.secondary.main,
    fontSize: "4rem",
    maxWidth: 1400,
    margin: "auto",
    marginTop: "6rem",
    marginBottom: "2rem",
    padding: "1rem 2rem",
    [theme.breakpoints.down("md")]: {
      marginLeft: 20,
    },
    position: "relative",
    "&::before": {
      content: "'Contact'",
      position: "absolute",
      bottom: -45,
      left: -50,
      fontSize: "10rem",
      opacity: 0.04,
      whiteSpace: "nowrap",
      color: theme.palette.secondary.light,
    },
  },
  content: {
    position: "relative",
    [theme.breakpoints.down("sm")]: {
      padding: "1.5rem",
    },
    [theme.breakpoints.down("xs")]: {
      width: "min-content",
      minWidth: "80%",
      margin: "0 auto 2rem",
      padding: "1.5rem",
      paddingRight: ".5rem",
    },
  },
  title: {
    fontWeight: 300,
    letterSpacing: 1,
    fontSize: "1.6rem",
    color: theme.palette.secondary.main,
    marginBottom: "3rem",
    [theme.breakpoints.down("xs")]: {
      fontSize: "1.6rem",
      marginBottom: "3rem",
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
      [theme.breakpoints.down("xs")]: {
        width: 280,
      },
    },
  },
  submitBtn: {
    paddingTop: ".7rem",
    backgroundColor: theme.palette.secondary.main,
    transition: "all .3s ease",
    "&:hover": {
      backgroundColor: theme.palette.secondary.main,
    },
    [theme.breakpoints.down("xs")]: {
      fontSize: ".9rem",
      padding: ".6rem 1.6",
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
    paddingRight: "1rem",
    border: `1px solid red`,
    borderRadius: 4,
    [theme.breakpoints.down("xs")]: {
      marginBottom: 0,
    },
  },
  checkboxLabel: {
    fontSize: ".9rem",
    fontWeight: 300,
    color: theme.palette.text.secondary,
    [theme.breakpoints.down("xs")]: {
      fontSize: ".8rem",
    },
  },
  checkboxLabelError: {
    fontSize: ".9rem",
    fontWeight: 300,
    color: "red",
    [theme.breakpoints.down("xs")]: {
      fontSize: ".8rem",
    },
  },
  info: {
    color: theme.palette.text.primary,
    // ...theme.utils.paragraph,
    margin: "4rem 0",
    [theme.breakpoints.down("xs")]: {
      fontSize: ".9rem",
    },
  },
  error: {
    color: "red",
    padding: "2rem 2rem 2rem 0",
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
        "http://localhost:5000/api/email",
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
      <div className={classes.container}>
        <main className={classes.content}>
          {/* <h2 className={classes.title}>Send email</h2> */}
          {error && <div className={classes.error}>{error}</div>}
          {loading ? (
            <Loader />
          ) : (
            <>
              <form onSubmit={(e) => submitHandler(e)} className={classes.form}>
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
                  Send
                </Button>
              </form>
              <div className={classes.info}>
                <div className={classes.link}>
                  Email:{" "}
                  <a href="mailto:contact@climatemonitor.info">
                    contact@climatemonitor.info
                  </a>
                </div>
              </div>
            </>
          )}
        </main>
      </div>
    </Fragment>
  )
}
export default Contact
