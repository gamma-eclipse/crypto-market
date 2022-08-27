import { Typography } from '@mui/material';
import { AddToCart } from 'entities/cart';
import { ProductView } from 'shared/types';

import { Description, Price, Wrapper } from './styles/ProductCard';

type ProductCardProps = {
  product: ProductView;
};

export const ProductCard = ({ product }: ProductCardProps) => {
  return (
    <Wrapper>
      <Typography variant="h5">{product.name}</Typography>
      <Description>{product.shortDescription}</Description>
      <img src={product.image.url} alt={product.name} style={{ marginTop: 'auto' }} />
      <Price>${product.price}</Price>
      <AddToCart productId={product.id} />
    </Wrapper>
  );
};
