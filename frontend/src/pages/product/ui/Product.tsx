import { Typography } from '@mui/material';
import { useUnit } from 'effector-react';
import { Enchantment } from 'entities/product';
import { AddToCart } from 'features/AddToCart';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { GridArea } from 'shared/ui/GridArea';
import { Layout } from 'shared/ui/Layout';
import { Spinner } from 'shared/ui/Spinner';

import { $product, fetchProduct } from '../model';
import { Content, ContentLayout, Enchants, Payment, ProductView } from './styles';

export const Product = () => {
  const { id } = useParams();
  const product = useUnit($product);

  useEffect(() => {
    fetchProduct(id!);
  }, [id]);

  return (
    <Layout>
      <ContentLayout>
        <GridArea name="image">
          <ProductView>{product && <img src={product.image.url} alt={product.name} />}</ProductView>
        </GridArea>
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
