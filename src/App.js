import { Home, Login } from '@mui/icons-material';
import './App.css';
import LoginView from './Views/LoginView/LoginView';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import HomeAdminView from 'Views/HomeAdminView/HomeAdminView';
import { useContext, useEffect } from 'react';
import { useState } from 'react';
import CourseAdminView from 'Views/CourseAdminView/CourseAdminView';
import EditCourseAdminView from 'Views/EditCourseAdminView/EditCourseAdminView';
import MainContext from 'Context/MainContext';
import StudentAdminView from 'Views/StudentAdminView/StudentAdminView';

function App() {
  const mainContext = useContext(MainContext);

  useEffect(() => {
    var accessToken = localStorage.getItem("token");

    if(accessToken != null){
      mainContext.setIsLoginContext(true);
    }else{
      mainContext.setIsLoginContext(false);
    }
  }, []);

  return (
      <BrowserRouter>
        <Routes>
          <Route path='/' element={mainContext.isLoginContext ? <Navigate to='/admin'/> : <LoginView></LoginView>}></Route>
          <Route path='/login' element={mainContext.isLoginContext ? <Navigate to='/admin'/> : <LoginView></LoginView>}></Route>
          <Route path='/admin' element={mainContext.isLoginContext ? <HomeAdminView></HomeAdminView> : <Navigate to="/login"/>}></Route>
          <Route path='/admin/course' element={mainContext.isLoginContext ? <CourseAdminView></CourseAdminView> : <Navigate to='/login'/>}></Route>
          <Route path='/admin/course/edit' element={mainContext.isLoginContext ? <EditCourseAdminView></EditCourseAdminView> : <Navigate to='/login'/>}></Route>
          <Route path='/admin/student' element={mainContext.isLoginContext ? <StudentAdminView></StudentAdminView> : <Navigate to='/login'/>}></Route>
        </Routes>
      </BrowserRouter>
  );
}

export default App;
