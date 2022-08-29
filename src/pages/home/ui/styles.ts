import { TextField, Typography, styled } from '@mui/material';
import { COLORS } from 'shared/config/colors';

export const ContentLayout = styled('div')`
  display: grid;
  grid-gap: 25px;
  grid-template:
    'title search .' fit-content(100%)
    'filter content content' fit-content(100%)
    '. content content' 1fr / 300px 2fr 1fr;
`;

export const Title = styled(Typography)`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
` as typeof Typography;

export const Search = styled(TextField)`
  .MuiOutlinedInput-notchedOutline {
    border-width: 3px !important;
    border-color: ${COLORS[500]} !important;
  }
`;
