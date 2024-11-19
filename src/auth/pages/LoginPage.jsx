import { Link as RouterLink } from "react-router-dom";
import { Google } from "@mui/icons-material";
import { Button, Link, TextField, Typography } from "@mui/material"
import Grid from '@mui/material/Grid2';
import { AuthLayout } from "../layout/AuthLayout";
import { useForm } from "../../hooks";
import { useDispatch } from "react-redux";
import { checkingAuthentication, startGoogleSignIn } from "../../store";


export const LoginPage = () => {
  const dispach = useDispatch()

  const {email, password, onInputChange} = useForm({
    email: '',
    password: ''
  })
  const onSubmit = (event) =>{
    event.preventDefault()
    
    dispach(checkingAuthentication(email,password))
  }
  const onGoogleSignIn = () =>{
    console.log("onGoogleSignIn")
    dispach(startGoogleSignIn())
  }
  return (
    <AuthLayout title="Login">
      <form onSubmit={onSubmit}>
          <Grid container>
            
            <Grid sx={{mt: 2}} size={12}>
              <TextField 
              label='correo' 
              type="email" 
              placeholder="correo@dominio.com" 
              fullWidth
              name="email"
              value={email}
              onChange={onInputChange}
              />
            </Grid>

            <Grid sx={{mt: 2}} size={12}>
              <TextField 
              label='Contraseña' 
              type="password" 
              placeholder="Contraseña" 
              fullWidth 
              name="password"
              value={password}
              onChange={onInputChange}
              />
            </Grid>

            <Grid container sx={{mt: 2}} size={12} spacing={ 2 }>
              <Grid size={{xs:12, md:6}} > 
                <Button type="submit" variant="contained" fullWidth>Iniciar sesion</Button>
              </Grid>
              <Grid size={{xs:12, md:6}} >
                <Button onClick={onGoogleSignIn} variant="contained" fullWidth> <Google/> <Typography sx={{ml:1}}>Google</Typography></Button>
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
