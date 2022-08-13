import { useWeb3 } from "@3rdweb/hooks";
import React from "react";
import styled from "styled-components";

const Header = () => {
    const { address, connectWallet } = useWeb3();

    return (
        <Wrapper>
            <Logo>scekabase</Logo>
            <ButtonWrapper onClick={() => connectWallet("injected")}>
                <Button>Connect Wallet</Button>
            </ButtonWrapper>
        </Wrapper>
    );
};

export default Header;

const ButtonWrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding-bottom: 25px;
`;

const Button = styled.button`
    display: flex;
    width: 120px;
    height: 40px;
    background-color: white;
    border-radius: 10px;
    color: black;
    justify-content: center;
    align-items: center;

    &:hover {
        cursor: pointer;
    }
`;

const Logo = styled.div`
    display: flex;
    width: 20%;
    color: #0052ff;
    margin-left: 5%;
    font-size: 30px;
    padding-bottom: 25px;
`;

const Wrapper = styled.div`
    display: flex;
    width: 100%;
    border-bottom: 1px solid #fff;
    position: fixed;
    justify-content: space-between;
    align-items: center;
    flex-direction: row;
    margin-top: -170px;
`;
