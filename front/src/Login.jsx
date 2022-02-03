import React, {useEffect, useState} from "react";
import styled from "styled-components";
import {Button, message} from "antd";
import {useNavigate} from "react-router-dom";
import axios from "axios";

const Whole = styled.section`
    width: 100%;
    height: 100vh;
    overflow: hidden;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;

const AppTitle = styled.h2`
   margin-bottom: 100px;
`;

const LoginBox = styled.div`
    width: 80%;
    height: 90px;
    border-radius: 6px;

    padding: 10px;
    box-shadow: 4px 4px 9px #adadad;
    margin-bottom: 60px;
`;

const InputGuide = styled.span`
    font-size: 13px;
    color: #999;
    margin-bottom: 10px;
`;

const InputEmail = styled.input`
    width: 100%;
    height: 25px;

    margin-bottom: 10px;
    border: 1px solid #eee;
    border-radius: 7px;
    outline: none;
    background: none;
    padding: 0px 5px;
`;

const SignButton = styled(Button)`
    width: 80%;
    margin-top: 10px;
`

const Login = () => {
    const [email, setEmail] = useState("");
    const [code, setCode] = useState("");
    const [step, setStep] = useState(1);

    const navigate = useNavigate();

    useEffect(() => {
        const flag = localStorage.getItem("ruby_login");

        if(flag === "true") {
            navigate("/");
        } else {
            return;
        };
    }, []);

    const onChangeInput = (event) => {

        setEmail(event.target.value);
    };

    const onChangeCode = (event) => {

        setCode(event.target.value);
    };


    const loginAction = async() => {

        if (email === "") {
            return message.error("이메일을 입력해주세요.");
        };
        
        const result = await axios.post("http://localhost:4000/api/user/emailCheck", {
            email,
        });

        console.log(result);

        setStep(2);
    };

    const codeCheckAction = async () => {
        await localStorage.setItem("ruby_login", true);

        message.success("Welcome to RUBY TALK");

        navigate("/friend");
    };

    return <Whole>
            <AppTitle>RUBY TOLK</AppTitle>

            <LoginBox>
                <InputGuide >
                    {step === 1 ? "이메일을 입력해주세요." : "인증번호를 입력해주세요."}
                </InputGuide >

                {step === 1 ? (
                    <InputEmail placeholder="ruby@talk.com" value={email} onChange={onChangeInput} />
                    ) : (
                    <InputEmail value={code} onChange={onChangeCode} />
                )} 

            </LoginBox>
            <SignButton
            type="primary" 
            onClick={step === 1 ? () => loginAction() : () => codeCheckAction()}>
                {step === 1 ? "SIGN IN" : "CHECK"}
            </SignButton>
            <SignButton type="default" 
            >SIGN UP    
            </SignButton>
        </Whole>
    ;
};

export default Login;