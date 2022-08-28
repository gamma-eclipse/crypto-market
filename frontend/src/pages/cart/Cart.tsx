import styled from '@emotion/styled';
import { Checkbox, Typography } from '@mui/material';
import { useUnit } from 'effector-react';
import React, { useEffect } from 'react';
import { COLORS } from 'shared/config/colors';
import { GridArea } from 'shared/ui/GridArea';
import { Layout } from 'shared/ui/Layout';
import { Spinner } from 'shared/ui/Spinner';

import { $products, fetchProducts, fetchProductsFx } from './model';

export const ContentLayout = styled('div')`
  display: grid;
  grid-gap: 25px;
  grid-template:
    'title   choose-all .       checkout' fit-content(100%)
    'content content    content .       ' 1fr / 300px fit-content(100%) 1fr 1fr;
`;

export const PageTitle = styled(Typography)`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
` as typeof Typography;

export const ChooseAll = styled('div')`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  padding: 5px 15px;
`;

const CartList = styled('div')`
  display: grid;
  grid-gap: 25px;
`;

const CartItem = styled('div')`
  display: grid;
  grid-auto-flow: column;
  grid-template-columns: fit-content(100%) minmax(150px, 250px) fit-content(100%);
  grid-gap: 20px;

  background-color: ${COLORS.bg[200]};
  border-radius: 7px;
  padding: 15px;
`;

const CartItemContent = styled('div')`
  display: grid;
  grid-gap: 15px;
  grid-auto-rows: fit-content(100%);
`;

const Amount = styled('div')`
  display: grid;
  grid-auto-flow: column;
  grid-gap: 25px;
  justify-content: flex-start;
  align-items: center;
`;

export const Cart = () => {
  const products = useUnit($products);
  const loading = useUnit(fetchProductsFx.pending);

  useEffect(() => {
    fetchProducts('USER ID');
  }, []);

  return (
    <Layout>
      <ContentLayout>
        <GridArea name="title">
          <PageTitle component="h1" variant="h5">
            Cart (5)
          </PageTitle>
        </GridArea>
        <GridArea name="choose-all">
          <ChooseAll>
            <Typography component="h2" variant="h5">
              Choose all
            </Typography>
            <Checkbox />
          </ChooseAll>
        </GridArea>
        <GridArea name="content" style={{ padding: '20px' }}>
          {loading ? (
            <Spinner style={{ margin: 'auto' }} />
          ) : (
            <CartList>
              {products.map((product) => (
                <CartItem key={product.id}>
                  <Checkbox style={{ alignSelf: 'flex-start' }} />
                  <img src={product.image.url} alt={product.name} />
                  <CartItemContent>
                    <Typography fontSize={20}>{product.name}</Typography>
                    <Typography>${product.price}</Typography>
                    <Amount>
                      <div className="less">-</div>
                      <div>5</div>
                      <div className="more">+</div>
                    </Amount>
                  </CartItemContent>
                </CartItem>
              ))}
            </CartList>
          )}
        </GridArea>
      </ContentLayout>
    </Layout>
  );
};
