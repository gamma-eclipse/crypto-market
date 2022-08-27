import { ProductView } from 'shared/types';

import { ProductCard } from './ProductCard';
import { Wrapper } from './styles/ProductList';

type ProductListProps = {
  products: ProductView[];
};

export const ProductList = ({ products }: ProductListProps) => {
  return (
    <Wrapper>
      {products?.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </Wrapper>
  );
};
