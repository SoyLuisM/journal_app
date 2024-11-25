import { Link as RouterLink } from "react-router-dom";
import { Alert, Button, Link, TextField, Typography } from "@mui/material"
import Grid from '@mui/material/Grid2';
import { AuthLayout } from "../layout/AuthLayout";
import { useForm } from "../../hooks";
import { useMemo, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { startCreatingWithEmailPassword } from "../../store/auth";

const formaData = {
  email: '',
  password: '',
  displayName: ''
}

const formValidations = {
  email: [(value)=>value.includes('@'), 'el correo debe tener un @'],
  password: [(value)=>value.length >= 6, 'el password debe de tener mas de 6 caracteres'],
  displayName: [(value)=>value.length >=1, 'el nombre es obligatorio']
}

export const RegisterPage = () => {

  const dispatch = useDispatch()

  const {status, errorMessage} = useSelector(state => state.auth)
  const isCheckingAuthentication = useMemo(()=> status ==="checking", [status])

  const [formSubmitted, setformSubmitted] = useState(false)
  const {formState,displayName, email, password, onInputChange,
    isFormValid,  displayNameValid, emailValid, passwordValid
  } = useForm(formaData,formValidations)

  
  const onSubmit = (event) => {
    event.preventDefault()
    setformSubmitted(true)
    if(!isFormValid) return
    dispatch(startCreatingWithEmailPassword(formState))
  }



  return (
    <AuthLayout title="Registro">
      <h1>FORM: {isFormValid ? 'valido' : 'invalido'}</h1>
      <form onSubmit={ onSubmit }>
        <Grid container>
          
          <Grid sx={{mt: 2}} size={12}>
            <TextField
            label='nombre' 
            type="text" 
            placeholder="Nombre(s)" 
            fullWidth 
            name="displayName" 
            value={displayName} 
            onChange={onInputChange}
            error={!!displayNameValid && formSubmitted}
            helperText={displayNameValid}
            />
          </Grid>
          {/* <Grid sx={{mt: 2}} size={12}>
            <TextField label='apellidos' type="text" placeholder="apellidos" fullWidth />
          </Grid> */}
          <Grid sx={{mt: 2}} size={12}>
            <TextField
            label='correo' 
            type="email" 
            placeholder="correo@dominio.com" 
            fullWidth 
            name="email" 
            value={email} 
            onChange={onInputChange}
            error={!!emailValid && formSubmitted}
            helperText={emailValid}
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
              error={!!passwordValid && formSubmitted}
            helperText={passwordValid}
              />
            </Grid>


          <Grid container sx={{mt: 2}} size={12} spacing={ 2 }>
          <Grid size={12} display={ !!errorMessage ? '': 'none'}>
           <Alert severity="error">{errorMessage}</Alert>
          </Grid>
            <Grid size={12} > 
              <Button 
              disabled={isCheckingAuthentication}
              variant="contained"
              fullWidth 
              type="submit"
              >Registrar</Button>
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
