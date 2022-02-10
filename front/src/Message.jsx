import React, {useEffect, useState} from "react";
import TopNav from "./TopNav";
import { loginCheck } from "./middlewares";
import { useNavigate } from "react-router-dom";
import MsgBox from "./components/MsgBox";
import axios from "axios";

const Message = () => {
    const navigate = useNavigate();
    const [messages, setMessages] = useState([]);

    useEffect(() => {
        const loginFlag = loginCheck();

        const getMyMessage = async() => {
            const list = await axios.post(
                "http://localhost:4000/api/message/getMessage", 
                {myId : localStorage.getItem("ruby_user_id")});

            setMessages(list.data)
        }

        if(!loginFlag) {
            navigate("/")
        }

        getMyMessage();
    }, [])

    return <div>
        <TopNav title="Message" desc="친구 메세지 확인가능..."/>

        {messages.map((m) => {
            return <MsgBox 
                key={m.id} 
                id={m.id} 
                isSend={parseInt(m.who) === parseInt(localStorage.getItem("ruby_user_id"))} 
                content={m.content} 
                isRead={m.isRead} 
                createdAt={m.createdAt} 
                whomName={m.whomName}
                whoName={m.whoName}
                who={m.who} 
                whom={m.whom}
            />
        })}
    </div>
};

export default Message;