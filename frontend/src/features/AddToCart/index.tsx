import { Button } from '@mui/material';
import { addToCart } from 'entities/cart';
import React from 'react';

type AddToCartProps = {
  productId: string;
};

export const AddToCart = ({ productId }: AddToCartProps) => {
  return (
    <Button variant="contained" onClick={() => addToCart(productId)}>
      Add to Cart
    </Button>
  );
};
