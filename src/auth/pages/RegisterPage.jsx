import { Link as RouterLink } from "react-router-dom";
import { Button, Grid, Link, TextField, Typography } from "@mui/material"
import { AuthLayout } from "../layout/AuthLayout";
import { useForm } from "../../hooks/useForm";
import { useState } from "react";

const formData = {
  email: '',
  password: '',
  displayName: ''
}

const formValidations = {
  email: [(value) => value.includes('@'), 'the email must have an @'],
  password: [(value) => value.length >= 6, 'the password must have more than 6 ch'],
  displayName: [(value) => value.length >= 1, 'Name is required']
}

export const RegisterPage = () => {
  const [formSubmitted, setFormSubmitted] = useState(false)
  const { formState, displayName, email, password, isFormValid, displayNameValid, emailValid, passwordValid, onInputChange, } = useForm(formData, formValidations)

  const onSubmit = (event) => {
    event.preventDefault()
    setFormSubmitted(true);
  }

  return (
    <AuthLayout title="Create Acount">
      <form onSubmit={onSubmit}>
        <Grid container>
          <Grid item xs={12} sx={{ mt: 2 }}>
            <TextField label='Name' type="text" placeholder="Nombre completo" name="displayName" value={displayName} onChange={onInputChange} error={!!displayNameValid && formSubmitted} helperText={displayNameValid} fullWidth></TextField>
          </Grid>
          <Grid item xs={12} sx={{ mt: 2 }}>
            <TextField label='correo' type="email" placeholder="correo@" name="email" value={email} onChange={onInputChange} error={!!emailValid && formSubmitted} helperText={emailValid} fullWidth></TextField>
          </Grid>
        </Grid>
        <Grid container>
          <Grid item xs={12} sx={{ mt: 2 }}>
            <TextField label='password' type="password" placeholder="password*" name="password" value={password} onChange={onInputChange} error={!!passwordValid && formSubmitted} helperText={passwordValid} fullWidth></TextField>
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
