import { styled } from '@mui/material';
import React from 'react';
import { ProductView } from 'shared/types';

import { ProductCard } from './ProductCard';

type ProductListProps = {
  products: ProductView[];
};

const Wrapper = styled('div')`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  grid-auto-rows: 1fr;
  grid-gap: 30px;
`;

export const ProductList = ({ products }: ProductListProps) => {
  return (
    <Wrapper>
      {products?.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </Wrapper>
  );
};
