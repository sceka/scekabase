import React from "react";
import styled from "styled-components";
import HeaderLogedIn from "../components/HeaderLogedIn";
import Main from "../components/Main";
import Sidebar from "../components/Sidebar";

const Dashboard = ({ address }) => {
    return (
        <Wrapper>
            <Sidebar />
            <MainContainer>
                <HeaderLogedIn walletAddress={address} />
                <Main />
            </MainContainer>
        </Wrapper>
    );
};

export default Dashboard;

const Wrapper = styled.div`
    display: flex;
    height: 100%;
    width: 100%;
    color: white;
`;

const MainContainer = styled.div`
    flex: 1;
`;
