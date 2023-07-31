import { Link as RouterLink } from "react-router-dom";
import { Button, Grid, Link, TextField, Typography } from "@mui/material"
import React from "react"
import { AuthLayout } from "../layout/AuthLayout";
import { useForm } from "../../hooks/useForm";

const formData = {

  email: 'pepguardiola@google.com',
  password: '123456',
  displayName: 'Carlos Janon'
}
const formValidations = {
  email: [(value) => value.includes('@'), 'the email must have an @'],
  password: [(value) => value.length >= 6, 'the password must have more than 6 ch'],
  displayName: [(value) => value.length >= 1, 'Name is required']
}
export const RegisterPage = () => {
  const { formState, displayName, email, password, isFornValid, displayNameValid, emailValid, passwordValid, onInputChange, } = useForm(formData, formValidations)

  const onSubmit = (event) => {
    event.preventDefault()
    console.log(formState);
  }
  return (
    <AuthLayout title="Create Acount">
      <form onSubmit={onSubmit}>
        <Grid container>
          <Grid item xs={12} sx={{ mt: 2 }}>
            <TextField label='Name' type="text" placeholder="Nombre completo" name="displayName" value={displayName} onChange={onInputChange} error={!displayNameValid} helperText={displayNameValid} fullWidth></TextField>
          </Grid>
          <Grid item xs={12} sx={{ mt: 2 }}>
            <TextField label='correo' type="email" placeholder="correo@" name="email" value={email} onChange={onInputChange} error={false} fullWidth></TextField>
          </Grid>
        </Grid>
        <Grid container>
          <Grid item xs={12} sx={{ mt: 2 }}>
            <TextField label='password' type="password" placeholder="password*" name="password" value={password} onChange={onInputChange} error={false} fullWidth></TextField>
          </Grid>
          <Grid container spacing={2} sx={{ mb: 2, mt: 1 }} >
            <Grid item xs={12} sm={6} sx={{ mt: 1 }}>
              <Button type="submit" variant="contained" fullWidth> Create Account</Button>
            </Grid>

            <Grid container direction='row' justifyContent='end' >
              <Typography sx={{ mr: 1 }}>Do you have an acount?</Typography>
              <Link component={RouterLink} color='inherit' to='/auth/login' >Login</Link>
            </Grid>
          </Grid>
        </Grid>
      </form>
    </AuthLayout>
  )
}
