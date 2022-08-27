import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Layout } from 'shared/ui/Layout';


export const Product = () => {
  const { id } = useParams();
  return <Layout>Product</Layout>;
};
