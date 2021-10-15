import React, { FC } from 'react';

import Note from '../../Atoms/Note';
import { CardProps } from '../../Organisms/Card/types';

const Rate: FC<Partial<CardProps>> = ({ rate, name }) => (
  <div>
    <p>{rate}%</p>
    <Note text={'«' + name + '»'} />
  </div>
);

export default Rate;
