import { Typography } from '@mui/material';
import React from 'react';
import { ProductView } from 'shared/types';

type ProductCardProps = {
  product: ProductView;
};

export const ProductCard = ({ product }: ProductCardProps) => {
  return (
    <div>
      <Typography>{product.name}</Typography>
      <Typography>{product.shortDescription}</Typography>
      <Typography>${product.price}</Typography>
      <img src={product.image.url} alt={product.name} />
    </div>
  );
};
