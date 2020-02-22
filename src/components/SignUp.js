import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import PersonIcon from '@material-ui/icons/Person';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';


export class SignUp extends React.Component {
  constructor(props) {
    console.log("no entiendos")
    super(props);
    this.state = { email: '', password: '', passwordC : '', name: '' }
    this.handleChangeEmail = this.handleChangeEmail.bind(this);
    this.handleChangePassword = this.handleChangePassword.bind(this);
    this.handleChangePasswordC = this.handleChangePasswordC.bind(this);
    this.handleChangeName = this.handleChangeName.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
}

handleChangeEmail(e) {
  this.setState({ email: e.target.value })
}

handleChangePassword(e) {
  this.setState({ password: e.target.value })
}

handleChangePasswordC(e) {
  this.setState({ passwordC: e.target.value })
}

handleChangeName(e) {
  this.setState({ name: e.target.value })
}

handleSubmit(e) {
  e.preventDefault();
  if (this.state.password != this.state.passwordC) {
      alert("Password is not the same");
  } else if(this.state.name && this.state.email && this.state.password && this.state.passwordC ){
    alert("Account Created");
      window.location.href = "/";
      localStorage.setItem(this.state.email,this.state.password);
      localStorage.setItem('name',this.state.name);
      localStorage.setItem('email', this.state.email);
      localStorage.setItem('password', this.state.password);
  }
  
}
render() {
  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div >
        <Typography component="h1" variant="h5">
          Registration
        </Typography>
        <Avatar style={{ margin: '10px' }} >
          <PersonIcon />
        </Avatar>
        
        <form noValidate onSubmit={this.handleSubmit}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="fullName"
                label="fulll Name"
                name="fullName"
                autoComplete="lname"
                value={this.state.name}
                onChange={this.handleChangeName}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
                value={this.state.email}
                onChange={this.handleChangeEmail}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="current-password"
                value={this.state.password}
                onChange={this.handleChangePassword}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                name="passwordC"
                label="Confirm Password"
                type="password"
                id="passwordC"
                autoComplete="current-password"
                value={this.state.passwordC}
                onChange={this.handleChangePasswordC}
              />
            </Grid>
          </Grid>
          <br></br>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            
          >
            Sign Up
          </Button>
        </form>
      </div>
    </Container>
  );
}
}