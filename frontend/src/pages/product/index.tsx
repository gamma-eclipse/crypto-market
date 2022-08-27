import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Layout } from 'shared/ui/Layout';

import { fetchProduct } from './model';

export const Product = () => {
  const { id } = useParams();

  useEffect(() => {
    fetchProduct(id!);
  }, [id]);

  return <Layout>Product</Layout>;
};
