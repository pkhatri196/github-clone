//To keep track of the users if they are authenticated or not

import { createContext, useContext, useEffect, useState } from "react";
import toast from "react-hot-toast";

export const AuthContext = createContext();

export const useAuthContext = () =>{
    return useContext(AuthContext);
}

export const AuthContextProvider = ({ children }) => {
    const [authUser,setAuthUser] = useState(null);
    //const [loading,setLoading] = useState(true);

   useEffect(() =>{
    const checkUserLoggedIn = async () => {
        //setLoading(true);
        try {
           const res = await fetch("/api/auth/check",{credentials:"include"});
           const data = await res.json(); 
           setAuthUser(data.user);  //null or authenticated user object
        } catch (error) {
            toast.error(error.message);
        } 
    }
    checkUserLoggedIn();
   })
  return (
    // whatever value we add on this value prop we will be able to use it in any jsx file
    <AuthContext.Provider value={{authUser , setAuthUser}}>
        {children}
    </AuthContext.Provider>
  );
};
