import React from "react";
import './HomeAdminView.css';
import { Link } from "react-router-dom";
import DrawerAdmin from "Shared/Components/DrawerNavigate/Drawer";

function HomeAdminView(){
    return(
        <DrawerAdmin></DrawerAdmin>
    );
}

export default HomeAdminView;