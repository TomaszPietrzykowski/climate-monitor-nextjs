import React from "react"
import Typography from "@material-ui/core/Typography"
import MuiLink from "@material-ui/core/Link"

export default function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {"Copyright © Tomasz Pietrzykowski"}
      <MuiLink color="inherit" href="https://tomaszpietrzykowski.com/">
        tomaszpietrzykowski.com
      </MuiLink>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  )
}
