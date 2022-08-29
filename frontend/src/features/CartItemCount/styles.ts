import { Typography, css, styled } from '@mui/material';
import { COLORS } from 'shared/config/colors';

const btnCss = css`
  border: none;
  cursor: pointer;
  position: relative;
  border-radius: 50%;
  width: 30px;
  height: 30px;
  background-color: ${COLORS[500]};
`;

const minusCss = css`
  &::before {
    content: '';
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    width: 55%;
    height: 2px;
    background-color: #fff;
  }
`;
export const Less = styled('button')`
  ${btnCss}
  ${minusCss}
`;

export const Count = styled(Typography)`
  border-radius: 50px;
  display: flex;
  align-items: center;
  color: #fff;
  height: 30px;
  padding: 0 10px;
  background-color: ${COLORS[500]};
`;

export const More = styled('button')`
  ${btnCss}
  ${minusCss}

  &::after {
    content: '';
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%) rotate(90deg);
    width: 55%;
    height: 2px;
    background-color: #fff;
  }
`;
