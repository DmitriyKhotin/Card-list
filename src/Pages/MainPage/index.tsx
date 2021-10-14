import React, { FC, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getCredits } from '../../store/api'
import { useLocation } from 'react-router-dom'
import { CreditsState } from '../../store/slice'
import Card from '../../Components/Organisms/Card'
import styles from './styles.scss'
import LoadCreditsButton from '../../Components/Molecules/LoadCreditsButton'
import Sort from '../../Components/Molecules/Sort'
import Filter from '../../Components/Molecules/Filter'

const MainPage: FC = () => {
  const dispatch = useDispatch()
  const location = useLocation();
  const error = useSelector<CreditsState, CreditsState['error']>( state => state.error)
  const credits = useSelector<CreditsState, CreditsState['credits']>( state => state.credits)
  const loading = useSelector<CreditsState, CreditsState['loading']>( state => state.loading)

  useEffect(() => {
    dispatch(getCredits(location.search))
  }, [])

  if (error) {
    throw new Error()
  }

  if (loading) {
    return <div>loading...</div>
  }

  return (
    <div className={styles.mainPage}>
      <div className={styles.mainPage__header}>
        <Sort/>
        <Filter/>
      </div>
      { credits.map((credit, key) => {
        const { name, organization, rate, customerRequirements, alias} = credit;

        return <Card
          name={name}
          iconUrl={organization.logo}
          rate={rate.periods[0].rate.from}
          amount={rate.creditAmount}
          age={customerRequirements.age}
          documents={customerRequirements.documents}
          license={organization.license}
          alias={alias}
          key={key}
        />
      })}
      <LoadCreditsButton/>
    </div>
  )
}

export default MainPage