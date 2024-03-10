import React, { createContext, useState } from "react";

const MainContext = createContext();

export const MainProvider = ({children}) => {
    const [drawerIndex, setDrawerIndex] = useState();

    const respone = {drawerIndex, setDrawerIndex};

    return(
        <MainContext.Provider value={respone}>
            {children}
        </MainContext.Provider>
    );
}

export default MainContext;