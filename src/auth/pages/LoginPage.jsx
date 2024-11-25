import { Link as RouterLink } from "react-router-dom";
import { Google } from "@mui/icons-material";
import { Alert, Button, Link, TextField, Typography } from "@mui/material"
import Grid from '@mui/material/Grid2';
import { AuthLayout } from "../layout/AuthLayout";
import { useForm } from "../../hooks";
import { useDispatch, useSelector } from "react-redux";
import { startGoogleSignIn, startLoginWithEmailPassword } from "../../store";
import { useMemo } from "react";


export const LoginPage = () => {
  const {status,errorMessage}=useSelector(state => state.auth)
  const dispach = useDispatch()
  
  const {formState,email, password, onInputChange} = useForm({
    email: '',
    password: ''
  })

  const isAuthenticating = useMemo( () => status ==="checking", [status] )


  const onSubmit = (event) =>{
    event.preventDefault()
    
    dispach(startLoginWithEmailPassword(formState))
  }
  const onGoogleSignIn = () =>{
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
            <Grid container sx={{mt: 2}} size={12} spacing={ 2 } display={ !!errorMessage ? '': 'none'}>
              <Alert severity="error">{errorMessage}</Alert>
            </Grid>
            <Grid container sx={{mt: 2}} size={12} spacing={ 2 } >
              <Grid size={{xs:12, md:6}} > 
                <Button disabled= {isAuthenticating} type="submit" variant="contained" fullWidth>Iniciar sesion</Button>
              </Grid>
              <Grid size={{xs:12, md:6}} >
                <Button disabled= {isAuthenticating} onClick={onGoogleSignIn} variant="contained" fullWidth> <Google/> <Typography sx={{ml:1}}>Google</Typography></Button>
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
