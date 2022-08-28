import { ReactNode } from 'react';
import { Link } from 'react-router-dom';
import { ROUTES } from 'shared/config/routes';
import { IProductView } from 'shared/types';

import { Description, Price, Title, Wrapper } from './styles';

type ProductCardProps = {
  product: IProductView;
  btns?: ReactNode[];
};

export const ProductCard = ({ product, btns }: ProductCardProps) => {
  return (
    <Wrapper>
      <Title component={Link} to={`${ROUTES.product}/${product.id}`} variant="h5">
        {product.name}
      </Title>
      <Description>{product.shortDescription}</Description>
      <img src={product.image.url} alt={product.name} style={{ marginTop: 'auto' }} />
      <Price>${product.price}</Price>
      {btns}
    </Wrapper>
  );
};
