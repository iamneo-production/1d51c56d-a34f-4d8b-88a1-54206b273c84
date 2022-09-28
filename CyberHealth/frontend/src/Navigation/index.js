import { Divider, Grid, Typography } from '@material-ui/core'
import { useEffect } from 'react'
import { useState } from 'react'
import { BrowserRouter as Router, Link, Switch, Route } from 'react-router-dom'
import Appointment from '../Component/Appointment/Appointment'
import Home from '../Component/Home/Home'
import Login from '../Component/Credentials'
import NavBar from '../Component/NavBar'
import Profile from '../Component/Profile/Profile'
import Search from '../Component/Search/Search'
import img from '../assets/logo.svg'
import doctors from '../Component/Doctors/doctors'
import Doctors from '../Component/Doctors/doctors'
//import Doctors from '../Component/Doctors/doctors'

export default function Navigation({
  user,
  setUser,
  message,
  AppointmentRef,
  setLoading,
}) {
  console.log(user, 'afjalsdkjfiladsjf;adsjf;aj###')
  const [appointment, setAppointment] = useState([])
  return (
    <>
      <NavBar user={user} setUser={setUser} />
      <Switch>
        <Route exact path="/" render={(props) => <Home user={user} />} />
        <Route
          path="/login"
          render={(props) => (
            <Login
              user={user}
              setUser={setUser}
              type="login"
              setLoading={setLoading}
            />
          )}
        />
        <Route
          path="/signup"
          render={(props) => (
            <Login
              user={user}
              setUser={setUser}
              type="signup"
              setLoading={setLoading}
            />
          )}
        />
        <Route
          exact
          path="/appointment"
          render={(props) => (
            <Appointment
              user={user}
              setUser={setUser}
              appointment={appointment}
              setAppointment={setAppointment}
            />
          )}
        />
        <Route
          path="/profile"
          render={(props) => (
            <Profile
              user={user}
              setUser={setUser}
              type={'profile'}
              url={window.location.href}
            />
          )}
        />
        <Route
          path="/edit-profile"
          render={(props) => (
            <Profile
              user={user}
              setUser={setUser}
              type={'edit'}
              url={window.location.href}
            />
          )}
        />
        <Route
          path="/doctors"
          render={(props) => (
            <Doctors/>
          )}
        />

        <Route
          path="/info/:id"
          render={(props) => (
            <Profile
              type={'info'}
              user={user}
              setUser={setUser}
              url={window.location.href}
            />
          )}
        />
      </Switch>
      <Divider style={{ marginTop: '20px' }} />
      <Grid
        container
        style={{ padding: '50px', position: 'fixed' }}
        alignContent="center"
        justify="center"
        className="bottom"
      >
        <Grid
          item
          alignItems="center"
          alignContent="center"
          style={{ marginRight: '80px' }}
        >
          <img src={img} alt="logo" style={{ width: '80px', height: '50px' }} />
          <Typography
            className="subtitle1"
            style={{
              display: 'inline',
              marginTop: '15px',
              marginLeft: '10px',
              position: 'absolute',
            }}
          >
            ©  Team-7 2022
          </Typography>
        </Grid>
      </Grid>
    </>
  )
}
