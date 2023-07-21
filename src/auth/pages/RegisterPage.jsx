import { Link as RouterLink } from "react-router-dom";
import { Google } from "@mui/icons-material"
import { Button, Grid, Link, TextField, Typography } from "@mui/material"
import React from "react"
import { AuthLayout } from "../layout/AuthLayout";


export const RegisterPage = () => {
  return (
    <AuthLayout title="Create Acount">
      <form>
        <Grid container>
          <Grid item xs={12} sx={{ mt: 2 }}>
            <TextField label='Name' type="text" placeholder="Nombre completo" fullWidth></TextField>
          </Grid>
          <Grid item xs={12} sx={{ mt: 2 }}>
            <TextField label='correo' type="email" placeholder="correo@" fullWidth></TextField>
          </Grid>
        </Grid>
        <Grid container>
          <Grid item xs={12} sx={{ mt: 2 }}>
            <TextField label='password' type="password" placeholder="password*" fullWidth></TextField>
          </Grid>
          <Grid container spacing={2} sx={{ mb: 2, mt: 1 }} >
            <Grid item xs={12} sm={6} sx={{ mt: 1 }}>
              <Button variant="contained" fullWidth> LOGIN</Button>
            </Grid>

            <Grid container direction='row' justifyContent='end' >
              <Typography sx={{ mr: 1 }}>Do you have an acount?</Typography>
              <Link component={RouterLink} color='inherit' to='/auth/login' sx={{ mt: 1 }}>Login</Link>
            </Grid>
          </Grid>
        </Grid>
      </form>
    </AuthLayout>
  )
}
