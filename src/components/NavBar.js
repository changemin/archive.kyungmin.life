import styled from "styled-components";
import { NavLink } from "react-router-dom";

export default function NavBar() {
    return (
        <NavBarWrapper>
            <TitleText>r-kyv</TitleText>
            <div>
                <Link to="/works">works</Link>
                <Link to="/info">info</Link>
            </div>
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