import { useDispatch, useSelector } from "react-redux";
import { Link as RouterLink } from "react-router-dom";
import { useForm } from '../../hooks';
import { Google } from "@mui/icons-material"
import { Button, Grid, Link, TextField, Typography } from "@mui/material"
import React, { useMemo } from "react"
import { AuthLayout } from "../layout/AuthLayout";
import { checkingAuthentication, startGoogleSignIn } from "../../store/auth";

export const LoginPage = () => {
  const formData = {
    email: '',
    password: ''
  }
  const { status } = useSelector(state => state.auth);
  const dispatch = useDispatch()
  const { email, password, onInputChange } = useForm(formData);
  const isAuthenticating = useMemo(() => status === 'checking', [status])
  const onSubmit = (event) => {
    event.preventDefault();
    dispatch(checkingAuthentication())
  }
  const onGoogleSingIn = () => {
    dispatch(startGoogleSignIn())
  }

  return (
    <AuthLayout title="Login">
      <form onSubmit={onSubmit}>
        <Grid container>
          <Grid item xs={12} sx={{ mt: 2 }}>
            <TextField
              label='correo'
              type="email"
              placeholder="correo@"
              fullWidth
              name='email'
              onChange={onInputChange}
              value={email}
            >
            </TextField>
          </Grid>
        </Grid>
        <Grid container>
          <Grid item xs={12} sx={{ mt: 2 }}>
            <TextField label='password'
              type="password"
              placeholder="password*"
              fullWidth
              name='password'
              onChange={onInputChange}
              value={password}
            ></TextField>
          </Grid>
          <Grid container spacing={2} sx={{ mb: 2, mt: 1 }} >
            <Grid item xs={12} sm={6} sx={{ mt: 1 }}>
              <Button disabled={isAuthenticating} type="submit" variant="contained" fullWidth> LOGIN</Button>
            </Grid>
            <Grid item xs={12} sm={6} sx={{ mt: 1, mb: 2 }}>
              <Button disabled={isAuthenticating} variant="contained" fullWidth onClick={onGoogleSingIn}><Google sx={{ mr: 1 }} /> <Typography sx={{ ml: 3 }}>google</Typography></Button>
            </Grid>
            <Grid container direction='row' justifyContent='end' >
              <Link component={RouterLink} color='inherit' to='/auth/register' sx={{ mt: 1 }}>Create an account</Link>
            </Grid>
          </Grid>
        </Grid>
      </form>
    </AuthLayout>
  )
}
