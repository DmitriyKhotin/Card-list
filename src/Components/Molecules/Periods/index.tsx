import React, { FC } from 'react'
import styles from './styles.scss'
import CreditIcon from '../../Atoms/CreditIcon'
import Note from '../../Atoms/Note'
import ActionButton from '../../Atoms/ActionButton'
import { Range } from '../../../store/slice'
import { CardProps } from '../../Organisms/Card/types'

const Periods: FC<Partial<CardProps>> = ({amount}) => {
  return (
    <div className={styles.periods}>
      <span className={styles.periods__amount}>{ !amount.to && 'от '} { amount.from }₽</span>
      {amount.to && <span className={styles.periods__amount}> - { amount.to }₽</span>}
    </div>
  )
}

export default Periods