import React from "react";
import './HomeAdminView.css';
import { Route, Routes} from "react-router-dom";
import DrawerAdmin from "Shared/Components/DrawerNavigate/Drawer";
import CourseAdminView from '../CourseAdminView/CourseAdminView.js';

function HomeAdminView(){
    return(
        <div className="home-page">
            <DrawerAdmin></DrawerAdmin>
            <div className="area-content">
                <Routes>
                    <Route path="/admin/course" element={<CourseAdminView></CourseAdminView>}></Route>
                </Routes>
            </div>
        </div>
    );
}

export default HomeAdminView;