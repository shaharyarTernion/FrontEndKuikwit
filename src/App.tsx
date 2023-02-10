import React from 'react'
import './App.css'
import CheckYourEmail from './pages/checkYourEmail/CheckYourEmail'
import ForgotPassword from './pages/forgotPassword/ForgotPassword'
import ResetPassword from './pages/ResetPassword/ResetPassword'
import SignIn from './pages/signIn/SignIn'
import SignUp from './pages/signUp/SignUp'
// import { Grid, } from '@mui/material';
// import MiniDrawer from './components/layouts/drawer/MiniDrawer';
// import Dashboard from './pages/dashboard/Dashboard';

const App: React.FC = () => {
  return (
    // <Grid container >
    //   {/* Sidebar */}
    //   <Grid item xs={0.5}>
    //     <MiniDrawer />
    //   </Grid>
    //   <Grid item xs={11.5}>
    //     <Dashboard />
    //   </Grid>
    // </Grid>
    <ResetPassword />
    )
}

export default App
