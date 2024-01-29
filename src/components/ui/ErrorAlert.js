import React from 'react'
import classes from './ErrorAlert.module.css'

const ErrorAlert = (props) => {
  return (
    <div className={classes.alert}>{props.children}</div>
  )
}

export default ErrorAlert