import { Link as MUILink, Typography, styled } from '@mui/material';
import React from 'react';
import { Link } from 'react-router-dom';
import { ROUTES } from 'shared/config/routes';
import { Layout } from 'shared/ui/Layout';

const Message = styled('div')`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
`;

export const Error404 = () => {
  return (
    <Layout>
      <Message>
        <Typography variant="h4">404 Not Found</Typography>
        <MUILink to={ROUTES.home} component={Link} fontFamily="Silkscreen, sans-serif" fontSize={20}>
          Go to homepage
        </MUILink>
      </Message>
    </Layout>
  );
};
