import { Typography, styled } from '@mui/material';
import { useUnit } from 'effector-react';
import { Enchantment } from 'entities/product';
import { AddToCart } from 'features/AddToCart';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { GridArea } from 'shared/ui/GridArea';
import { Layout } from 'shared/ui/Layout';
import { Spinner } from 'shared/ui/Spinner';

import { $product, fetchProduct } from '../model';

const Content = styled('div')`
  display: grid;
  grid-gap: 15px;
  padding: 10px 15px;
`;

const ContentLayout = styled('div')`
  display: grid;
  grid-gap: 25px;
  grid-template:
    'slider content' fit-content(100%)
    '. content' 1fr / fit-content(100%) 1fr;
`;

const Payment = styled('div')`
  display: grid;
  grid-auto-flow: column;
  justify-content: flex-start;
  align-items: center;
  grid-gap: 25px;
`;

const Enchants = styled('div')`
  margin-top: 5px;
  display: grid;
  grid-auto-flow: column;
  justify-content: flex-start;
  grid-gap: 10px;
`;

export const Product = () => {
  const { id } = useParams();
  const product = useUnit($product);

  useEffect(() => {
    fetchProduct(id!);
  }, [id]);

  return (
    <Layout>
      <ContentLayout>
        <GridArea name="content">
          {product ? (
            <Content>
              <div>
                <Typography variant="h4">{product.name}</Typography>
                <Typography>{product.description}</Typography>
              </div>
              <Payment>
                <Typography>${product.price}</Typography>
                <AddToCart productId={product.id} />
              </Payment>
              <div>
                <Typography variant="h5">Complectation</Typography>
                <Typography>{product.complectation}</Typography>
              </div>
              <div>
                {product.enchants && (
                  <>
                    <Typography variant="h5">Enchants</Typography>
                    <Enchants>
                      {product.enchants.map((enchant) => (
                        <Enchantment key={enchant.name + enchant.level.toString()} enchant={enchant} />
                      ))}
                    </Enchants>
                  </>
                )}
              </div>
            </Content>
          ) : (
            <Spinner style={{ margin: 'auto' }} />
          )}
        </GridArea>
      </ContentLayout>
    </Layout>
  );
};
