import { useContext } from "react";
import { Data } from "../Context/SigninSignupContext";

function UseData(){
    return( useContext(Data) )
} 

export default UseData;