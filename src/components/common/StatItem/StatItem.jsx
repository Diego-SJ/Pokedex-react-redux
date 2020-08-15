import React from 'react';
import { Stat, StatName, StatBase } from './StatItem.styled';

const StatItem = ({ title, value }) => {
  return (
    <Stat>
      {title && <StatName>{title}</StatName>}
      {value && <StatBase>{value}</StatBase>}
    </Stat>
  );
};

export default StatItem;
