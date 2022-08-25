import { IconButton } from '@mui/material';
import { ReactComponent as SearchIcon } from 'assets/search.svg';
import { Layout } from 'shared/ui/Layout';

import { ContentLayout, GridArea, Search, Title } from './styles';

export const Home = () => {
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
      </ContentLayout>
    </Layout>
  );
};
