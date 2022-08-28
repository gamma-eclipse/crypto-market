import { styled } from '@mui/material';
import React from 'react';

type CartItemCountProps = {
  productId: string;
};

const Amount = styled('div')`
  display: grid;
  grid-auto-flow: column;
  grid-gap: 25px;
  justify-content: flex-start;
  align-items: center;
`;

export const CartItemCount = ({ productId }: CartItemCountProps) => {
  return (
    <Amount>
      <div className="less">-</div>
      <div>5</div>
      <div className="more">+</div>
    </Amount>
  );
};
