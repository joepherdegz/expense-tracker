import React from "react";
import Logo from '../components/Header/Header';
import { WelcomePage } from "../components/WelcomePage/WelcomePage";
import styled from "styled-components";


const Container = styled.div`
// display: flex;
// flex-direction: column;
// width: 1440px;
// height: 800px;
// padding: 32px 100px 100px 100px;
// font-size: 40px;
color: white;
`;
export const Homepage = () => {
    return (
        <>
            <Logo />
        <Container>
            
            <WelcomePage/>
        </Container>
        </>
    );
};