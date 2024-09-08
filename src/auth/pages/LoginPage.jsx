import { Link as RouterLink } from "react-router-dom";
import { Google } from "@mui/icons-material";
import { Button, Link, TextField, Typography } from "@mui/material"
import Grid from '@mui/material/Grid2';
import { AuthLayout } from "../layout/AuthLayout";
export const LoginPage = () => {
  return (
    <AuthLayout title="Login">
      <form action="">
          <Grid container>
            
            <Grid sx={{mt: 2}} size={12}>
              <TextField label='correo' type="email" placeholder="correo@dominio.com" fullWidth />
            </Grid>

            <Grid sx={{mt: 2}} size={12}>
              <TextField label='Contraseña' type="password" placeholder="Contraseña" fullWidth />
            </Grid>

            <Grid container sx={{mt: 2}} size={12} spacing={ 2 }>
              <Grid size={{xs:12, md:6}} > 
                <Button variant="contained" fullWidth>Iniciar sesion</Button>
              </Grid>
              <Grid size={{xs:12, md:6}} >
                <Button variant="contained" fullWidth> <Google/> <Typography sx={{ml:1}}>Google</Typography></Button>
              </Grid>
            </Grid>

            <Grid container sx={{mt: 2}} size={12} justifyContent='end' >
              <Link component={RouterLink} color="inherit" to='/auth/register' >
                Crear una cuenta
              </Link>
            </Grid>

          </Grid>
        </form>
    </AuthLayout>
  )
}
