import React, { FC } from 'react'
import styles from './styles.scss'
import CreditIcon from '../../Atoms/CreditIcon'
import Note from '../../Atoms/Note'
import ActionButton from '../../Atoms/ActionButton'
import { CardProps } from '../../Organisms/Card/types'

const ActionPanel: FC<Partial<CardProps>> = ({license, alias}) => {
  return (
    <div className={styles.actionPanel}>
      <Note text={'лиц. № ' + license}/>
      <ActionButton alias={alias}/>
    </div>
  )
}

export default ActionPanel