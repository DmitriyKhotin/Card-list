import React, { FC } from 'react'
import styles from './styles.scss'
import CreditIcon from '../../Atoms/CreditIcon'
import { CardProps } from '../../Organisms/Card/types'

const Company: FC<Partial<CardProps>> = ({ iconUrl}) => {
  return (
    <div className={styles.company}>
      <CreditIcon iconUrl={iconUrl}/>
    </div>
  )
}

export default Company