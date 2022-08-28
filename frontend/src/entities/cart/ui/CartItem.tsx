import styled from '@emotion/styled';
import { Checkbox, Typography } from '@mui/material';
import React from 'react';
import { COLORS } from 'shared/config/colors';
import { IProductView } from 'shared/types';

type CartItemProps = {
  product: IProductView;
};

const Wrapper = styled('div')`
  display: grid;
  grid-auto-flow: column;
  grid-template-columns: fit-content(100%) minmax(150px, 250px) fit-content(100%);
  grid-gap: 20px;

  background-color: ${COLORS.bg[200]};
  border-radius: 7px;
  padding: 15px;
`;

const CartItemContent = styled('div')`
  display: grid;
  grid-gap: 15px;
  grid-auto-rows: fit-content(100%);
`;

const Amount = styled('div')`
  display: grid;
  grid-auto-flow: column;
  grid-gap: 25px;
  justify-content: flex-start;
  align-items: center;
`;

export const CartItem = ({ product }: CartItemProps) => {
  return (
    <Wrapper>
      <Checkbox style={{ alignSelf: 'flex-start' }} />
      <img src={product.image.url} alt={product.name} />
      <CartItemContent>
        <Typography fontSize={20}>{product.name}</Typography>
        <Typography>${product.price}</Typography>
        <Amount>
          <div className="less">-</div>
          <div>5</div>
          <div className="more">+</div>
        </Amount>
      </CartItemContent>
    </Wrapper>
  );
};
