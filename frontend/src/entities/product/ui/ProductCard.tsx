import { Typography, styled } from '@mui/material';
import React from 'react';
import { COLORS } from 'shared/config/colors';
import { ProductView } from 'shared/types';

type ProductCardProps = {
  product: ProductView;
};

const Wrapper = styled('div')`
  display: flex;
  flex-direction: column;
  max-width: 300px;
  background-color: ${COLORS.bg[200]};
  padding: 10px 15px;
  border-radius: 7px;
`;

const Description = styled(Typography)`
  margin-bottom: 10px;
`;

const Price = styled(Typography)`
  margin-top: 5px;
`;

export const ProductCard = ({ product }: ProductCardProps) => {
  return (
    <Wrapper>
      <Typography variant="h5">{product.name}</Typography>
      <Description>{product.shortDescription}</Description>
      <img src={product.image.url} alt={product.name} style={{ marginTop: 'auto' }} />
      <Price>${product.price}</Price>
    </Wrapper>
  );
};
