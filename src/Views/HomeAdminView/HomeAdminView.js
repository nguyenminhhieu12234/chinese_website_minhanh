import React from "react";
import './HomeAdminView.css';
import { Routes, Route } from "react-router-dom";
import CourseAdminView from "Views/CourseAdminView/CourseAdminView";
import DrawerAdmin from "Shared/Components/DrawerNavigate/Drawer";

function HomeAdminView({children}){
    return(
        <div className="home-page">
            <DrawerAdmin></DrawerAdmin>
            <div className="home-content">
                <p>Home Content</p>
            </div>
        </div>
    );
}

export default HomeAdminView;