import { IconButton } from '@mui/material';
import { ReactComponent as SearchIcon } from 'assets/search.svg';
import { useUnit } from 'effector-react';
import { useEffect } from 'react';
import { COLORS } from 'shared/config/colors';
import { Layout } from 'shared/ui/Layout';
import { Spinner } from 'shared/ui/Spinner';

import { $catalogProducts, fetchProducts, fetchProductsFx } from '../model';
import { ProductList } from './ProductList';
import { ContentLayout, GridArea, Search, Title } from './styles';

export const Home = () => {
  const products = useUnit($catalogProducts);
  const loading = useUnit(fetchProductsFx.pending);

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <Layout>
      <ContentLayout>
        <GridArea name="title">
          <Title component="h1" variant="h5">
            Catalog
          </Title>
        </GridArea>
        <GridArea name="search">
          <Search
            fullWidth
            label="Search"
            InputProps={{
              endAdornment: (
                <IconButton>
                  <SearchIcon fill={COLORS[500]} />
                </IconButton>
              ),
            }}
          />
        </GridArea>
        <GridArea name="content" style={{ padding: '20px' }}>
          {loading ? <Spinner color={COLORS[500]} style={{ margin: 'auto' }} /> : <ProductList products={products} />}
        </GridArea>
      </ContentLayout>
    </Layout>
  );
};
