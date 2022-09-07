import { TextField, Typography } from '@mui/material';
import { login } from 'entities/viewer';
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

import { ActionArea, ActionBtn, ContentLayout, ExtraArea, LoginCard, LoginLayout } from './styles';

export const Login = () => {
  const navigate = useNavigate();

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  return (
    <ContentLayout>
      <LoginCard>
        <LoginLayout>
          <Typography variant="h5">Login</Typography>
          <TextField
            variant="outlined"
            fullWidth
            label="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <TextField
            variant="outlined"
            fullWidth
            label="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            type="password"
          />
          <ActionArea>
            <ActionBtn variant="contained" color="secondary" onClick={() => navigate(-1)}>
              Go back
            </ActionBtn>
            <ActionBtn
              onClick={() =>
                login({
                  login: username,
                  password,
                })
              }
              variant="contained"
            >
              Go in
            </ActionBtn>
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
