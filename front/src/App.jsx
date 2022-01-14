import React from "react";
import styled from "styled-components";
import BottomNav from "./BottomNav";
import { Route, Routes } from "react-router-dom";
import Login from "./Login";
import Friend from "./Friend";
import Profile from "./Profile";
import Setting from "./Setting";
import Message from "./Message";


const ContentWrapper = styled.section`
    width: 100%;
    height: calc(100vh - 60px);
    background-color: #fffafa;

    overflow: scroll;
`;

const NavWrapper = styled.section`
    width: 100%;
    height: 60px;
    background-color: #ffffff;
`;

class App extends React.Component {
    render() {
        return <>
            <ContentWrapper>
                <Routes>
                    <Route exact path="/friend" element={<Friend />} />
                    <Route exact path="/message" element={<Message />} />
                    <Route exact path="/profile" element={<Profile />} />
                    <Route exact path="/setting" element={<Setting />} />
                </Routes>
            </ContentWrapper>
            <NavWrapper>
                <BottomNav />
            </NavWrapper>
        </>
    };
};

export default App;
