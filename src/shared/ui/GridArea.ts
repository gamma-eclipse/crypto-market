import { styled } from '@mui/material';
import { COLORS } from 'shared/config/colors';

export const GridArea = styled('div', { shouldForwardProp: (propName) => propName !== 'name' })<{ name: string }>`
  grid-area: ${(props) => props.name};
  background-color: ${COLORS.bg[100]};
  border-radius: 7px;
`;
