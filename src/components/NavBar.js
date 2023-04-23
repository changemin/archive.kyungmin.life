import { useState } from 'react';
import styled from "styled-components";
import { NavLink } from "react-router-dom";

export default function NavBar() {
    const [visible, setVisible] = useState(false);
    const handleMouseOver = () => {
        setVisible(true);
    };

    const handleMouseOut = () => {
        setVisible(false);
    };

    return (
        <NavBarWrapper>
            <TitleText>r-kyv</TitleText>
            <div>
                <Link to="/works" onMouseOver={handleMouseOver} onMouseOut={handleMouseOut}>works</Link>
                <Link to="/info">info</Link>
            </div>
            {!visible && <HoverEffectWrapper>WORKS</HoverEffectWrapper>}
        </NavBarWrapper>
    )
}

const NavBarWrapper = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: top;
    margin: 0;
    margin-top: 5vh;
`

const Link = styled(NavLink)`
    text-decoration: none;
    color: inherit;
    font-family: "NanumSquareNeo-EB";
    padding-left: 3vw;
    font-size: 2em;

    
`

const TitleText = styled.h1`
    margin: 0;
    font-family: "NanumSquareNeo-H";
`

const HoverEffectWrapper = styled.h1`
    height: 100vh;
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    font-family: "NanumSquareNeo-H";
    font-size: 20vw;
    color: rgba(0,0,255,0.8)
`