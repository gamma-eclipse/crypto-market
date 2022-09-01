import { Button, Card, CardContent, TextField, Typography, styled } from '@mui/material';
import { Link } from 'react-router-dom';
import { COLORS } from 'shared/config/colors';

export const ContentLayout = styled('div')`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: ${COLORS.bg[200]};
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

export const Login = () => {
  return (
    <ContentLayout>
      <LoginCard>
        <LoginLayout>
          <Typography variant="h5">Login</Typography>
          <TextField variant="outlined" fullWidth label="Username" />
          <TextField variant="outlined" fullWidth label="Password" type="password" />
          <ActionArea>
            <ActionBtn variant="contained" color="secondary">
              Go back
            </ActionBtn>
            <ActionBtn variant="contained">Go in</ActionBtn>
          </ActionArea>
          <ExtraArea>
            <Typography>
              Don&apos;t have one? <Link to="/register">Register</Link>
            </Typography>
            <Typography>
              I <Link to="/recover">forgot</Link> my password.
            </Typography>
          </ExtraArea>
        </LoginLayout>
      </LoginCard>
    </ContentLayout>
  );
};
