import { styled } from '@mui/material';
import { ProductCard } from 'entities/product';
import { AddToCart } from 'features/AddToCart';
import { IProductView } from 'shared/types';

type ProductListProps = {
  products: IProductView[];
};

export const Wrapper = styled('div')`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  grid-auto-rows: 1fr;
  grid-gap: 30px;
`;

export const ProductList = ({ products }: ProductListProps) => {
  return (
    <Wrapper>
      {products?.map((product) => (
        <ProductCard
          key={product.id}
          product={product}
          btns={[<AddToCart productId={product.id} key="add-to-cart" />]}
        />
      ))}
    </Wrapper>
  );
};
