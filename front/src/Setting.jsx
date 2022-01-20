import React, {useEffect} from "react";
import TopNav from "./TopNav";
import { loginCheck } from "./middlewares";
import { useNavigate } from "react-router-dom";

const Setting = () => {
    const navigate = useNavigate();

    useEffect(() => {
        const loginFlag = loginCheck();

        console.log(loginFlag);

        if(!loginFlag) {
            navigate("/")
        }
    }, [])

    return <div>
        <TopNav title="Setting" desc="환경설정 가능..."/>
    </div>
};

export default Setting;