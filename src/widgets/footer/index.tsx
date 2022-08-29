import { Typography, styled } from '@mui/material';
import React from 'react';

const Wrapper = styled('footer')`
  margin-top: auto;
  padding: 10px 15px;
`;

const Copy = styled(Typography)`
  text-align: center;
`;

export const Footer = () => {
  return (
    <Wrapper>
      <Copy>Copyright © 2022. All rights reserved</Copy>
    </Wrapper>
  );
};
