import React, { FC, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

import { CreditsState } from '../../store/slice';
import { fetchCurrentCredit } from '../../store/api';
import Table from '../../Components/Organisms/Table';

const CardPage: FC = () => {
  const currentCredit = useSelector<
    CreditsState,
    CreditsState['currentCredit']
  >((state) => state.currentCredit);
  const loading = useSelector<CreditsState, CreditsState['loading']>(
    (state) => state.loading
  );
  const error = useSelector<CreditsState, CreditsState['error']>(
    (state) => state.error
  );
  const dispatch = useDispatch();
  const params = useParams<{ alias: string }>();

  useEffect(() => {
    dispatch(fetchCurrentCredit(params.alias));
  }, []);

  if (error) {
    throw new Error();
  }

  if (loading || !currentCredit) {
    return <div>...loading</div>;
  }

  return <Table {...currentCredit} />;
};

export default CardPage;
