import React, {useEffect} from "react";
import TopNav from "./TopNav";
import { loginCheck } from "./middlewares";
import { useNavigate } from "react-router-dom";
import FriendBox from "./components/FriendBox";

const Friend = () => {
    const navigate = useNavigate();

    useEffect(() => {
        const loginFlag = loginCheck();

        console.log(loginFlag);

        if(!loginFlag) {
            navigate("/")
        }
    }, []);

    return <div>
        <TopNav title="Friend" desc="친구 목록 확인가능..."/>

        <FriendBox />
        <FriendBox />
        <FriendBox />
    </div>
};

export default Friend;