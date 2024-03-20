import React, { createContext, useState } from "react";

const MainContext = createContext();

export const MainProvider = ({children}) => {
    const [drawerIndex, setDrawerIndex] = useState();
    const [isLoginContext, setIsLoginContext] = useState(false);
    const [openModal, setOpenModal] = useState(false);

    const respone = {
        drawerIndex, setDrawerIndex, 
        isLoginContext, setIsLoginContext,
        openModal, setOpenModal,
    };

    return(
        <MainContext.Provider value={respone}>
            {children}
        </MainContext.Provider>
    );
}

export default MainContext;