import { checkingCredentials } from "./"

export const checkingAuthentication = (email="", password="")=>{
    return async(dispach)=>{
        
        dispach(checkingCredentials())
    }
}

export const startGoogleSignIn = () => {
    return async(dispatch) =>{
        dispatch(checkingCredentials())
    }
}