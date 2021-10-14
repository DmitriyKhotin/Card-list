import React, { FC } from 'react';

import Note from '../../Atoms/Note';
import ActionButton from '../../Atoms/ActionButton';
import { CardProps } from '../../Organisms/Card/types';

const ActionPanel: FC<Partial<CardProps>> = ({ license, alias }) => (
  <div>
    <Note text={'лиц. № ' + license} />
    <ActionButton alias={alias} />
  </div>
);

export default ActionPanel;
