import React, { useContext } from "react";
import './CourseAdminView.css';
import HomeAdminView from "Views/HomeAdminView/HomeAdminView";
import { Routes, Route } from "react-router-dom";
import DrawerAdmin from "Shared/Components/DrawerNavigate/Drawer";
import MainContext from "Context/MainContext";
import { Autocomplete, Button, Grid, TextField, Typography } from "@mui/material";
import { Label } from "@mui/icons-material";
import FilterAdmin from "Shared/Components/Filter/FilterAdmin";

function CourseAdminView(){
    const numberCourse = 10;
    const maxColumnCourse = 5;
    const mainContext = useContext(MainContext);

    console.log(mainContext);

    return(
        <div className="course-page">
            <DrawerAdmin></DrawerAdmin>
            <div className="course-content">
                <FilterAdmin></FilterAdmin>
                <div className="list-course">
                    {
                        
                    }
                </div>
            </div>
        </div>
    );
}

export default CourseAdminView;