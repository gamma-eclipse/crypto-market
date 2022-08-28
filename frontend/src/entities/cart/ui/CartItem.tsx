import styled from '@emotion/styled';
import { Checkbox, Typography } from '@mui/material';
import { CartItemCount } from 'features/CartItemCount';
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
  grid-gap: 15px;

  background-color: ${COLORS.bg[200]};
  border-radius: 7px;
  padding: 15px;
`;

export const ForCheckout = styled(Checkbox)`
  align-self: flex-start;
`;

const Price = styled(Typography)`
  margin: 10px 0 17px;
`;

export const CartItem = ({ product }: CartItemProps) => {
  return (
    <Wrapper>
      <ForCheckout />
      <img src={product.image.url} alt={product.name} />
      <div>
        <Typography fontSize={20}>{product.name}</Typography>
        <Price>${product.price}</Price>
        <CartItemCount productId={product.id} />
      </div>
    </Wrapper>
  );
};
