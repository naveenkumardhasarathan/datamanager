import React from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { CssBaseline } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/paper';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Box from '@material-ui/core/Box';
import Link from '@material-ui/core/Link';

const useStyles = makeStyles (theme => ({

    root: { height: '100vh' },
    image: {
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        background: 'url(loginLeft7.svg)',
    },
    paper: {
        display: 'flex',
        flexDirection: 'column',
        alignItems:'center'
    },
    avatar: {
        margin: theme.spacing(1),
        backgroundColor: theme.palette.secondary.main,
    },
    form: {
        width: '90%', // Fix IE 11 issue.
        marginTop: theme.spacing(1),
    },
    submit: {
        margin: theme.spacing(3, 0, 2),
    },

}));

function Copyright() {
    return (
        <Typography variant="body2" color="textSecondary" align="center">
            {'Copyright '}
            Data Dictionary
     {' '}
            {new Date().getFullYear()}
            {'.'}
        </Typography>
    );
}

const Login = () => {
    const classes = useStyles();
    return (
        <Grid container  className={classes.root}>
            <CssBaseline />
            <Grid item xs={false} sm={4} md={7} component={Paper} elevation={1}  className={classes.image}> </Grid>
            <Grid item xs={12} sm={8} md={5} component={Paper} elevation={10} >
                <Box mt={15}>
                <div className={classes.paper}>
                    <Avatar className={classes.Avatar}>
                        <LockOutlinedIcon />
                    </Avatar>
                    <Typography component="h1" variant="h5">
                        Log In
          </Typography>
                    <form className={classes.form}>
                      
                        <TextField
                            variant="outlined"
                            margin="normal"
                            required
                            fullWidth
                            id="UserId"
                            label="User Id"
                            name="UserId"
                            autoComplete="UserId"
                            autoFocus
                        />
                        <TextField variant="outlined" margin="normal" label="Password" fullWidth  />
                        <Button fullWidth
                            variant="contained"
                            color="primary"
                            className={classes.submit} type="submit">Log in</Button>

                            <Box mt={15}>
                                <Copyright />
                                </Box>
                        
                        </form>
                    </div>
                </Box>

            </Grid>
        </Grid>

    );
}

export default Login;