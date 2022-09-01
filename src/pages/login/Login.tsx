import { Button, Card, CardContent, TextField, Typography, styled } from '@mui/material';
import { Layout } from 'shared/ui/Layout';

export const ContentLayout = styled('div')`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
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

export const LoginBtn = styled(Button)`
  width: 150px;
  justify-self: center;
`;

export const Login = () => {
  return (
    <Layout>
      <ContentLayout>
        <LoginCard>
          <LoginLayout>
            <Typography variant="h5">Login</Typography>
            <TextField variant="outlined" fullWidth label="Username" />
            <TextField variant="outlined" fullWidth label="Password" type="password" />
            <LoginBtn variant="contained">Go in</LoginBtn>
          </LoginLayout>
        </LoginCard>
      </ContentLayout>
    </Layout>
  );
};
