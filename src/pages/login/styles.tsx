import { Button, Card, CardContent, styled } from '@mui/material';
import { COLORS } from 'shared/config/colors';

export const ContentLayout = styled('div')`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: ${COLORS.bg[100]};
`;

export const LoginCard = styled(Card)`
  max-width: 600px;
  text-align: center;
`;

export const LoginLayout = styled(CardContent)`
  display: grid;
  justify-content: center;
  grid-gap: 20px;
`;

export const ActionArea = styled('div')`
  display: flex;
  justify-content: space-between;
`;

export const ActionBtn = styled(Button)`
  width: 150px;
  justify-self: center;
`;

export const ExtraArea = styled('div')`
  text-align: start;
`;
