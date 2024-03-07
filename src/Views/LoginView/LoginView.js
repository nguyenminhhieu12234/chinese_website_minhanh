import React, { useState } from "react";
import './LoginView.css';
import Paper from '@mui/material/Paper';
import { Alert, Button, Grid, TextField, Typography } from "@mui/material";
import loginImage from "../../Shared/Images/img_login.jpg";
import LoginApi from "../../Api/LoginApi";
import CircularProgress from '@mui/material/CircularProgress';
import { useNavigate } from "react-router-dom";

function LoginView(){
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [showError, setShowError] = useState(false);
    const [waitingLogin, setWaitingLogin] = useState(false);
    const [errorMsg, setErrorMsg] = useState();
    const [validateEmail, setValidateEmail] = useState(false);
    const [validatePassword, setValidatePassword] = useState(false);
    const [emailMsg, setEmailMsg]= useState('');
    const [passMsg, setPassMsg] = useState('');
    const navigate = useNavigate();

    const usernameHandle = (event) => {
        setValidateEmail(false);
        setEmailMsg("");

        setUsername(event.target.value);
    }

    const passwordHandle = (event) => {
        setValidatePassword(false);
        setPassMsg("");

        setPassword(event.target.value);
    }


    const loginHandle = async () => {
        setWaitingLogin(true);

        if(username === '' || password === ''){
            if(username === ''){
                setValidateEmail(true);
                setEmailMsg("Email is required!");
            }

            if(password === ''){
                setValidatePassword(true);
                setPassMsg("Password is required!");
            }

            setWaitingLogin(false);
        }else{
            const params = {
                "email": username,
                "password": password
            };    

            try{
                const response = await LoginApi.login(params);
    
                if(response != null){
                    localStorage.setItem("tokenLogin", response.token);

                    setShowError(false);
                    setWaitingLogin(false);

                    navigate('/admin');
                }
            }catch(error){
                const status_error = error.response.status;
    
                if(status_error === 400){
                    setErrorMsg('email or password is incorrect!');
                    setShowError(true);
                    setWaitingLogin(false);
                }
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
                            {showError && <Alert id="alert-login" severity="error">{errorMsg}</Alert>}
                        </Grid>
                        <TextField id="txtUsername" label="Email" margin="normal" fullWidth size="small" required error={validateEmail} helperText={emailMsg} onChange={usernameHandle}></TextField>
                        <TextField id="txtPassword" label="Password" type="password" margin="normal" fullWidth error={validatePassword} helperText={passMsg} required size="small" onChange={passwordHandle}></TextField>
                        <Grid align='center'>
                            <Button id="btnLoginAction" variant="contained" sx={{
                                marginTop: 3
                            }} size="small" onClick={loginHandle}>{waitingLogin ? <CircularProgress></CircularProgress> : "Login"}</Button>
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