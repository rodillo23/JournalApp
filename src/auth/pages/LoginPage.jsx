import {Link as RouterLink} from 'react-router-dom'
import {useDispatch} from 'react-redux'
import { Google } from "@mui/icons-material"
import { Button, Grid, Link, TextField, Typography } from "@mui/material"
import { AuthLayout } from '../layout/AuthLayout'
import { useForm } from '../../hooks/useForm'
import { checkingAuthentication } from '../../store/auth/thunks'
import { startGoogleSignIn } from '../../store/auth/thunks'

export const LoginPage = () => {

  const dispatch = useDispatch()

  const {email, password, onInputChange} = useForm({
    email: 'rodo@gmail.com',
    password: '12345'
  })

  const onSubmit = (event) => {
    event.preventDefault()
    console.log({email, password});
    dispatch(checkingAuthentication())
  }

  const onGoogleSignIn = () => {
    console.log('Google SignIn');
    dispatch(startGoogleSignIn())
  }


  return (

    <AuthLayout title='Login'>
      <form onSubmit={onSubmit}>
        <Grid container>

          <Grid item xs={12} sx={{mt: 2}}>
            <TextField
              label='Correo'
              type='email'
              placeholder="example@gmail.com"
              fullWidth
              name='email'
              value={email}
              onChange={onInputChange}
            />
          </Grid>

          <Grid item xs={12} sx={{mt:2}}>
            <TextField
              label='Contraseña'
              type='password'
              placeholder="contraseña"
              fullWidth
              name='password'
              value={password}
              onChange={onInputChange}
            />
          </Grid>

          <Grid container spacing={2} sx={{ mb: 2, mt: 2 }}>

            <Grid item xs={12} sm={6}>
              <Button type='submit' variant="contained" fullWidth>Login</Button>
            </Grid>

            <Grid item xs={12} sm={6}>
              <Button 
                variant="contained" 
                fullWidth
                onClick={onGoogleSignIn}
              >
                <Google/>
                <Typography sx={{ml:1}}>Google</Typography>
              </Button>
            </Grid>
          
          </Grid>

          <Grid container direction='row' justifyContent='end'>
            <Link component={RouterLink} color='inherit' to="/auth/register">
              Crear una cuenta
            </Link>
          </Grid>
          
        </Grid>
      </form>
    </AuthLayout>
    
      
  )
}
