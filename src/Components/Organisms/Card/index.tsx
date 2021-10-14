import React, { FC } from 'react'
import styles from './styles.scss'
import CreditIcon from '../../Atoms/CreditIcon'
import Note from '../../Atoms/Note'
import Company from '../../Molecules/Company'
import Rate from '../../Molecules/Rate'
import Periods from '../../Molecules/Periods'
import Description from '../../Molecules/Description'
import ActionPanel from '../../Molecules/ActionPanel'
import { CardProps } from './types'

const Card: FC<CardProps> =
  ({
     documents,
     age,
     alias,
     amount,
     iconUrl,
     license,
     rate,
     name
  }) => {
    return (
      <div className={styles.card}>
        <div className={styles.card__elem__container}>
          <div className={styles.card__elem__content}>
            <Company iconUrl={iconUrl}/>
          </div>
        </div>
        <div className={styles.card__elem__container}>
          <div className={styles.card__elem__content}>
            <Rate rate={rate} name={name}/>
          </div>
        </div>
        <div className={styles.card__elem__container}>
          <div className={styles.card__elem__content}>
            <Periods amount={amount}/>
          </div>
        </div>
        <div className={styles.card__elem__container}>
          <div className={styles.card__elem__content}>
            <Description age={age} documents={documents}/>
          </div>
        </div>
        <div className={styles.card__elem__container}>
          <div className={styles.card__elem__content}>
            <ActionPanel license={license} alias={alias}/>
          </div>
        </div>
      </div>
  )
}

export default Card