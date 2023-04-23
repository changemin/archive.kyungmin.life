import { useState } from 'react';
import styled from "styled-components";
import { NavLink } from "react-router-dom";

export default function NavBar() {
    const [visible, setVisible] = useState("");
    const handleMouseOver = (link) => {
        setVisible(link);
    };

    const handleMouseOut = () => {
        setVisible("");
    };

    return (
        <NavBarWrapper>
            <TitleText>r-kyv</TitleText>
            <div>
                <Link to="/works" onMouseOver={() => handleMouseOver("works")} onMouseOut={handleMouseOut}>works</Link>
                <Link to="/info" onMouseOver={() => handleMouseOver("info")} onMouseOut={handleMouseOut}>info</Link>
            </div>
            {visible=="works" && <HoverEffectWrapper>WORKS</HoverEffectWrapper>}
            {visible=="info" && <HoverEffectWrapper>INFORMATION</HoverEffectWrapper>}
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
    top: 50%;
    left: 50%;
    transform: translate(-50%, -100%);
    font-size: 13vw;
    position: fixed;
    font-family: "NanumSquareNeo-H";
    color: rgba(0,0,255,0.8)
`