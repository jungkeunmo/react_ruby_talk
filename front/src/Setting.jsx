import React, {useEffect} from "react";
import TopNav from "./TopNav";
import { loginCheck } from "./middlewares";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import {CaretRightOutlined ,InfoCircleOutlined} from "@ant-design/icons";

const Box = styled.div`
    width: 100%;
    height: 50px;
    border-bottom: 1px solid #999;

    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
`;

const InnerBox = styled.div`
    width: ${(props) => {
        return props.width
    }};
    height: 100%;

    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;

    padding: 0px 10px;
`;

const Text = styled.span`
    font-size: 14px;
`;



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

        <Box>
            <InnerBox width="85%">
                <InfoCircleOutlined />
                <Text style={{ marginLeft: "5px" }}>개인정보</Text>
            </InnerBox>
            <InnerBox width="15%">
                <CaretRightOutlined />
            </InnerBox>
        </Box>

        <Box>
            <InnerBox width="85%">
                <InfoCircleOutlined />
                <Text style={{ marginLeft: "5px" }}>소프트웨어 정보</Text>
            </InnerBox>
            <InnerBox width="15%">
                <CaretRightOutlined />
            </InnerBox>
        </Box>

        <Box>
            <InnerBox width="85%">
                <InfoCircleOutlined />
                <Text style={{ marginLeft: "5px" }}>개발사</Text>
            </InnerBox>
            <InnerBox width="15%">
                <CaretRightOutlined />
            </InnerBox>
        </Box>

        <Box>
            <InnerBox width="85%">
                <InfoCircleOutlined />
                <Text style={{ marginLeft: "5px" }}>알람 설정</Text>
            </InnerBox>
            <InnerBox width="15%">
                <CaretRightOutlined />
            </InnerBox>
        </Box>

        <Box>
            <InnerBox width="85%">
                <InfoCircleOutlined />
                <Text style={{ marginLeft: "5px" }}>테마 설정</Text>
            </InnerBox>
            <InnerBox width="15%">
                <CaretRightOutlined />
            </InnerBox>
        </Box>
    </div>
};

export default Setting;