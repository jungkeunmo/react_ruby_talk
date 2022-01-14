import React from "react";
import styled from "styled-components";
import {TeamOutlined, MessageOutlined, UserAddOutlined, SettingOutlined } from "@ant-design/icons";
import {Routes, NavLink} from "react-router-dom";

const Wrapper = styled.nav`
    width: 100%;
    height: 60px;

    border-top: 1px solid #acaaaa;
    box-shadow: -3px 0px 8px #757575;

    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-around;
`;

const BottomNav = () => {
    return <Wrapper>
        <NavLink to="/friend">
            <TeamOutlined style={{ fontSize: 22}} />
        </NavLink>
        <NavLink to="/message">
            <MessageOutlined style={{ fontSize: 22}} />
        </NavLink>
        <NavLink to="/profile">
            <UserAddOutlined style={{ fontSize: 22}} />
        </NavLink>
        <NavLink to="/setting">
            <SettingOutlined style={{ fontSize: 22}} />
        </NavLink>
    </Wrapper>
};

export default BottomNav;