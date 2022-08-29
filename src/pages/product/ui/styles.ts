import { styled } from '@mui/material';

export const Content = styled('div')`
  display: grid;
  grid-gap: 15px;
  padding: 10px 15px;
`;
export const ContentLayout = styled('div')`
  display: grid;
  grid-gap: 25px;
  grid-template:
    'image content' fit-content(100%)
    '. content' 1fr / fit-content(100%) 1fr;
`;
export const Payment = styled('div')`
  display: grid;
  grid-auto-flow: column;
  justify-content: flex-start;
  align-items: center;
  grid-gap: 25px;
`;
export const Enchants = styled('div')`
  margin-top: 5px;
  display: grid;
  grid-auto-flow: column;
  justify-content: flex-start;
  grid-gap: 10px;
`;
export const ProductView = styled('div')`
  max-width: 450px;
  padding: 15px;
`;
