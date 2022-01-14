import React from "react";
import styled from "styled-components";
import {TeamOutlined, MessageOutlined, UserAddOutlined, SettingOutlined } from "@ant-design/icons";

const Nav = styled.div`
  width: 100%;
  height: 70px;
  background-color: #333;
  border-bottom-right-radius: 8px;
  border-bottom-left-radius: 8px;

  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;

    padding: 10px;
    box-shadow: 3px 3px 3px #999;
`;

const NavTitle = styled.h3`
  font-size: 22px;
  color: #fff;
`;


const NavDesc = styled.span`
  font-size: 14px;
  color: #fff;
`;

const NavWrapper = styled.div`
  display: flex;
  flex-direction: row;
`;

const TopNav = ({ title, desc }) => {
    const iconStyle = {
        fontSize: 26,
        color: "#fff",
        marginTop: 4,
        marginRight: 5,
    };

    return  <Nav>
            <NavWrapper>
                {title === "Friend" && (
                    <TeamOutlined style={iconStyle}/>
                )}
                {title === "Message" && (
                    <MessageOutlined style={iconStyle}/>
                )}
                {title === "Profile" && (
                    <UserAddOutlined style={iconStyle}/>
                )}
                {title === "Setting" && (
                    <SettingOutlined style={iconStyle}/>
                )}
            <NavTitle>{title}</NavTitle>
        </NavWrapper>
        <NavDesc>{desc}</NavDesc>
    </Nav> 
};

export default  TopNav;