import React, { useState } from "react";
import './LoginView.css';
import Paper from '@mui/material/Paper';
import { Alert, Button, Grid, TextField, Typography } from "@mui/material";
import loginImage from "../../Shared/Images/img_login.jpg";
import LoginApi from "../../Api/LoginApi";

function LoginView(){
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [showError, setShowError] = useState(false);

    const usernameHandle = (event) => {
        setUsername(event.target.value);
    }

    const passwordHandle = (event) => {
        setPassword(event.target.value);
    }


    const loginHandle = async () => {
        const params = {
            "email": username,
            "password": password
        };

        try{
            const response = await LoginApi.login(params);

            if(response != null){
                setShowError(false);
            }
        }catch(error){
            const status_error = error.response.status;

            if(status_error === 400){
                setShowError(true);
            }
        }
    }

    return(
        <div className="login-page">
            <Paper elevation={3} className="area-login">
                <Grid container className="area-container">
                    <Grid item xs={6} className="area-action">
                        <Grid align='center'>
                            <Typography sx={{
                                fontFamily: 'inherit',
                                fontSize: 30,
                                fontWeight: 'bold',
                                marginTop: 8,
                                marginBottom: 3
                            }}>Sign in</Typography>
                            {showError && <Alert id="alert-login" severity="error">username or password is incorrect!</Alert>}
                        </Grid>
                        <TextField id="txtUsername" label="Email" margin="normal" fullWidth size="small" required onChange={usernameHandle}></TextField>
                        <TextField id="txtPassword" label="Password" type="password" margin="normal" fullWidth size="small" required onChange={passwordHandle}></TextField>
                        <Grid align='center'>
                            <Button id="btnLoginAction" variant="contained" sx={{
                                marginTop: 3
                            }} size="small" onClick={loginHandle}>Login</Button>
                        </Grid>
                    </Grid>
                    <Grid item xs={6} className="area-infomation">
                            <img src={loginImage} className="imgInfoLogin"></img>
                    </Grid>
                </Grid>
            </Paper>
        </div>
    );
}

export default LoginView;