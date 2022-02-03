import React, {useEffect} from "react";
import TopNav from "./TopNav";
import { loginCheck } from "./middlewares";
import { useNavigate } from "react-router-dom";
import MsgBox from "./components/MsgBox";

const Message = () => {
    const navigate = useNavigate();

    useEffect(() => {
        const loginFlag = loginCheck();

        console.log(loginFlag);

        if(!loginFlag) {
            navigate("/")
        }
    }, [])

    return <div>
        <TopNav title="Message" desc="친구 메세지 확인가능..."/>

        <MsgBox isSend={true} />
        <MsgBox isSend={false} />
        <MsgBox isSend={true} />
    </div>
};

export default Message;