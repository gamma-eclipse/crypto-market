import { IconButton } from '@mui/material';
import { ReactComponent as SearchIcon } from 'assets/search.svg';
import { useUnit } from 'effector-react';
import { $catalogProducts, $isLoading, fetchProducts, fetchProductsFx } from 'entities/catalog';
import { ProductCard } from 'entities/product';
import { useEffect } from 'react';
import { COLORS } from 'shared/config/colors';
import { Layout } from 'shared/ui/Layout';
import { Spinner } from 'shared/ui/Spinner';

import { ContentLayout, GridArea, Search, Title } from './styles';

export const Home = () => {
  const products = useUnit($catalogProducts);
  const loading = useUnit($isLoading);

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
                  <SearchIcon />
                </IconButton>
              ),
            }}
          />
        </GridArea>
        <GridArea name="content" style={{ padding: '5px 10px' }}>
          {loading ? (
            <Spinner color={COLORS[500]} style={{ margin: 'auto' }} />
          ) : (
            products?.map((product) => <ProductCard key={product.id} product={product} />)
          )}
        </GridArea>
      </ContentLayout>
    </Layout>
  );
};
