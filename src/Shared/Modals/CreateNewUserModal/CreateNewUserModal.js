import React, { useContext } from "react";
import './CreateNewUserModal.css';
import { Modal } from "@mui/material";
import MainContext from "Context/MainContext";

function CreateNewUserModal(){
    const mainContext = useContext(MainContext);

    <div className="modal-new-user">
        <Modal open={mainContext.openModal}>
            <p>new user</p>
        </Modal>
    </div>
}

export default CreateNewUserModal;