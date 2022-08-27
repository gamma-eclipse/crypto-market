import styled from '@emotion/styled';
import { Typography } from '@mui/material';
import { COLORS } from 'shared/config/colors';

export const Wrapper = styled('div')`
  display: flex;
  flex-direction: column;
  max-width: 300px;
  background-color: ${COLORS.bg[200]};
  padding: 10px 15px;
  border-radius: 7px;
`;

export const Description = styled(Typography)`
  margin-bottom: 10px;
`;

export const Price = styled(Typography)`
  margin-top: 5px;
`;
