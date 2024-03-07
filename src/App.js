import { Login } from '@mui/icons-material';
import './App.css';
import LoginView from './Views/LoginView/LoginView';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import HomeAdminView from 'Views/HomeAdminView/HomeAdminView';
import { useEffect } from 'react';
import { useState } from 'react';

function App() {
  const [isLogin, setIsLogin] = useState(false);

  useEffect(() => {
    const getToken = localStorage.getItem('tokenLogin');

    if(getToken != null){
      setIsLogin(true);
    }else{
      setIsLogin(false);
    }
  }, [localStorage.getItem('tokenLogin')]);

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={isLogin ? <Navigate to='/admin'/> : <LoginView></LoginView>}></Route>
        <Route path='/login' element={isLogin ? <Navigate to='/admin'/> : <LoginView></LoginView>}></Route>
        <Route path='/admin' element={isLogin ? <HomeAdminView></HomeAdminView> : <Navigate to='/login'/>}></Route>
        <Route ></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
