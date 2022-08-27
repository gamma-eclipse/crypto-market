import { Typography } from '@mui/material';
import { ReactNode } from 'react';
import { ProductView } from 'shared/types';

import { Description, Price, Wrapper } from './styles';

type ProductCardProps = {
  product: ProductView;
  btns?: ReactNode[];
};

export const ProductCard = ({ product, btns }: ProductCardProps) => {
  return (
    <Wrapper>
      <Typography variant="h5">{product.name}</Typography>
      <Description>{product.shortDescription}</Description>
      <img src={product.image.url} alt={product.name} style={{ marginTop: 'auto' }} />
      <Price>${product.price}</Price>
      {btns}
    </Wrapper>
  );
};
