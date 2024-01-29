import Link from 'next/link'
import React from 'react'
import classes from './main-header.module.css'

const MainHeader = () => {
  return (
    <header className={classes.header}>
    <div className={classes.logo}>
        <Link href={'/'} >Events</Link>
    </div>
    <nav className={classes.navigation}>
        <ul>
            <li>
                <Link href={'/events'} className={classes.localClass}>All Events</Link>
            </li>
            <li>
                <Link href={'/'} className={classes.localClass}>Featured Events</Link>
            </li>
        </ul>
    </nav>
    </header>
  )
}

export default MainHeader