import React, { FC } from 'react'
import styles from './styles.scss'
import CreditIcon from '../../Atoms/CreditIcon'
import Note from '../../Atoms/Note'
import ActionButton from '../../Atoms/ActionButton'
import { CardProps } from '../../Organisms/Card/types'

const Rate: FC<Partial<CardProps>> = ({rate, name}) => {
  return (
    <div className={styles.rate}>
      <p className={styles.rate_percent}>{ rate }%</p>
      <Note text={'«' + name + '»'}/>
    </div>
  )
}

export default Rate