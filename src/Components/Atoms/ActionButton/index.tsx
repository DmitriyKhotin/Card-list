import React, { FC } from 'react'
import styles from './styles.scss'
import { Link } from 'react-router-dom'

const ActionButton: FC<{alias: string}> = ({alias}) => {

  return (
    <Link to={'/programs/' + alias} className={styles.actionButton}>
      <button className={styles.actionButton__button}>ПЕРЕЙТИ НА САЙТ</button>
    </Link>
  )
}

export default ActionButton