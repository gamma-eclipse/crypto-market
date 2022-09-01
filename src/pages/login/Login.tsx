import { TextField, Typography } from '@mui/material';
import { Link } from 'react-router-dom';

import { ActionArea, ActionBtn, ContentLayout, ExtraArea, LoginCard, LoginLayout } from './styles';

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
