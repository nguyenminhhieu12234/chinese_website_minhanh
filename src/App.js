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
import DailyView from 'Views/DailyTimeView/DailyView';
import CheckDailyView from 'Views/CheckDailyView/CheckDailyView';

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
          <Route path='/admin' element={mainContext.isLoginContext ? <HomeAdminView></HomeAdminView> : <LoginView></LoginView>}></Route>
          <Route path='/admin/course' element={mainContext.isLoginContext ? <CourseAdminView></CourseAdminView> : <LoginView></LoginView>}></Route>
          <Route path='/admin/course/edit' element={mainContext.isLoginContext ? <EditCourseAdminView></EditCourseAdminView> : <LoginView></LoginView>}></Route>
          <Route path='/admin/student' element={mainContext.isLoginContext ? <StudentAdminView></StudentAdminView> : <LoginView></LoginView>}></Route>
          <Route path='/admin/daily' element={mainContext.isLoginContext ? <DailyView></DailyView> : <LoginView></LoginView>}></Route>
          <Route path='/user/dailyview' element={mainContext.isLoginContext ? <CheckDailyView></CheckDailyView> : <LoginView></LoginView>}></Route>
        </Routes>
      </BrowserRouter>
  );
}

export default App;
