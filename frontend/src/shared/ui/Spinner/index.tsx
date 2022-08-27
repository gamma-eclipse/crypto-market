import { Box, styled } from '@mui/material';

const Wrapper = styled('div')`
  position: relative;
  width: 70px;
  height: 70px;
` as typeof Box;

export const Loader = styled('div', { shouldForwardProp: (propName) => propName !== 'color' })`
  animation: spin 1s linear infinite;
  height: 10px;
  width: 10px;
  position: absolute;
  top: 50%;
  left: 50%;
  margin: -5px;

  @keyframes spin {
    0% {
      box-shadow: 0px -10px ${(props) => props.color}, 15px -10px ${(props) => props.color},
        5px -20px ${(props) => props.color}, 15px -5px ${(props) => props.color}, 15px 0px ${(props) => props.color},
        15px 15px ${(props) => props.color}, 5px 5px ${(props) => props.color}, 15px 15px ${(props) => props.color},
        0px 15px transparent, -15px 15px transparent, -20px 5px transparent, -10px 15px transparent,
        -10px 0px transparent, -10px -15px transparent, -10px 20px transparent, -15px -10px transparent;
    }
    6.25% {
      box-shadow: 0px -10px transparent, 15px -10px ${(props) => props.color}, 5px -20px ${(props) => props.color},
        15px -5px ${(props) => props.color}, 15px 0px ${(props) => props.color}, 15px 15px ${(props) => props.color},
        5px 5px ${(props) => props.color}, 15px 15px ${(props) => props.color}, 0px 15px ${(props) => props.color},
        -15px 15px transparent, -20px 5px transparent, -10px 15px transparent, -10px 0px transparent,
        -10px -15px transparent, -10px 20px transparent, -15px -10px transparent;
    }
    12.5% {
      box-shadow: 0px -10px transparent, 15px -10px transparent, 5px -20px ${(props) => props.color},
        15px -5px ${(props) => props.color}, 15px 0px ${(props) => props.color}, 15px 15px ${(props) => props.color},
        5px 5px ${(props) => props.color}, 15px 15px ${(props) => props.color}, 0px 15px ${(props) => props.color},
        -15px 15px ${(props) => props.color}, -20px 5px transparent, -10px 15px transparent, -10px 0px transparent,
        -10px -15px transparent, -10px 20px transparent, -15px -10px transparent;
    }
    18.75% {
      box-shadow: 0px -10px transparent, 15px -10px transparent, 5px -20px transparent,
        15px -5px ${(props) => props.color}, 15px 0px ${(props) => props.color}, 15px 15px ${(props) => props.color},
        5px 5px ${(props) => props.color}, 15px 15px ${(props) => props.color}, 0px 15px ${(props) => props.color},
        -15px 15px ${(props) => props.color}, -20px 5px ${(props) => props.color}, -10px 15px transparent,
        -10px 0px transparent, -10px -15px transparent, -10px 20px transparent, -15px -10px transparent;
    }
    25% {
      box-shadow: 0px -10px transparent, 15px -10px transparent, 5px -20px transparent, 15px -5px transparent,
        15px 0px ${(props) => props.color}, 15px 15px ${(props) => props.color}, 5px 5px ${(props) => props.color},
        15px 15px ${(props) => props.color}, 0px 15px ${(props) => props.color}, -15px 15px ${(props) => props.color},
        -20px 5px ${(props) => props.color}, -10px 15px ${(props) => props.color}, -10px 0px transparent,
        -10px -15px transparent, -10px 20px transparent, -15px -10px transparent;
    }
    31.25% {
      box-shadow: 0px -10px transparent, 15px -10px transparent, 5px -20px transparent, 15px -5px transparent,
        15px 0px transparent, 15px 15px ${(props) => props.color}, 5px 5px ${(props) => props.color},
        15px 15px ${(props) => props.color}, 0px 15px ${(props) => props.color}, -15px 15px ${(props) => props.color},
        -20px 5px ${(props) => props.color}, -10px 15px ${(props) => props.color}, -10px 0px ${(props) => props.color},
        -10px -15px transparent, -10px 20px transparent, -15px -10px transparent;
    }
    37.5% {
      box-shadow: 0px -10px transparent, 15px -10px transparent, 5px -20px transparent, 15px -5px transparent,
        15px 0px transparent, 15px 15px transparent, 5px 5px ${(props) => props.color},
        15px 15px ${(props) => props.color}, 0px 15px ${(props) => props.color}, -15px 15px ${(props) => props.color},
        -20px 5px ${(props) => props.color}, -10px 15px ${(props) => props.color}, -10px 0px ${(props) => props.color},
        -10px -15px ${(props) => props.color}, -10px 20px transparent, -15px -10px transparent;
    }
    43.75% {
      box-shadow: 0px -10px transparent, 15px -10px transparent, 5px -20px transparent, 15px -5px transparent,
        15px 0px transparent, 15px 15px transparent, 5px 5px transparent, 15px 15px ${(props) => props.color},
        0px 15px ${(props) => props.color}, -15px 15px ${(props) => props.color}, -20px 5px ${(props) => props.color},
        -10px 15px ${(props) => props.color}, -10px 0px ${(props) => props.color}, -10px -15px ${(props) => props.color},
        -10px 20px ${(props) => props.color}, -15px -10px transparent;
    }
    50% {
      box-shadow: 0px -10px transparent, 15px -10px transparent, 5px -20px transparent, 15px -5px transparent,
        15px 0px transparent, 15px 15px transparent, 5px 5px transparent, 15px 15px transparent,
        0px 15px ${(props) => props.color}, -15px 15px ${(props) => props.color}, -20px 5px ${(props) => props.color},
        -10px 15px ${(props) => props.color}, -10px 0px ${(props) => props.color}, -10px -15px ${(props) => props.color},
        -10px 20px ${(props) => props.color}, -15px -10px ${(props) => props.color};
    }
    56.25% {
      box-shadow: 0px -10px ${(props) => props.color}, 15px -10px transparent, 5px -20px transparent,
        15px -5px transparent, 15px 0px transparent, 15px 15px transparent, 5px 5px transparent, 15px 15px transparent,
        0px 15px transparent, -15px 15px ${(props) => props.color}, -20px 5px ${(props) => props.color},
        -10px 15px ${(props) => props.color}, -10px 0px ${(props) => props.color}, -10px -15px ${(props) => props.color},
        -10px 20px ${(props) => props.color}, -15px -10px ${(props) => props.color};
    }
    62.5% {
      box-shadow: 0px -10px ${(props) => props.color}, 15px -10px ${(props) => props.color}, 5px -20px transparent,
        15px -5px transparent, 15px 0px transparent, 15px 15px transparent, 5px 5px transparent, 15px 15px transparent,
        0px 15px transparent, -15px 15px transparent, -20px 5px ${(props) => props.color},
        -10px 15px ${(props) => props.color}, -10px 0px ${(props) => props.color}, -10px -15px ${(props) => props.color},
        -10px 20px ${(props) => props.color}, -15px -10px ${(props) => props.color};
    }
    68.75% {
      box-shadow: 0px -10px ${(props) => props.color}, 15px -10px ${(props) => props.color},
        5px -20px ${(props) => props.color}, 15px -5px transparent, 15px 0px transparent, 15px 15px transparent,
        5px 5px transparent, 15px 15px transparent, 0px 15px transparent, -15px 15px transparent, -20px 5px transparent,
        -10px 15px ${(props) => props.color}, -10px 0px ${(props) => props.color}, -10px -15px ${(props) => props.color},
        -10px 20px ${(props) => props.color}, -15px -10px ${(props) => props.color};
    }
    75% {
      box-shadow: 0px -10px ${(props) => props.color}, 15px -10px ${(props) => props.color},
        5px -20px ${(props) => props.color}, 15px -5px ${(props) => props.color}, 15px 0px transparent,
        15px 15px transparent, 5px 5px transparent, 15px 15px transparent, 0px 15px transparent, -15px 15px transparent,
        -20px 5px transparent, -10px 15px transparent, -10px 0px ${(props) => props.color},
        -10px -15px ${(props) => props.color}, -10px 20px ${(props) => props.color},
        -15px -10px ${(props) => props.color};
    }
    81.25% {
      box-shadow: 0px -10px ${(props) => props.color}, 15px -10px ${(props) => props.color},
        5px -20px ${(props) => props.color}, 15px -5px ${(props) => props.color}, 15px 0px ${(props) => props.color},
        15px 15px transparent, 5px 5px transparent, 15px 15px transparent, 0px 15px transparent, -15px 15px transparent,
        -20px 5px transparent, -10px 15px transparent, -10px 0px transparent, -10px -15px ${(props) => props.color},
        -10px 20px ${(props) => props.color}, -15px -10px ${(props) => props.color};
    }
    87.5% {
      box-shadow: 0px -10px ${(props) => props.color}, 15px -10px ${(props) => props.color},
        5px -20px ${(props) => props.color}, 15px -5px ${(props) => props.color}, 15px 0px ${(props) => props.color},
        15px 15px ${(props) => props.color}, 5px 5px transparent, 15px 15px transparent, 0px 15px transparent,
        -15px 15px transparent, -20px 5px transparent, -10px 15px transparent, -10px 0px transparent,
        -10px -15px transparent, -10px 20px ${(props) => props.color}, -15px -10px ${(props) => props.color};
    }
    93.75% {
      box-shadow: 0px -10px ${(props) => props.color}, 15px -10px ${(props) => props.color},
        5px -20px ${(props) => props.color}, 15px -5px ${(props) => props.color}, 15px 0px ${(props) => props.color},
        15px 15px ${(props) => props.color}, 5px 5px ${(props) => props.color}, 15px 15px transparent,
        0px 15px transparent, -15px 15px transparent, -20px 5px transparent, -10px 15px transparent,
        -10px 0px transparent, -10px -15px transparent, -10px 20px transparent, -15px -10px ${(props) => props.color};
    }
    100% {
      box-shadow: 0px -10px ${(props) => props.color}, 15px -10px ${(props) => props.color},
        5px -20px ${(props) => props.color}, 15px -5px ${(props) => props.color}, 15px 0px ${(props) => props.color},
        15px 15px ${(props) => props.color}, 5px 5px ${(props) => props.color}, 15px 15px ${(props) => props.color},
        0px 15px transparent, -15px 15px transparent, -20px 5px transparent, -10px 15px transparent,
        -10px 0px transparent, -10px -15px transparent, -10px 20px transparent, -15px -10px transparent;
    }
  }
`;

type SpinnerProps = {
  color?: string;
  style: React.CSSProperties;
};

export const Spinner = ({ color = '#000', style }: SpinnerProps) => {
  return (
    <Wrapper style={style}>
      <Loader color={color} />
    </Wrapper>
  );
};
