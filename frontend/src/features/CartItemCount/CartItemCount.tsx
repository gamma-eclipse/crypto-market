import { styled } from '@mui/material';
import React, { useState } from 'react';

import { Count, Less, More } from './styles';

type CartItemCountProps = {
  productId: string;
};

const Amount = styled('div')`
  display: grid;
  grid-auto-flow: column;
  grid-gap: 13px;
  justify-content: flex-start;
  align-items: center;
`;

export const CartItemCount = ({ productId }: CartItemCountProps) => {
  const [value, setValue] = useState(5);

  return (
    <Amount>
      <Less onClick={() => setValue((v) => (v > 0 ? v - 1 : 0))} />
      <Count>{value}</Count>
      <More onClick={() => setValue((v) => (v >= 0 ? v + 1 : 0))} />
    </Amount>
  );
};
