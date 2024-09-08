import { Link as RouterLink } from "react-router-dom";
import { Button, Link, TextField, Typography } from "@mui/material"
import Grid from '@mui/material/Grid2';
import { AuthLayout } from "../layout/AuthLayout";


export const RegisterPage = () => {
  return (
    <AuthLayout title="Registro">
      <form action="">
        <Grid container>
          
          <Grid sx={{mt: 2}} size={12}>
            <TextField label='nombre' type="text" placeholder="Nombre(s)" fullWidth />
          </Grid>
          {/* <Grid sx={{mt: 2}} size={12}>
            <TextField label='apellidos' type="text" placeholder="apellidos" fullWidth />
          </Grid> */}
          <Grid sx={{mt: 2}} size={12}>
            <TextField label='correo' type="email" placeholder="correo@dominio.com" fullWidth />
          </Grid>
          <Grid sx={{mt: 2}} size={12}>
              <TextField label='Contraseña' type="password" placeholder="Contraseña" fullWidth />
            </Grid>


          <Grid container sx={{mt: 2}} size={12} spacing={ 2 }>
            <Grid size={12} > 
              <Button variant="contained" fullWidth>Registrar</Button>
            </Grid>
            
          </Grid>

          <Grid container sx={{mt: 2}} size={12} justifyContent='end' >
          <Typography sx={{mr:3}}>¿Ya tienes una cuenta?</Typography>
            <Link component={RouterLink} color="inherit" to='/auth/login' >
              Inicia sesion
            </Link>
          </Grid>

        </Grid>
      </form>
    </AuthLayout>
  )
}
