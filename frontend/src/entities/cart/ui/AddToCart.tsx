import { Button } from '@mui/material';
import React from 'react';

import { addToCart } from '../model';

type AddToCartProps = React.PropsWithChildren<{
  productId: string;
}>;

export const AddToCart = ({ productId }: AddToCartProps) => {
  return (
    <Button variant="contained" onClick={() => addToCart(productId)}>
      Add to Cart
    </Button>
  );
};
