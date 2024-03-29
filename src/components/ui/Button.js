import Link from "next/link";
import React from "react";
import classes from "./Button.module.css";

const Button = (props) => {
  if (props.link) {
    return (
      <Link href={props.link} legacyBehavior>
        <a className={classes.btn}>{props.children}</a>
      </Link>
    );
  }

  return (
    <button onClick={props.onClick} className={classes.btn}>
      {props.children}
    </button>
  );
};

export default Button;
