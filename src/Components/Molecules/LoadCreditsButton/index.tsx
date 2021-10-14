import React, { FC, useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { CreditsState } from '../../../store/slice';
import { fetchNewCredits } from '../../../store/api';

import styles from './styles.scss';

const LoadCreditsButton: FC = () => {
  const count = useSelector<CreditsState, CreditsState['count']>(
    (state) => state.count
  );
  const currentCount = useSelector<CreditsState, number>(
    (state) => state.credits.length
  );
  const dispatch = useDispatch();

  const countDiff = useMemo<number>(
    () => count - currentCount,
    [count, currentCount]
  );

  const countToFetch = useMemo<number>(
    () => (countDiff >= 10 ? 10 : countDiff),
    [countDiff]
  );

  if (!countDiff) {
    return null;
  }

  return (
    <div
      className={styles.loadCreditsButton__button}
      onClick={() =>
        dispatch(
          fetchNewCredits({
            from: currentCount,
            to: currentCount + countToFetch,
          })
        )
      }
    >
      <span>
        Показать еще {countToFetch} из {countDiff}
      </span>
    </div>
  );
};

export default LoadCreditsButton;
